const data =
	{clients:
		[
			{name:"Jane", balance:10},
			{name:"Liam", balance:1000},
			{name:"Emma", balance:1330},
			{name:"Olivia", balance:310},
			{name:"Noah", balance:503},
			{name:"William", balance:520},
			{name:"Benjamin", balance:150},
		]
};

for (i = 0;i<data.clients.length; i++) {
	var aaa=data.clients[i]
	console.log(aaa.name,aaa.balance)
	 



function myFunc() {
	const ctDiv=document.createElement("div")
	const newDiv=document.getElementById("myDiv")
	newDiv.appendChild(ctDiv)
	ctDiv.textContent="card"



	
	
	ctDiv.className="divDesign"
} 
}

/*

function addedDiv() {
	const createdDiv=document.createElement("div")	
  const myIdDiv=document.getElementById("idDiv")
	myIdDiv.appendChild(createdDiv)	
  createdDiv.textContent="Card "+counter++
  createdDiv.className="divDesign"

*/

//idBtnPushed=document.getElementById("idBtnPush")
document.addEventListener("click",myFunc) 