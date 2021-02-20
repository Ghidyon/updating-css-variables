// Gets all inputs on the html
const inputs = document.querySelectorAll('.controls input');

// Returns a NODELIST which is similar to an ARRAY but different
// A NODELIST does not have all the methods an ARRAY has

// Log input value
function handleUpdate() {
    console.log(this.value);
    /*  
        this.dataset is an object that will contain all of the  data attributes from a specific element
        Returns an empty object when there is no data attribute found
    */
}

// Add event listener to all inputs whenever range changes and mouse moves
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));