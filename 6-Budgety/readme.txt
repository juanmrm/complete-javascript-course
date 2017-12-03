Recursos muy útiles: 
  http://codingheroes.io/resources/

  Eventos: https://developer.mozilla.org/en-US/docs/Web/Events
  KeyCodes: http://keycodes.atjayjo.com/


Qué utilizamos en el projecto?
  
  - Module Pattern: Basado en IIFE (data privacy -> new scope) y Closures.
    3 modulos: budgetController, UIController, controller

  - Concepto de Funcion Inicializadora: es la unica instruccion de codigo que se está ejecutando desde fuera de los modules.

  - Function Constructors

  - DOM Manipulation:
    - Add Listeners: document.querySelector(...).addEventListener(...)
    - Retrieve Data from DOM inputs: document.querySelector(...).value
    - Add / Remove elements from DOM:
      insertAdjacentHTML: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
  
  - Use Event Delegation and DOM traversing

  - DRY: Don't repeat yourself principle

  - SOLID principle: https://es.wikipedia.org/wiki/SOLID

    S -> SRP	Principio de responsabilidad única (Single responsibility principle)
    O -> OCP	Principio de abierto/cerrado (Open/closed principle)
          La noción de que las “entidades de software … deben estar abiertas para su extensión, pero cerradas para su modificación”.
    L	-> LSP Principio de sustitución de Liskov (Liskov substitution principle)
          La noción de que los “objetos de un programa deberían ser reemplazables por instancias de sus subtipos sin alterar el correcto funcionamiento del programa”. Ver también diseño por contrato.
    I -> ISP Principio de segregación de la interfaz (Interface segregation principle)
          la noción de que “muchas interfaces cliente específicas son mejores que una interfaz de propósito general”.
    D -> DIP Principio de inversión de la dependencia (Dependency inversion principle)
      La noción de que se debe “depender de abstracciones, no depender de implementaciones”.
      La Inyección de Dependencias es uno de los métodos que siguen este principio.