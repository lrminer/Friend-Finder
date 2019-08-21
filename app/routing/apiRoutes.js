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
        for (let i = 0; i < req.body.answers.length; i++) {
            answers.push(parseInt(req.body.answers[i]));
        }
        const entry = new Person(req.body.name, req.body.birthday, req.body.image, req.body.color, answers);

        console.log(entry);

        dataEntries.push(entry);

        res.json(dataEntries);
    });
};