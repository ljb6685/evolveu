dicObject={}
dicObject['ab']='Alberta'
dicObject['on']='Ontario'
dicObject['bc']='British Columbia'
dicObject['qc']='Quebec'
dicObject['nb']='Nova Scotia'
dicObject['mb']='Manitoba'
dicObject['nb']='New Brunswick'
dicObject['nl']='Newfoundland'
dicObject['sk']='Saskatchewan'
dicObject['pe']='Prince Edward Island'

function myFunc() {
	province=document.getElementById("txtBox").value
	console.log(dicObject[province])
	msgArea.innerHTML=dicObject[province]
}