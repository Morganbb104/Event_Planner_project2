//get all form data through submission
const eventDescription = document.querySelector('#event-description');
const eventState = document.querySelector('#event-state');
const eventLocation = document.querySelector('#event-location');
const eventCategory = document.querySelector('#event-category');
const eventStartDate = document.querySelector('#start-date');
const eventEndDate = document.querySelector('#end-date');
const eventStartTime = document.querySelector('#start-time');
const eventEndTime = document.querySelector('#end-time');
const createEventButton = document.querySelector('#create-submit')

const logOutButton = document.querySelector('#log-out');


const user = JSON.parse(localStorage.getItem('user'))

// Get user's item from localstorage
if(!user) {
    alert('please login')
// if user not logged in, redierect then to the logIn page
    window.location.pathname = '/login'
}


//function for submission 
const createEvent = async (event) =>{
    event.preventDefault();

    
    const eventBody = {
        hostId: user.id,
        location: eventLocation.value.trim(),
        state: eventState.value,
        category: eventCategory.value,
        startDate:eventStartDate.value,
        endDate: eventEndDate.value,
        startTime: eventStartTime.value,
        endTime: eventEndTime.value,
        description: eventDescription.value,
    };

    console.log(eventBody)

    // sending event details to the server using POST request
    const fetchNewEvent = await fetch('/api/events', {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(eventBody),
    });

    //if the submission is successful then go to the users personal page
    if(fetchNewEvent.ok){
        document.location.replace('/userPersonalPage');
    }
    //otherwise if it doesn't work then send text notification of error
    else{
        alert(fetchNewEvent.statusText);
    }
}

//on submit button being clicked then add the details.
createEventButton.addEventListener('click', createEvent);