const refList = []

async function getBoMLibary(){
  const url = 'https://raw.githubusercontent.com/bcbooks/scriptures-json/master/book-of-mormon.json'
  const response = await fetch(url)
  if (response.ok){
    BookofMormonList = await response.json()
      console.log(BookofMormonList)
      //renderPage(BookofMormonList)
      let verse = GetRandomScripture(BookofMormonList)
      let origIndex = MakeRandomReferenceList(BookofMormonList, verse)
      renderScripture(verse)
      renderReferenceList(origIndex)
      console.log(verse)
      console.log(refList)
      eventListener(origIndex)
  }
}


function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function GetRandomScripture(BookofMormonList){
  let bookIndex = getRandomNumber(BookofMormonList.books.length)
  let chapterIndex = getRandomNumber(BookofMormonList.books[bookIndex].chapters.length)
  let verseIndex = getRandomNumber(BookofMormonList.books[bookIndex].chapters[chapterIndex].verses.length)
  let verse = BookofMormonList.books[bookIndex].chapters[chapterIndex].verses[verseIndex]
  return verse
}

function MakeRandomReferenceList(BookofMormonList, verse){
  originalRefIndex = getRandomNumber(10)
  for (let i = 0; i < 10; i++){
    if (i == originalRefIndex){
      refList.push(verse.reference)
    } else {
      let randomVerse = GetRandomScripture(BookofMormonList)
      refList.push(randomVerse.reference)
    }
  }
  return originalRefIndex
}


function renderScripture(verse){
  document.querySelector("#scripture").textContent = verse.text
}


function renderReferenceList(originalRefIndex){
const buttonList = document.querySelector("#buttons")
for (let i = 0; i < refList.length; i++){
  let button = document.createElement("input");
  button.setAttribute('type', "button")
  button.setAttribute('value', refList[i])
  let idText = `wrong${i}`
  if (originalRefIndex == i){
    button.setAttribute('id', "right")
  }
  else{
    button.setAttribute('id', idText)
  }
  buttonList.append(button);
}
}



function removeButtons(){
  const elem = document.querySelector("#buttons");
  document.querySelector("#list").removeChild(elem);
  let buttonElement = document.createElement("div");
  buttonElement.setAttribute('id', "buttons")
  document.querySelector("#list").append(buttonElement);
}

function clearReferenceList(){
  while (refList.length != 0){
    refList.shift()
  }
}




let wrong = 0
let right = 0
document.querySelector("#CorrectNum").textContent = right
document.querySelector("#WrongNum").textContent = wrong

function correctAnswer(){
  //console.log("right")
  removeButtons()
  clearReferenceList()
  getBoMLibary()
  right++
  document.querySelector("#CorrectNum").textContent = right
}

function wrongAnswer(){
  //console.log("wrong")
  wrong++
  document.querySelector("#WrongNum").textContent = wrong
}


function eventListener(origIndex){
  document.querySelector("#right").addEventListener("click", correctAnswer)

  if (origIndex != 0){
    document.querySelector("#wrong0").addEventListener("click", wrongAnswer)
  }
  if (origIndex != 1){
    document.querySelector("#wrong1").addEventListener("click", wrongAnswer)
  }
  if (origIndex != 2){
    document.querySelector("#wrong2").addEventListener("click", wrongAnswer)
  }
  if (origIndex != 3){
    document.querySelector("#wrong3").addEventListener("click", wrongAnswer)
  }
  if (origIndex != 4){
    document.querySelector("#wrong4").addEventListener("click", wrongAnswer)
  }
  if (origIndex != 5){
    document.querySelector("#wrong5").addEventListener("click", wrongAnswer)
  }
  if (origIndex != 6){
    document.querySelector("#wrong6").addEventListener("click", wrongAnswer)
  }
  if (origIndex != 7){
    document.querySelector("#wrong7").addEventListener("click", wrongAnswer)
  }
  if (origIndex != 8){
    document.querySelector("#wrong8").addEventListener("click", wrongAnswer)
  }
  if (origIndex != 9){
    document.querySelector("#wrong9").addEventListener("click", wrongAnswer)
  }
}



getBoMLibary()


