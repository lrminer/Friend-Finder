const friends = require('../data/friends');

const dataEntries = friends.dataEntries;

const Person = friends.Person;

const person = new Person();



module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(dataEntries);
    });
    app.post('/api/friends', function (req, res) {
        let answers = [];

        var duplicate = dataEntries.find(function(element) {
            return element.uniqueId === req.body.uniqueId;
        });

        for (let i = 0; i < req.body.answers.length; i++) {
            answers.push(parseInt(req.body.answers[i]));
        }
        /// FIND req.body.uniqueId inside the data entries array
        if (!duplicate) { // duplicate validation through uniqueId
            
            const entry = new Person(req.body.name, req.body.birthday, req.body.image, req.body.color, answers, req.body.uniqueId);

            console.log(entry);
            
            res.json(entry.findBestMatch());
    
            dataEntries.push(entry); // we push after we have found the match. Doing this before would cause you to match yourself...

        }



    });
    // app.get('/match', function (req, res) {

    // });
};