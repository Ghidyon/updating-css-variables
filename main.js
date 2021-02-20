// Selects all inputs on the html

const inputs = document.querySelectorAll('.controls input');

// Returns a NODELIST which is similar to an ARRAY but different
// A NODELIST does not have all the methods an ARRAY has

// Log input value
function handleUpdate() {
    console.log(this.value);
}

// Add event listener to all inputs whenever mouse click and moves
inputs.forEach(input => {
    input.addEventListener('change', handleUpdate);
})