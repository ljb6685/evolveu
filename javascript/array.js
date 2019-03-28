var i=0
var sum=[""]
// 'Add' Button Click
function myFunc() {
	const arrayNum=document.getElementById("numBox").value
	
	if (isNaN(arrayNum)) {
		window.alert("Please input number only!")
		numBox.value=""
	} else {
	sum[i]=arrayNum
	i++
	console.log(sum)
	numBox.value=""
	}
}
// 'Show' Button Click
function msgFunc() {
	msgShow.innerHTML=sum
}

var result=0
// 'Total' Button Click
function tFunc() {
	for (i=0;i<sum.length;i++) {
	result+=eval(sum[i])
	}
	console.log(result)
}
// 'Reset' Button Click
function clrFunc() {
	sum=[]
	console.log("Array:",sum)
}