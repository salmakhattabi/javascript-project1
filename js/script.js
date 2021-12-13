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
    quote: `“Don't look for a virgin in the labor ward”`,
    source:'Author Anonymous',
    citation:'',
    year:'',
  },
  {
    quote: '“Resentment is like drinking poison and then hoping it will kill your enemies.”',
    source: 'Nelson Mandela',
    citation: '',
    year: '',
  },
  {
    quote: `“It always seems impossible until it's done.”` ,
    source: 'Nelson Mandela',
    citation: '',
    year: '',
  },
  {
    quote: `Money and success don't change people; they merely amplify what is already there.`,
    source: 'Will Smith',
    citation: '',
    year: '',
  },
  {
    quote: 'War is ugly. Sometimes you gotta get dirty to see any real change.',
    source: 'Leo',
    citation: 'movie',
    year: '2021',
  },
  {
    quote: 'Everybody dies. Some sooner than others.',
    source: 'Hutch Mansell',
    citation: 'movie',
    year: '',
  },
  {
    quote: 'Families can be hard, but they’re so worth fighting for. They might be one of the only things that are.',
    source: 'Katie Mitchell',
    citation: 'movie',
    year: '2021',
  },
  {
    quote: 'Everything we did, all those people we saved, look what it got us. But what if, just once, we did something just for us?',
    source: 'Scott Ward',
    citation: 'movie',
    year: '2021',
  },
]




/***
 * `getRandomQuote` function
***/
function getRandomQuote (){

}



/***
 * `printQuote` function
***/
getRandomQuote();



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
