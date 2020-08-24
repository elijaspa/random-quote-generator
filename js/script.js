/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// quotes array
let quotes = [
  {
    quote: 'We get the warhead and we hold the world ransom for…. One million dollars.',
    source: 'Dr. Evil (Mike Myers)',
    citation: 'Austin Powers: International Man of Mystery',
    year: 1997,
    context: 'Dr. Evil after recently waking from decades-long cryogenic freezing, completely missing the concept of inflation.'
  },
  {
    quote: 'He might be okay. [Beat. Huge explosion.] Well, no, probably not now.',
    source: 'Larry the cameraman (Chris Elliott)',
    citation: 'Groundhog Day',
    year: 1993
  },
  {
    quote: 'It\'s not a man purse. It\'s called a satchel. Indiana Jones wears one.',
    source: 'Alan Garner (Zach Galifianakis)',
    citation: 'The Hangover',
    year: 2009
  },
  {
    quote: 'It\'s just a flesh wound.',
    source: 'The Black Knight (John Cleese)',
    citation: 'Monty Python and the Holy Grail',
    year: 1975,
    context: 'The Black Knight to King Arthur, after losing both arms in the heat of combat.'
  },
  {
    quote: 'Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.',
    source: 'Will Ferrell'
  }
];

// function to generate random index for arrays
const getRandomIndex = arrayLength => {
  return Math.floor(Math.random() * Math.floor(arrayLength));
}

// get random quote function
let viewedQuotes = []; // stores viewed quotes to avoid duplication
const getRandomQuote = quoteArray => {
  // get random index 
  const randomArrayIndex = getRandomIndex(quoteArray.length);

  // store random quote object
  const quote = quoteArray[randomArrayIndex];

  // store viewed quote and remove it to avoid seeing same one before all have been viewed
  viewedQuotes.push(quote);
  quoteArray.splice(randomArrayIndex, 1);

  // check if quote array empty, if so repopulate it with ones that were viewed again
  if(quoteArray.length === 0) {
    quotes = [...viewedQuotes];
    viewedQuotes = [];
  }
  return quote;
}

// print quote function
const printQuote = () => {
  const quote = getRandomQuote(quotes);

  //construct html
  let html = '';
  html += `<p class="quote">${quote.quote}</p>
          <p class="source">${quote.source}`;

  // citation check 
  if(quote.citation !== undefined) {
    html += `<span class="citation">${quote.citation}</span>`;
  }

  // year check 
  if(quote.year !== undefined) {
    html += `<span class="year">${quote.year}</span>`
  }
  html += `</p>`;   // add the closing p tag

  // context check 
  if(quote.context !== undefined) {
    html += `<p class="quote-context">${quote.context}</p>`
  };

  changeBackgroundColor();
  document.getElementById('quote-box').innerHTML = html;
}


// change background color function
const colors = [ '#961212', '#407294', '#065535', '#420420', '#133337', 
    '#b85454', '#003366',  '#333333', '#853179'
];

const changeBackgroundColor = () => {
  // get random index for colors array
  randomIndex = Math.floor(Math.random() * Math.floor(colors.length));
  // change background color 
  document.body.style.background = colors[randomIndex];
}

// function for automatic quote changing with 10s time interval
const autoQuoteChange = () => {
  setInterval(printQuote, 10 * 1000);
}

// quote button click event listener
document.getElementById('load-quote').addEventListener("click", printQuote, false);
autoQuoteChange();