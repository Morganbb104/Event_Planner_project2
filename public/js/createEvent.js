//get all form data through submission
const eventDescription = document.querySelector('#event-description');
const eventState = document.querySelector('#event-state');
const eventLocation = document.querySelector('#event-location');
const eventCategory = document.querySelector('#event-category');
const eventStart = document.querySelector('#start-date');
const eventEnd = document.querySelector('#end-date');
const submitButton = document.querySelector('#create-submit')

//function for submission 
const createEvent = async (event) =>{
    event.preventDefault();

    const eventBody = {
        location: eventLocation.value.trim(),
        category: eventCategory.value,
        
    }
}