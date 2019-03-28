function makeDiv(message) {
	const div=document.createElement("div")
	div.textContent=message
	div.className="clPanel"
	//console.log(div)
	return div
}
console.log("testing makediv:",makeDiv("Make me a div"))
let counter=1
function onBodyClicked(e) {
	/* const newDiv=document.createElement("div")
	document.body.appendChild(newDiv)
	newDiv.textContent="New Div "+counter++ */
	console.log(e.target)
	e.target.textContent="Bang "+counter++
}
document.addEventListener("click",onBodyClicked)

/* let counter2=1
function onButtonPushed(e) {
	console.log("onButtonPushed",e)
	e.target.appendChild(makeDiv("I fricking did it "+counter2++))
}
document.addEventListener("click",onButtonPushed) */