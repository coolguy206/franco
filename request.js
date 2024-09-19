const request = require('request');
const fs = require('fs');
//? 1
// var url = `https://www.sfexaminer.com/sports/warriors/warriors-hype-man-franco-finn-carries-nba-role-into-day-job/article_04b1f18e-0705-11ee-9c61-3bc15b6df7d4.html`;

// var name = `Warriors-biggest-hype-man-has-a-day-job-Hype-up-everyone-else`;

//? 2
// var url = `https://www.nytimes.com/athletic/4218492/2023/02/17/nba-all-star-warriors-hype-man-franco-finn/`;

// var name = `nba-all-star-warriors-hype-man-franco-finn`;

//? 3
var url = `https://www.cbsnews.com/sanfrancisco/news/franco-finn-doesnt-have-a-jump-shot-but-hes-an-nba-all-star-this-weekend/`;

var name = `franco-finn-doesnt-have-a-jump-shot-but-hes-an-nba-all-star-this-weekend`;



request(url, function (error, response, body) {
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.

    fs.writeFile(`${name}.html`, body, (err) => {
        if (err)
            console.log(err);
        else {
            console.log(`File ${name}.html written successfully`);
        }
    });
});