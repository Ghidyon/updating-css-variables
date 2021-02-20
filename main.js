// Gets all inputs on the html
const inputs = document.querySelectorAll('.controls input');
// Returns a NODELIST which is similar to an ARRAY but different
// A NODELIST does not have all the methods an ARRAY has

function handleUpdate() {

    /*  *** this.dataset ***
        An object that contains all "data-" attributes of a HTML element
        Returns an empty object when there is no data attribute found
    */

    // Object containing all "data-" attribute in HTML element
    const obj = this.dataset;

    // Get sizing unit from HTML element
    const unit = obj.sizing || '';

    // Set property and value using element's name and value respectively
    // Append unit to element's value
    // Set/Update HTML root document variables
    document.documentElement.style.setProperty(`--${this.name}`, this.value + unit); //setProperty(property_name, property_value)

}

// Add event listener to input whenever range changes and mouse moves
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));