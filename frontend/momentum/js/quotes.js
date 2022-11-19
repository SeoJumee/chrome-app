const quotes = [
  {
    quote:
      "I can't go back to yesterday, because I was a differnet person then.",
    author: 'Cinderella',
  },
  {
    quote: 'You mean more to me than anything in the world.',
    author: 'Peter Pan',
  },
  {
    quote: 'Always let your conscience be your guide.',
    author: 'Pinocchio',
  },
  {
    quote: "Today's special moments are yomorrow's memories.",
    author: 'Aladdin',
  },
  {
    quote: "How do you spell love? You don't spell love, You feel it.",
    author: 'Winnie the Pooh',
  },
  {
    quote: 'Even miracles take a little time.',
    author: 'Cinderella',
  },
  {
    quote: 'The greatest risk any of us will take, is to be seen as we are',
    author: 'Cinderella',
  },
  {
    quote: 'Life is a journey to be experienced, not a problem to be solved.',
    author: 'Winnie the Pooh',
  },
  {
    quote: "You're only a fool if you give up.",
    author: 'Aladdin',
  },
  {
    quote: "Remember you're the one who can fill the world with sunshine.",
    author: 'Snow White',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
