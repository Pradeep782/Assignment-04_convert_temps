"use strict";

// $ function for using the query selector
const $ = function (id) {
    return document.getElementById(id);
};


// function to clear values in the textboxes when user clicks on the clear button
const clearTextBoxes = function () {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

window.onload = function () {
    // function to convert the temparature based on the user entered inputs.
    $("convert").onclick = convertTemp;
    // function to convert the temparature from fahrenheit to celsius
    $("to_celsius").onclick = toCelsius;
    // function to convert the temparature from celsius to fahrenheit
    $("to_fahrenheit").onclick = toFahrenheit;
    // shifts the focus to  the input box
    $("degrees_entered").focus();
};



// function to convert the temparature based on the user entered inputs.
const convertTemp = function (e) {

    const userInput = $("degrees_entered").value;

    if (isNaN(userInput)) {

        alert("You must enter a valid number for degrees.");

        return;

    }

    // condition for Fahrenheit to Celsius conversion
    if ($("to_celsius").checked) {

        // calculate celsius from fahrenheit
        const C = (userInput - 32) * 5 / 9;

        // Inserting the computed value in text box
        $("degrees_computed").value = C;

    }


    // condition for Celsius  to Fahrenheit conversion
    else if ($("to_fahrenheit").checked) {

        // calculate fahrenheit from celsius
        const F = (9 * userInput / 5) + 32;

        // Inserting the computed value in text box
        $("degrees_computed").value = F;

    }

}




// function to convert the temparature from fahrenheit to celsius
const toCelsius = function (e) {

    $("degree_label_1").innerHTML = "Enter F degrees:";

    $("degree_label_2").innerHTML = "Degrees Celsius:";

    clearTextBoxes();

}


// function to convert the temparature from celsius to fahrenheit
const toFahrenheit = function (e) {

    $("degree_label_1").innerHTML = "Enter C degrees:";

    $("degree_label_2").innerHTML = "Degrees Fahrenheit:";
    clearTextBoxes();


}