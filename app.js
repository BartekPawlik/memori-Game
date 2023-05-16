const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())
  const gridDisplay = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardChoosen = []
  let cardChoosenId = []
  let cardsWon = []

  function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)
        card.addEventListener("click", flipCard)
    }

  }
  createBoard()
  function checkMath(){
  

     const cards = document.querySelectorAll('img')

     if (cardChoosen[0] == cardChoosen[1]) {
        alert("you have cliked the same image!")
     }
   if(cardChoosen[0] == cardChoosen[1]) {
    alert("you found a match")
    cards[cardChoosenId[0]].setAttribute('src', "images/white.png")
    cards[cardChoosenId[1]].setAttribute('src', "images/white.png")
    cards[cardChoosenId[0]].removeEventListener('click', flipCard)
    cards[cardChoosenId[1]].removeEventListener('click', flipCard)
    cardsWon.push(cardChoosen)
   }else{
    cards[cardChoosenId[0]].setAttribute('src', "images/blank.png")
    cards[cardChoosenId[1]].setAttribute('src', "images/blank.png")  
    alert("sory try again")  
   }

resultDisplay.textContent = cardsWon.length
console.log(cardsWon)
   cardChoosen = []
cardChoosenId = []



   if (cardsWon.length === cardArray.length/2) {
    resultDisplay.innerHTML = "congratulation you found them all"
   } 

  }

function flipCard() {
    let cardId = this.getAttribute("data-id")
    cardChoosen.push(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].img)
    cardChoosenId.push(cardId)
    console.log(cardChoosenId)

if (cardChoosen.length === 2) {
    setTimeout( checkMath, 500)
}


}