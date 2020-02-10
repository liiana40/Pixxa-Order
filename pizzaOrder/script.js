/*     JavaScript PizzaToGo

      Author: M. Liliana Ignat
      Date: 6/30/2017  

      Filename: index.htm
*/
	"use strict"; //interpret contents in JavaScript strict mode 
var pizzaType = 0;
var toppimgs = 0;
var pizzaTypeTotal = 0;
var toppingsTotal = 0;
var total1 = 0;
var total2 = 0;
var total = 0;
function sumPizzaTypes() {	
	for (var i = 0; i < pizzaType.length; i++) {
		pizzaType = document.getElementById("pizzaType")[i];
			if (pizzaType[i].checked) {
				pizzaTypeTotal =  parseFloat(pizzaType[i].value += pizzaTypeTotal);
			}
	}
}
function sumToppingss() {	
	for (var i = 0; i < toppings.length; i++){
		toppimgs = document.getElementById("toppings")[i];
			if (toppings[i].checked) {
			toppingsTotal = parseFloat(toppings[i].value += toppimgsTotal);
			} 
	}				
}
document.getElementById("total").value = pizzaTypeTotal + toppingsTotal;	
//window.alert ("The total due for your pizza order is: $" + total);