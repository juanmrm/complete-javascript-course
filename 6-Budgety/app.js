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
    this.percentage = -1; // Not defining in the start
  };
  
  Expense.prototype.calcPercentage = function(totalIncome) {
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function() {
    return this.percentage;
  }

  var Income = function(id, description, value) { // Function Constructor for Income
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function(type) {
    var sum = 0;
    data.allItems[type].forEach(function(cur) {
      sum += cur.value;
    });
    data.totals[type] = sum;
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
    },
    budget: 0,
    percentage: -1
  };

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

    deleteItem: function(type, id) {
      var ids, index;

      // Returns the array of the ids
      ids = data.allItems[type].map(function(current) {
        return current.id;
      });

      // Finds the index for the id
      index = ids.indexOf(id);

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: function() {

      // calculate total income and expenses
      calculateTotal('exp');
      calculateTotal('inc');

      // calculate the budget: income - expenses
      data.budget = data.totals.inc - data.totals.exp;

      // calculate the percentage of the income that we spent
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }

    },

    calculatePercentages: function() {
      data.allItems.exp.forEach(function(cur) {
        cur.calcPercentage(data.totals.inc);
      });
    },

    getPercentages: function() {
      var allPerc = data.allItems.exp.map(function(cur) {
        return cur.getPercentage();
      });
      return allPerc;
    },

    getBudget: function() {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      };
    },

    testing: function() { // Very useful when development
      console.log(data);
    }

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
    expenseContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercLabel: '.item__percentage',
    dateLabel: '.budget__title--month'
  };

  var formatNumber = function(num, type) {
    var numSplit, int, dec;

    /* Rules
      + or - before number
      exactly 2 decimal points
      comma separating the thousands
      ej: 2310.4567 -> + 2,310.46
    */
    num = Math.abs(num);
    num = num.toFixed(2); // Mostrar 2 decimales
    
    numSplit = num.split('.'); // Separar la parte entera de la decimal
    int = numSplit[0];
    if (int.length > 3) {
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }
    dec = numSplit[1];

    return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
  };

  // Estamos creado una funcion equivalente al forEach de los arrays pero para una NodeList
  // Ademas pasamos un callback haciedo uso de las First Class Functions
  var nodeListForEach = function(list, callback) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i); // Invocamos al callback function pasando el current element y el index
    }
  };
  
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
        html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%descriptio%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      } else if (type === 'exp') {
        element = DOMstrings.expenseContainer;
        html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%descriptio%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      }

      // Replace the placeholder text with some actual data
      newHtml = html.replace('%id%', obj.id)
                    .replace('%descriptio%', obj.description)
                    .replace('%value%', formatNumber(obj.value, type));

      // Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

    },

    deleteListItem: function(selectorID) {
      var el = document.getElementById(selectorID);
      el.parentNode.removeChild(el);

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

    displayBudget: function(obj) {
      var type = obj.budget > 0 ? 'inc' : 'exp';

      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
      document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
      
      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = '---';
      }
    },

    displayPercentages: function(percentages) {
      var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

      nodeListForEach(fields, function(current, index) {
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        }
        
      });

    },

    displayDate: function() {
      var now, year, month, months;
      
      now = new Date();
      //var christmas = new Date(2017, 12, 25);

      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      month = now.getMonth();
      
      year = now.getFullYear();
      
      document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
    },

    changedType: function() {

      var fields = document.querySelectorAll(
        DOMstrings.inputType + ',' +
        DOMstrings.inputDescription + ',' +
        DOMstrings.inputValue
      );

      nodeListForEach(fields, function(cur) {
        cur.classList.toggle('red-focus');
      });

      document.querySelector(DOMstrings.inputBtn).classList.toggle('red');

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

    // Using Event Delegatio (lo estamos poniendo en el contenedor padre de los incomes and expenses)
    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
  };

  var updateBudget = function() {
    // 1. Calculate the budget
    budgetCtrl.calculateBudget();

    // 2. Return the budget
    var budget = budgetCtrl.getBudget();

    // 3. Display the budget on the UI
    UICtrl.displayBudget(budget);
  };

  var updatePercentages = function() {

    // 1. Calculate percentages
    budgetCtrl.calculatePercentages();

    // 2. Read percentages from the budget controller
    var percentages = budgetCtrl.getPercentages();

    // 3. Update the UI with the new percentages
    UICtrl.displayPercentages(percentages);

  };

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

        // 6. Calculate and update percentages
        updatePercentages();
    }

  };

  var ctrlDeleteItem = function(event) {
    var itemID, splitID, type, ID;

    // DOM traversing using parentNode and then retrieve the id
    var itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {
      // inc-1, exp-1....
      splitID = itemID.split('-');
      type = splitID[0];
      ID = splitID[1];

      // 1. Delete the item from the data structure
      budgetCtrl.deleteItem(type, parseInt(ID));

      // 2. Delete the item from the UI
      UICtrl.deleteListItem(itemID);

      // 3. Update and show the new budget
      updateBudget();

      // 4. Calculate and update percentages
      updatePercentages();
              
    }

  };

  return {
    init: function() {
      console.log('Application has started');
      UICtrl.displayDate();
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: 0
      })
      setupEventListeners();
    }
  };

})(budgetController, UIController);

controller.init(); // Execute all the code we need for init the application.