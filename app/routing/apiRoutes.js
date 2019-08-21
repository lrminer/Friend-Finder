const friends = require('../data/friends');

const dataEntries = friends.dataEntries;


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////REMOVE THIS CONSTRUCTOR FROM THIS FILE//////////////////
//////////////////////vvvvvvvvvvvvvvvvvvvvvvvv/////////////////////////
///////////////////////////////////////////////////////////////////////

class Person {
    constructor(name, birthday, image, color, answers) {
        (this.username = name), (this.name = name), (this.birthday = birthday || "August 21, 1993"), (this.age = birthday), (this.image = image), (this.color = color), (this.answers = answers);
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
///////////////////////////////////////////////////////////////////////
//////////////////////^^^^^^^^^^^^^^^^^^^^^^^^/////////////////////////
///////////////REMOVE THIS CONSTRUCTOR FROM THIS FILE//////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(dataEntries);
    });
    app.post('/api/friends', function (req, res) {
        let answers = [];
        for (let i = 0; i < req.body.answers.length; i++) {
            answers.push(parseInt(req.body.answers[i]));
        }
        const entry = new Person(req.body.name, req.body.birthday, req.body.image, req.body.color, answers);

        console.log(entry);

        dataEntries.push(entry);

        res.json(dataEntries);
    });
};