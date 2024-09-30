function getReceipt() {
	// Initializes the receipt text and the running total of the order.
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;

	// Retrieves all pizza size options from the HTML (radio buttons).
	var sizeArray = document.getElementsByClassName("size");

	// Loops through the size options to find the one that is checked (selected by the user).
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			// Appends the selected size to the receipt text.
			text1 = text1 + selectedSize + "<br>";
		}
	}

	// Determines the price based on the selected size and assigns it to `sizeTotal`.
	if (selectedSize === "Custom Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Small Pizza") {
		sizeTotal = 8;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}

	// Updates the running total with the price of the selected pizza size.
	runningTotal = sizeTotal;

	// Logs the selected size and current total to the console for debugging.
	console.log(selectedSize + " = $" + sizeTotal + ".00");
	console.log("size text1: " + text1);
	console.log("subtotal: $" + runningTotal + ".00");

	// Passes the current running total and receipt text to the next function for further processing (toppings).
	getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
	// Initializes the total for the toppings and an array to store selected toppings.
	var toppingTotal = 0;
	var selectedTopping = [];

	// Retrieves all the topping options from the HTML (checkboxes).
	var toppingArray = document.getElementsByClassName("toppings");

	// Loops through the topping options and adds any selected (checked) toppings to the array.
	for (var j = 0; j < toppingArray.length; j++) {
		if (toppingArray[j].checked) {
			// Adds the selected topping to the array and appends it to the receipt text.
			selectedTopping.push(toppingArray[j].value);
			console.log("selected topping item: (" + toppingArray[j].value + ")");
			text1 = text1 + toppingArray[j].value + "<br>";
		}
	}

	// Counts the number of selected toppings.
	var toppingCount = selectedTopping.length;

	// Charges for all toppings except the first one (1 free topping).
	if (toppingCount > 1) {
		toppingTotal = (toppingCount - 1); // Subtracts 1 for the free topping.
	} else {
		toppingTotal = 0; // No charge for 1 topping or none.
	}

	// Adds the topping total to the running total.
	runningTotal = (runningTotal + toppingTotal);

	// Logs topping details and the total purchase amount to the console for debugging.
	console.log("total selected topping items: " + toppingCount);
	console.log(toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00");
	console.log("topping text1: " + text1);
	console.log("Purchase Total: $" + runningTotal + ".00");

	// Displays the updated receipt and total price on the web page.
	document.getElementById("showText").innerHTML = text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";
}
