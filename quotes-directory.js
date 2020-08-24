const quotesList = [
  {
    quote: 'I recently went to a new doctor and noticed he was located in something called the Professional Building. I felt better right away.',
    source: '— George Carlin'
  },

  {
    quote: 'Before I refuse to take youer questions, I have an opening statement.',
    source: '— Ronald Reagan'
  },
  {
    quote: 'Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!',
    source: '— Billy Connolly'
  },
  {
    quote: '“People say nothing is impossible, but I do nothing every day.”',
    source: '– A. A. Milne'
  },
  {
    quote: '“Better to remain silent and be thought a fool than to speak out and remove all doubt.”',
    source: '– Abraham Lincoln'
  },
  {
    quote: '“The only mystery in life is why the kamikaze pilots wore helmets.”',
    source: '– Al McGuire'
  },
  {
    quote: '“At every party there are two kinds of people – those who want to go home and those who don’t. The trouble is, they are usually married to each other.”',
    source: '– Ann Landers'
  },
  {
    quote: '“I don’t believe in astrology; I’m a Sagittarius and we’re skeptical.”',
    source: '– Arthur C. Clarke'
  },
  {
    quote: '“If you’re going to tell people the truth, be funny or they’ll kill you.”',
    source: '– Billy Wilder'
  },

  {
    quote: '“My favorite machine at the gym is the vending machine.”',
    source: '– Caroline Rhea'
  },
  {
    quote: '“Starbucks says they are going to start putting religious quotes on cups. The very first one will say, ‘Jesus! This cup is expensive!\'”',
    source: '– Conan O’Brien'
  },
  {
    quote: '“If you think you are too small to make a difference, try sleeping with a mosquito.”',
    source: '– Dalai Lama'
  },
  {
    quote: '“If you try to fail, and succeed, which have you done?”',
    source: '– George Carlin'
  },
  {
    quote: '“I dream of a better tomorrow, where chickens can cross the road and not be questioned about their motives.”',
    source: '– Ralph Waldo Emerson'
  },
  {
    quote: '“The man who smiles when things go wrong has thought of someone to blame it on.”',
    source: '– Robert Bloch'
  }
];

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const quoteButton = document.getElementById('quoteButton');
let bodyTag = document.querySelector('main').innerHTML;

const generateRandomQuote = () => {
  
  if(quotesList.length > 0) {
    let quoteIndex = getRandomNumber(quotesList.length);
    console.log(quotesList);
    bodyTag = `<h2>${quotesList[quoteIndex].quote}</h2>
               <h3>${quotesList[quoteIndex].source}</h3>`;
    quotesList.splice(quoteIndex, 1);
    console.log(quotesList);
  }

}



quoteButton.addEventListener('click', generateRandomQuote);
