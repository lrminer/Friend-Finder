let dataEntries = [];
// let dataEntriesMap = []; //can be redeclared within the findBestMatch method
const defaultAnswers = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];

const firstNamesArr = ["Josh", "Mary", "Mark", "James", "Jerry", "Robert", "Sage", "Charlie", "Molly", "Stacy", "Kelsey", "Timothy", "Rick", "Morty", "Barney", "Millie"]
const lastNamesArr = ["Smith", "Johnson", "Culver", "Doorn", "Miller", "White", "Brown", "Doyle", "McKenney", "Clinton", "Washington", "Jefferson", "Obama"];

class Person {
    constructor(name, birthday, image, answers) {
        (this.username = name), (this.name = name), (this.birthday = birthday || "August 21, 1993"), (this.age = birthday), (this.image = image), (this.answers = answers);
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
                    console.log("Normal");
                    console.log(this.answers[j] - dataEntries[i].answers[j]);

                    let difference = this.answers[j] - dataEntries[i].answers[j];
                    differences.push(difference);
                    console.log();
                } else {
                    console.log("Reversed");
                    console.log(dataEntries[i].answers[j] - this.answers[j]);

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


for (i = 0; i < 10; i++) {
    let randomAnswers = [];
    for (j = 0; j < 10; j++) {
        randomAnswers.push(Math.ceil(Math.random() * 5));
    }
    let firstName = Math.floor(Math.random() * firstNamesArr.length);
    firstName = firstNamesArr[firstName];
    let lastName = Math.floor(Math.random() * lastNamesArr.length);
    lastName = lastNamesArr[lastName];
    const testPerson = new Person(firstName + " " + lastName, "December 31, 1975, 23:15:30 GMT+11:00", "http://via.placeholder.com/200x200", randomAnswers);
    dataEntries.push(testPerson);
}


const person = new Person("Bob", "December 31, 1975, 23:15:30 GMT+11:00", "http://via.placeholder.com/200x200", defaultAnswers);
// dataEntries.push(person);
// dataEntries.push(person);
// dataEntries.push(person);
// dataEntries.push(person);

const test = new Person("Logan", "August 21, 1993, 12:00:00 GMT+00:00", "http://via.placeholder.com/200x200", [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
person.findBestMatch();

person.calcAge();

test.findBestMatch();

// console.log(Date.now());


// function Person(name, birthday, image, answers) {
//     this.name = name;
//     this.birthday = birthday;
//     this.age = birthday;
//     this.image = image;
//     this.score = calculation(answers);

// }

// const larry = new Person("Larry", "August 21, 1993", "http:/via.placeholder.com/200x200", [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);