function myFunc() {
	const incomeVal=document.getElementById("myIncome").value
	const taxCal1=incomeVal-47630
	const taxCal2=incomeVal-95259
	const taxCal3=incomeVal-147667
	const taxCal4=incomeVal-210371

	if (incomeVal<47630) {
		var taxVal=incomeVal*0.15
		taxForm.myTax.value=parseInt(taxVal)

	} else if (incomeVal>=47630 && incomeVal<95259) {
		var taxVal=(47630*0.15)+(taxCal1*0.205)
		taxForm.myTax.value=parseInt(taxVal)

	} else if (incomeVal>=95259 && incomeVal<147667) {
		var taxVal=(47630*0.15)+(47629*0.205)+(taxCal2*0.26)
		taxForm.myTax.value=parseInt(taxVal)

	} else if (incomeVal>=147667 && incomeVal<210371) {
		var taxVal=(47630*0.15)+(47629*0.205)+(52408*0.26)+(taxCal3*0.29)
		taxForm.myTax.value=parseInt(taxVal)

	} else {
		var taxVal=(47630*0.15)+(47629*0.205)+(52408*0.26)+(62704*0.29)+(taxCal4*0.33)
		taxForm.myTax.value=parseInt(taxVal) 
	}
}

function clear() {
	taxForm.myIncome.value=""
	taxForm.myTax.value=""
}