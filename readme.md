### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans:
getElementById : We use it to find an element by it's ID. It always gives one element.

getElementsByClassName: by use it to get all elements of a class. It gives an HTMLCollection (live).

querySelector : use it with any CSS selector to get the first matching element.

querySelectorAll: to get all elements that match a selector. It gives a NodeList (static).

2. How do you **create and insert a new element into the DOM**?
Ans:
Make a new element: document.createElement("tagName").

Add content: element.innerText or element.innerHTML.

Insert it: parent.appendChild(newElement)

ex:
let p = document.createElement("p");
p.innerText = "Programming Hero";
document.body.appendChild(p);


3. What is **Event Bubbling** and how does it work?
Ans:
Event Bubbling is when an event (like a click) happens on an element, it moves up to the parent elements.

So, it goes from child → parent → grandparent.

This is the default behavior.


4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans:
Event Delegation is when we put an event listener on a parent and let it handle events on its child elements.

It’s useful because we don’t need a separate listener for every child, which saves memory.

Even if we add new child elements later, the parent can still handle their events.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:
preventDefault(): stops the normal action of an element. For example, clicking a link won’t reload the page.

stopPropagation(): stops the event from going to parent elements and only works on the element you click.
