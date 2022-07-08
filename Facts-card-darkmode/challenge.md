# Challenge: Add a dark/light mode to the React Facts site

Imagine you've been handed this code base which includes
all the design elements for a light and dark mode already,
but the team needs you to add the functionality to it so
it can switch from light to dark mode when the toggle is
flipped.

## Advice:
1. Spend a good amount of time looking through the existing
code base to make sure you understand how everything is
working
    a. Check the markup starting in index.js -> App.js
    -> Main.js and Navbar.js
    b. Follow the CSS classNames to the style.css file
    and make sure you understand how the styles should
    be applied
    c. Look closely at the conditional classNames in
    the JSX to help you decide what kind of props
    the components need to receive

2. Think carefully about which components need state.
This will help you decide where to write the code
initializing state and how to pass that state to
the components that need access to it.
    a. Also think about how state will need to change,
    and see if you can find the hint in the code as
    to how/where that should happen.