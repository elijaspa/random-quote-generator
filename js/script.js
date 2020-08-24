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
const quotes = [
  {
    quote: '"We get the warhead and we hold the world ransom for…. One million dollars."',
    source: 'Dr. Evil (Mike Myers)',
    citation: 'Austin Powers: International Man of Mystery',
    year: 1997,
    context: 'Dr. Evil (Mike Myers), after recently waking from decades-long cryogenic freezing, completely missing the concept of inflation.'
  },
  {
    quote: '"He might be okay. [Beat. Huge explosion.] Well, no, probably not now."',
    source: '— Larry the cameraman (Chris Elliott)',
    citation: 'Groundhog Day',
    year: 1993,
    context: 'Larry the cameraman (Chris Elliott) after Phill Connors (Bill Murray) drives off a cliff with Punxastawney Phil.'
  },
  {
    quote: '"It\'s not a man purse. It\'s called a satchel. Indiana Jones wears one."',
    source: '— Alan Garner (Zach Galifianakis)',
    citation: 'The Hangover',
    year: 2009,
    context: 'Alan Garner (Zach Galifianakis) defending his sartorial choices.'
  },
  {
    quote: '"It\'s just a flesh wound."',
    source: '— The Black Knight (John Cleese)',
    citation: 'Monty Python and the Holy Grail',
    year: 1975,
    context: 'The Black Knight (John Cleese) to King Arthur (Graham Chapman), after losing both arms in the heat of combat.'
  },
  {
    quote: 'Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.”',
    source: '— Will Ferrell'
  }
];



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);