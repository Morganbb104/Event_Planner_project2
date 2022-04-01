//get all form data through submission
const eventDescription = document.querySelector('#event-description');
const eventState = document.querySelector('#event-state');
const eventLocation = document.querySelector('#event-location');
const eventCategory = document.querySelector('#event-category');
const eventStartDate = document.querySelector('#start-date');
const eventEndDate = document.querySelector('#end-date');
const eventStartTime = document.querySelector('#start-time');
const eventEndTime = document.querySelector('#end-time');
const submitButton = document.querySelector('#create-submit')

//function for submission 
const createEvent = async (event) =>{
    event.preventDefault();

    const eventBody = {
        location: eventLocation.value.trim(),
        state: eventState.value,
        category: eventCategory.value,
        startDate:eventStartDate.value,
        endDate: eventEndDate.value,
        startTime: eventStartTime.value,
        endTime: eventEndTime.value,
        eventDescription: eventDescription.value,
    };

    //sending event details to the server using POST request
    const fetchNewEvent = await fetch('/events', {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(fetchNewEvent),
    })
}

//on submit button being clicked then add the details.
submitButton.addEventListener('submit', createEvent);