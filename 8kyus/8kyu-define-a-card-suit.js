// 8KYU CODEWARS -DEFINE A CARD SUIT 
// INSTRUCTIONS 
// You get any card as an argument. Your task is to return a suit of this card.

// Our deck (is preloaded):

// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//         '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'
// FUNDAMENTALS STRINGS BASIC LANGUAGE FEATURES

//SOLUTIONS:
//1)
function defineSuit(card) {
    let cardType = card.split('').pop()
    let suits={
     '♣': 'clubs',
     '♠': 'spades',
     '♦': 'diamonds', 
     '♥': 'hearts'    
    }
    
    return suits[cardType]
  }

  //2)
  function defineSuit(card) {
    return {
      '♣' : 'clubs',
      '♦' : 'diamonds',
      '♥' : 'hearts',
      '♠' : 'spades'
    }[card.substr(-1)]
  }