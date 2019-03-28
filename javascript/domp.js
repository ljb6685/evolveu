let counter=1
const myIdDiv=document.getElementById("addCardHere")
function addedDiv() {
//Created card including design
  const createdDiv=document.createElement("div")	
	myIdDiv.appendChild(createdDiv)	
  createdDiv.textContent="Card "+counter++
  createdDiv.className="divDesign"
//Created button including design
	const addBefore=document.createElement("button")
	addBefore.setAttribute("type","button")
  addBefore.textContent="Add Before"
  createdDiv.appendChild(addBefore)
  addBefore.id="beforeBtn"
  addBefore.className="btnDesign1"

  const addAfter=document.createElement("button")
	addAfter.setAttribute("type","button")
  addAfter.textContent="Add After"
  createdDiv.appendChild(addAfter)
  addAfter.id="afterBtn"
  addAfter.className="btnDesign2"

  const addDelete=document.createElement("button")
	addDelete.setAttribute("type","button")
  addDelete.textContent="Delete"
  createdDiv.appendChild(addDelete)
	addDelete.id="deleteBtn"
  addDelete.className="btnDesign3"
//Created space to move next line
	const breakSpace=document.createElement("br")
	createdDiv.insertBefore(breakSpace,addBefore)
  return createdDiv
}
//Click event for button to create new card 
idBtnPushed=document.getElementById("idBtnPush")
idBtnPushed.addEventListener("click",addedDiv)
//Created event target for parent element
function addBefore() {
  let newCard=addedDiv()
  let existingCard=event.target.parentElement
  let parentDiv=existingCard.parentElement
  parentDiv.insertBefore(newCard,existingCard)
}
function addAfter() {
  let newCard=addedDiv()
  let existingCard=event.target.parentElement
  let parentDiv=existingCard.parentElement
  parentDiv.insertBefore(newCard,existingCard.nextSibling)
}
function addDelete() {
  let parentDiv=event.target.parentElement
  parentDiv.remove()
}
//Created events for each button inside newcard
function myBtnFunc(event) {
  let myTarget=event.target
  console.log(event.target)
 
  if(myTarget.id==="beforeBtn") {
      addBefore() }
    else if(myTarget.id==="afterBtn") {
      addAfter() }
    else if(myTarget.id==="deleteBtn") {
     addDelete() }
}	
myIdDiv.addEventListener("click",myBtnFunc)