console.log("Document")
function onButtonPushed() {
	console.log("onButtonPushed")
	idH1.textContent="Hello Universe"
}
const idBtnPushed=document.getElementById("idBtnPush")
idBtnPushed.addEventListener("click",onButtonPushed)
console.log(idH1)
//idH1.textContent="Hello Universe"
function mouseOvered() {
	idH3.textContent="Hello Saskatoon"
}
const idMouseOvered=document.getElementById("idH3")
idMouseOvered.addEventListener("mouseover",mouseOvered)
function mouseOuted() {
	idH4.textContent="Hello Saskatoon"
}
const idMouseOuted=document.getElementById("idH4")
idMouseOuted.addEventListener("mouseout",mouseOuted)
let counterEle=1
function addedElement() {
	createdEle=document.createElement("h1")
	document.body.appendChild(createdEle)
	createdEle.textContent="Hello World "+counterEle++
}
const idBtnPushed2=document.getElementById("idBtnPush2")
idBtnPushed2.addEventListener("click",addedElement)
let counterDiv=1
function addedDiv() {
	createdDiv=document.createElement("div")	
	myIdDiv=document.getElementById("idDiv")
	myIdDiv.appendChild(createdDiv)	
	createdDiv.textContent="Hello World on Div"+counterDiv++
}
const idBtnPushed3=document.getElementById("idBtnPush3")
idBtnPushed3.addEventListener("click",addedDiv)
aa=document.getElementById("countEle")
bb=document.getElementById("countDiv")
idBtnPushed2.onclick=function() {
	aa.innerHTML=Number(aa.innerHTML)+1
}
idBtnPushed3.onclick=function() {
	bb.innerHTML=Number(bb.innerHTML)+1
}