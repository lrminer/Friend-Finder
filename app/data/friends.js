let dataEntries = [];
// let dataEntriesMap = []; //can be redeclared within the findBestMatch method
const defaultAnswers = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
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
            for (let j = 0; j < this.answers.length; j++) {
                if (this.answers[j] >= dataEntries[i].answers[j]) {
                    console.log("Normal");
                    console.log(this.answers[j] - dataEntries[i].answers[j]);
                } else {
                    console.log("Reversed");
                    console.log(dataEntries[i].answers[j] - this.answers[j]);
                }
            }


        }
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



const person = new Person("Bob", "December 31, 1975, 23:15:30 GMT+11:00", "http://via.placeholder.com/200x200", defaultAnswers);
dataEntries.push(person);
dataEntries.push(person);
dataEntries.push(person);
dataEntries.push(person);

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