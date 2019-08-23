$(document).ready(function () {
    // ON PAGE LOAD MAKE A NEW HEXADECIMAL UNIQUE ID...
    function generateRandomTwelveDigitHex() {

        let hex12 = "";

        for (let i = 0; i < 12; i++) {
            hex12 += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)];
        }

        return hex12;
    }

    $('#input-unique-id').val(generateRandomTwelveDigitHex());

    // USE JQUERY TO GRAB SURVEY DATA HERE...
    $('#submit-btn').on('click', function (e) {
        e.preventDefault();

        const name = $('#input-name').val();
        const birthday = $('#input-birthday').val();
        //answers
        const image = $('#input-image').val();
        const color = $('#input-color').val();
        const answers = [];

        const uniqueId = $('#input-unique-id').val();



        let matchIndex = 0;

        $('li :selected').each(function () {
            const answer = $(this).val();
            answers.push(answer);
        })
        // console.log(answers);
        //sends to the database
        $.post('/api/friends', {
            'name': name,
            'birthday': birthday,
            'image': image,
            'color': color,
            'answers': answers,
            'uniqueId': uniqueId
        }, function (data) {
            console.log(data);
            matchIndex = data.match;
            SQM = data.SQM
            console.log(SQM);
            console.log(matchIndex);
        }).then(function () {
            $.ajax({
                url: 'api/friends', // should be api/friends/all
                method: "GET"
            }).then(function (data) {
                console.log(data);

                // console.log(data.match[matchIndex]) // this is the match console.logged
                //use jQuery to present data at index
                // console.log(data.SQM[matchIndex])
                console.log(data[matchIndex]);
                // console.log(SQM)
                const yourMatch = data[matchIndex];
                console.log(yourMatch.name)

                let matchInfo = $('#match-information');

                let div = $('<div>');




                div.append(
                    $('<img>').attr('src', yourMatch.image),
                    $('<h2>').text("Name: " + yourMatch.name),
                    $('<h2>').text("Favorite Color: " + yourMatch.color),
                    $('<h2>').text("Age: " + yourMatch.age),
                    $('<h2>').text("Birthday: " + yourMatch.birthday),

                );

                matchInfo.append(div);



            });
        });
    });
});