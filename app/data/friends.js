const moment = require('moment');

const dataEntries = [];
// let dataEntriesMap = []; //can be redeclared within the findBestMatch method
const defaultAnswers = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];

const firstNamesArr = ["Josh", "Mary", "Mark", "James", "Jerry", "Robert", "Sage", "Charlie", "Molly", "Stacy", "Kelsey", "Timothy", "Rick", "Morty", "Barney", "Millie", "Hannah", "Logan", "Ian", "Sophie", "John", "Joe", "Joseph", "Bob", "Thad", "Chad", "Brad", "Winnie", "Stephen", "Jack", "David", "William", "Martha", "Megan", "Bill"];
const lastNamesArr = ["Smith", "Johnson", "Culver", "Doorn", "Miller", "White", "Brown", "Doyle", "McKenney", "Clinton", "Washington", "Jefferson", "Obama", "Zhang", "Kobeyashi", "Yoshi", "Watanabe", "Boyle", "Miner", "Hayward", "Stevens", "Armstrong", "Kinder", "Murdock", "Burgess"];




class Person {
    constructor(name, birthday, image, color, answers) {
        (this.username = name), (this.name = name), (this.birthday = birthday || "August 21, 1993"), (this.age = birthday), (this.image = image), (this.color = color || colorRandomizer.randomColor()), (this.answers = answers);
    }


    findBestMatch() {
        console.log("Calculating score... ");
        // dataEntries.forEach(element => {
        //     // console.log(element);
        //     console.log('Against ' + element.name);
        //     console.log(element.answers);
        //     const map1 = element.answers.map(function(this.answers){

        //     }));
        //     console.log(map1);

        let dataEntriesMapped = [];
        // this is going through each Person and take their answers for comparison. Each comparison will be sent to the a new array
        for (let i = 0; i < dataEntries.length; i++) {
            console.log(dataEntries[i]);
            // console.log(this.answers);
            let totalDifference = 0;
            let differences = [];
            for (let j = 0; j < this.answers.length; j++) {
                if (this.answers[j] >= dataEntries[i].answers[j]) {
                    // console.log("Normal");
                    // console.log(this.answers[j] - dataEntries[i].answers[j]);

                    let difference = this.answers[j] - dataEntries[i].answers[j];
                    differences.push(difference);
                    console.log();
                } else {
                    // console.log("Reversed");
                    // console.log(dataEntries[i].answers[j] - this.answers[j]);

                    let difference = dataEntries[i].answers[j] - this.answers[j];
                    differences.push(difference);
                    console.log();

                }
            }
            differences.forEach(function (item) {
                totalDifference += item;
            });
            dataEntriesMapped.push(totalDifference); //should be mapped to an object using a constructor

            console.log(differences);






        }
        console.log("All the data entries:" + dataEntriesMapped);
        //TODO find the smallest difference and give that back as a value. Store that value in an object and send it as JSON to the client.

        Array.min = function (array) {
            return Math.min.apply(Math, array);
        };
        var minimum = Array.min(dataEntriesMapped);

        console.log(minimum);

        console.log(dataEntriesMapped.indexOf(minimum)); // this will only return the first instance of the minimum score
        const indexOfMin = dataEntriesMapped.indexOf(minimum);

        console.log("\n====================WE FOUND A MATCH======================\n");
        console.log(dataEntries[indexOfMin]);




    }
    calcAge(birthday) {
        console.log("Calculating the age...");
        birthday = this.birthday;
        const date1 = new Date(birthday);

        this.birthYear = date1.getUTCFullYear();
        this.birthMonth = date1.getMonth();

        console.log(date1.getUTCFullYear());
        console.log(this.birthday);

        this.age = this.birthday;
        console.log(this.birthMonth);
        console.log(this.birthYear);

    }
}


function randomDate(date1, date2){
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    var date1 = date1 || '01-01-1960';
    var date2 = date2 || new Date().toLocaleDateString();
    date1 = new Date(date1).getTime();
    date2 = new Date(date2).getTime();
    if( date1>date2){
        const randomBirthdate = new Date(getRandomArbitrary(date2,date1)).toLocaleDateString();
        return randomBirthdate;
    } else{
        const randomBirthdate = new Date(getRandomArbitrary(date1,date2)).toLocaleDateString();
        return randomBirthdate;
    }
}


class Color {
    constructor() {
        (this.color = this.randomColor());
    }
    randomColor() {
        let colorCode = "#";
        for (let i = 0; i < 3; i++) {
            colorCode += [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)];
            colorCode += [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)];
        }
        return colorCode;
    }
}

const colorRandomizer = new Color();

randomDate('02/13/2013', '01/01/2000');

for (i = 0; i < 100; i++) {

    const firstName = firstNamesArr[Math.floor(Math.random() * firstNamesArr.length)];

    const lastName = lastNamesArr[Math.floor(Math.random() * lastNamesArr.length)];

    const randomAnswers = [];
    for (j = 0; j < 10; j++) {
        randomAnswers.push(Math.ceil(Math.random() * 5));
    }

    const date = randomDate('01/01/1963', '01/01/2000');

    const photo = `https://via.placeholder.com/200/${colorRandomizer.randomColor().slice(1)}`;

    const testPerson = new Person(firstName + " " + lastName, date, photo, colorRandomizer.randomColor(), randomAnswers);
    dataEntries.push(testPerson);
}

// const test = new Person("Logan", "August 21, 1993, 12:00:00 GMT+00:00", "http://via.placeholder.com/200x200", [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
// person.findBestMatch();
// person.calcAge();
// test.findBestMatch();
// console.log(Date.now());


// function Person(name, birthday, image, answers) {
//     this.name = name;
//     this.birthday = birthday;
//     this.age = birthday;
//     this.image = image;
//     this.score = calculation(answers);

// }

// const larry = new Person("Larry", "August 21, 1993", "http:/via.placeholder.com/200x200", [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

module.exports = {
    dataEntries: dataEntries,
    // Person: class Person()
};