1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer: 
getElementById selects the element wih a unique id and returns a single DOM element.It  doesn't require any loop since it is a single element.
getElementByClassName selects all the elements with the same class name and it returns a liveHTML collection To work with all the elements, you usually need to loop through them. It is live- it updates if the DOM changes.

querySelector and querySelectorAll both work with only CSS selectors.While querySelectorAll selects all the elements that match the CSS selector, the querySelector selects the first matching element that matches the CSS selector. 

querySelector returns a single DOM element, on the other hand querySelectorAll returns a static Node List- it doesn't update automatically if changes are done in the DOM.

2. How do you create and insert a new element into the DOM?

answer: A new element can be created using document.createElement(). After creating it, you can add text, classes, IDs, or styles. To insert the element into the DOM, use methods like .appendChild() or .prepend(). For an example-

I want to create a new div, insert a text 'hello world' and insert it to the body of DOM.

<!-- create a new div -->
const newDiv = document.createElement('div');

<!-- put a text or element inside the div -->
newDiv.textContent = 'Hello World';

<!-- add a class list (if necessary)  -->
newDiv.classList.add('text');

<!-- insert the div into the body  -->
document.body.appendChild(newDiv);

This task can also be done also with .innerHTML.

const newDiv = document.createElement('div');
newDiv.innerHTML= ` <div class="text">Hello World</div>`


3. What is Event Bubbling and how does it work?

answer:
When an event occurs (like a click or keypress), it first affects the target element. If an event handler is set for that element, the handler is triggered and the browser executes the associated function. After that, the event bubbles up the DOM tree to the parent element. If the parent has an event handler for the same event, it is also triggered. This process continues, moving up through all ancestor elements, until the event reaches the top of the DOM (the document element).


4. What is Event Delegation in JavaScript? Why is it useful?

answer: Event Delegation in JavaScript is a way to handle events more efficiently. Instead of adding an event listener to each individual child element, you attach a single listener to a parent element. The parent then “listens” for events that bubble up from its children, and you can figure out which child triggered the event.

It is useful because-

i. It is More efficient: You don’t need to attach listeners to every child, which saves memory and improves performance.

ii. It works with dynamic content: If you add new elements to the page later, the parent’s listener will still catch events from them.

iii. To write a Cleaner code: Fewer listeners mean simpler, easier-to-maintain code.



5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: The preventDefault() prevents the default behavior of an element. For example: when someone clicks a link it navigates to another page, Submitting a form  refreshes the page by default etc.

 The preventDefault() doesn’t stop the event itself from firing or from bubbling up — it only cancels the browser’s built-in action for that element. 

 The stopPropagation() doesn't affect the default behavior, rather it stops event bubbling (or capturing) so that only the target element handles the event. Basically it stops the event from reaching parent elements in the DOM tree.