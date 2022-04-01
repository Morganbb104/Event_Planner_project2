const user = JSON.parse(localStorage.getItem('user'))
// Get user's item from localstorage
if(!user) {
    alert('please login')
// if user not logged in, redierect then to the logIn page
    window.location.pathname = '/login'
}

// console.log(user)
// select card-container's content into cardContainer
const cardContainer = document.querySelector('#card-container')

const getYourEvent = async () => {
    const rsvpResponse = await fetch('/api/rsvp')

    const data = await rsvpResponse.json();

    console.log(data)
    //get the user.id and save it into rsvp
    const rsvp = data.filter(e => e.userId === user.id)

    console.log(rsvp)
    //select the card and post info on the card
    rsvp.forEach(event => {
        const card = document.createElement('div')
        card.className += 'card'

        //from controller/api/events/event.js
        fetch(`/api/events/${event.eventId}`)
            .then(response => response.json())
            .then(data => {
                
                const localDate = new Date(data.startDate);
                const cardBody = `
                <div class="card-header">
                    <h1>${localDate}</h1>
                </div>
                <div class="card-body">
                    <p>
                        ${data.description}
                    </p>
                    <a href="#" class="btn">Read more</a>
                </div>
                `
                // put seeded data on the card
                card.innerHTML+= cardBody; // put the info on the cardBody
                cardContainer.appendChild(card);
            })
    })
}
getYourEvent()

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//https://errorsfixing.com/html-how-to-automatically-create-bootstrap-cards-from-a-js-file/


// attended event

//created event 