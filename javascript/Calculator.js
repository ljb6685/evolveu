function myFunc(btn) {
	cal.calResult.value+=btn
}
function calculate() {
	cal.calResult.value=eval(cal.calResult.value)
}
function clear() {
	cal.calResult.value=""
}