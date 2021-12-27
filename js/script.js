/******************************************
project 1 - A Random Quote Generator
******************************************/

/***
 * `quotes` array
***/

const quotes =[
  {
    quote: `Don't look for a virgin in the labor ward`,
    source: `facebook`,
    citation: `Author Anonymous`
  },
  {
    quote: `Families can be hard, but they’re so worth fighting for. They might be one of the only things that are.`,
    source: `Katie Mitchell`,
    citation: `movie`,
  },
  {
    quote: `Everybody dies. Some sooner than others.`,
    source: `Hutch Mansell`,
    citation: `movie`,
    year:2021,
    tags:'Action, Drama'
  },
  {
    quote: `Everything we did, all those people we saved, look what it got us. But what if, just once, we did something just for us?`,
    source: `cott Ward`,
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
  }
];


/***
 * `getRandomQuote` function
 *
***/

function getRandomQuote() {
  let randomNumber = quotes[Math.floor(Math.random() * (quotes.length))];
  return randomNumber;
}

function randomColor(){
  return Math.floor(Math.random()*16777215).toString(16);
}

/***
 * `printQuote` function
***/
function printQuote(){
  let html = ``;
  let nextRandomQuote = getRandomQuote();
  let bgColor = randomColor();
  html += `
    ${(nextRandomQuote.quote) ? '<p class="quote">'+nextRandomQuote.quote+'</p>' : ''}
    <p class="source">${(nextRandomQuote.source) ? nextRandomQuote.source : ''}
    ${(nextRandomQuote.citation) ? '<span class="citation">'+nextRandomQuote.citation+'</span>' : ''}
    ${(nextRandomQuote.year) ? '<span class="year">'+nextRandomQuote.year+'</span>' : ''}
    ${(nextRandomQuote.tags) ? '<span class="tags">'+nextRandomQuote.tags+'</span>' : ''}</p>
    `

document.getElementById("quote-box").innerHTML = html;
document.body.style.backgroundColor = '#'+bgColor;
}

printQuote();

setInterval(() => {
  printQuote();
}, 3000);




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

 document.getElementById('load-quote').addEventListener("click", printQuote, false);
