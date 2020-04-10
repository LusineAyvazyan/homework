let numberInput;
let mathInput;
let result;
let finalResult;
let show = document.querySelector (".display");
const valueOperators = [1,2,3,4,5,6,7,8,9,0]; // .number array-ov chashxatec
const mathOperators = ['+','-','*','/']; // nuynn el sa
const numberButtons = document.querySelectorAll (".number");
const mathButtons = document.querySelectorAll (".mathButtons");
const cancelButton = document.querySelector (".cancelButton");
const equalButton = document.querySelector (".equalButton");
let history = document.querySelector ("history");


for (let i = 0; i < numberButtons.length; i++) {
	result = numberButtons[i];
	    result.addEventListener ('click', function() {
	    numberInput = show;
			for(let j = 0; j <= valueOperators.length; i++) {
	            numberInput.value += valueOperators[i];
	             break;
            }
		});
    };
            
for (let i = 0; i < mathButtons.length; i++) {
    result = mathButtons[i];
        result.addEventListener ('click', function() {
        mathInput = show;
            for(let j = 0; j <= mathOperators.length; i++) {
                mathInput.value += mathOperators[i];
                break;
            }
        });
    };

cancelButton.addEventListener ('click', function() {
    show.value = " ";
});

/*equalButton.addEventListener ('click', function() {
    finalResult = show;
    finalResult = 
    history.value = show.value;
    history.value = show.value + "=" + "" 
});*/





    

