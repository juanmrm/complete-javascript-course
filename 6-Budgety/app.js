/* Module Pattern
  
  Esta Basado en IIFE (data privacy -> new scope) y Closures.
  Además se retorna / devuelve un objeto con nuestro API (metodos publicos)

*/

// BUDGET CONTROLLER
var budgetController = (function () {
  
  var Expense = function(id, description, value) { // Function Constructor for Expense
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) { // Function Constructor for Income
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // Data Store Model
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  }

  return {
    addItem: function(type, des, val) {
      var newItem, ID;
      
      //[1 2 3 4 5], next ID = 6
      //[1 2 4 6 8], next ID = 9
      //  Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      
      // Create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      // Push it into our data structure
      data.allItems[type].push(newItem);

      // Return the new element
      return newItem;
    },

  };

})(); // Invocamos a la funcion anonima creada




// UI CONTROLLER
var UIController = (function() {

  const DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expenseContainer: '.expenses__list'
  }
  
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      }
    },

    addListItem: function(obj, type) {
      var html, newHtml, element;

      // Create HTML string with placeholder text
      if (type === 'inc') {
        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%descriptio%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      } else if (type === 'exp') {
        element = DOMstrings.expenseContainer;
        html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%descriptio%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      }

      // Replace the placeholder text with some actual data
      newHtml = html.replace('%id', obj.id)
                    .replace('%descriptio%', obj.description)
                    .replace('%value%', obj.value);

      // Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

    },

    clearFields: function() {
      var fields, fieldsArray;
      fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);
      // Convertimos esta Lista a Array con este 'truco'
      fieldsArray = Array.from(fields); // Tb vale Array.prototype.slice.call(fields); 
      fieldsArray.forEach(function(current, index, array) {
        current.value = '';
      });

      // Return the focus to the first input to make it simple to continue to input new values
      fieldsArray[0].focus();
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };

})();




// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

  var setupEventListeners = function() {

    const DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
    // Global event listener
    document.addEventListener('keypress', function(event){
      if (event.keyCode === 13 || event.which === 13) { // Navegadores mas antiguos usan este which en vez de keyCode
        ctrlAddItem();  
      }
    });
  }

  var updateBudget = function () {
    // 1. Calculate the budget

    // 2. Return the budget

    // 3. Display the budget on the UI
  }

  var ctrlAddItem = function() {

    var input, newItem;    
    
    // 1. Get the field input data
    input = UICtrl.getInput();

    // Solo continuamos si hay descripciom, el valor es numerico y mayor que 0.
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
         // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    
        // 3. Add the item to the UI
        UICtrl.addListItem(newItem, input.type);
    
        // 4. Clear the fields
        UICtrl.clearFields();
    
        // 5. Calculate and update budget
        updateBudget();
    }

  }

  return {
    init: function() {
      console.log('Application has started');
      setupEventListeners();
    }
  };

})(budgetController, UIController);

controller.init(); // Execute all the code we need for init the application.