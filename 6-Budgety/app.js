/* Module Pattern
  
  Esta Basado en IIFE (data privacy -> new scope) y Closures.
  Además se retorna / devuelve un objeto con nuestro API (metodos publicos)

*/

// BUDGET CONTROLLER
var budgetController = (function () {
  
  // Some code

})(); // Invocamos a la funcion anonima creada




// UI CONTROLLER
var UIController = (function() {

  const DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }
  
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      }
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };

})();




// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

  var DOM = UICtrl.getDOMstrings();

  var ctrlAddItem = function() {
    
    // 1. Get the field input data
    var input = UICtrl.getInput();
    console.log(input);

    // 2. Add the item to the budget controller

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI
    
  }
  
  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  // Global event listener
  document.addEventListener('keypress', function(event){
    if (event.keyCode === 13 || event.which === 13) { // Navegadores mas antiguos usan este which
      ctrlAddItem();  
    }

  });


})(budgetController, UIController);