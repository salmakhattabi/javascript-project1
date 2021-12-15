/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/

const quotes =[
  {
    quote: `Don't look for a virgin in the labor ward`,
    source: `facebook`,
    citation: `Author Anonymous`,
    year: 2021
  },
  {
    quote: `Families can be hard, but they’re so worth fighting for. They might be one of the only things that are.`,
    source: `Katie Mitchell`,
    citation: `movie`,
    year: 2021,
  },
  {
    quote: `Everybody dies. Some sooner than others.`,
    source: `Hutch Mansell`,
    citation: `movie`,
    year:2021,
  },
  {
    quote: `Everything we did, all those people we saved, look what it got us. But what if, just once, we did something just for us?`,
    source: `cott Ward`,
    citation: `movie`,
    year: 2021,
  },
  {
    quote: `It always seems impossible until it's done.`,
    source: `Nelson Mandela`,
    citation: `book`,
    year:1985,
  },
  {
    quote: `Money and success don't change people; they merely amplify what is already there`,
    source: `Will Smith`,
    citation: `twitter`,
    year:2012,
  }
];


/***
 * `getRandomQuote` function
 *
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNumber];
}
console.log(getRandomQuote());


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);
