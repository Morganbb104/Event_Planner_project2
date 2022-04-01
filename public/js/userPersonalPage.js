const user = JSON.parse(localStorage.getItem('user'))

console.log(user)

const cardContainer = document.querySelector('#card-container')

const getYourEvent = async () => {
    const rsvpResponse = await fetch('/api/rsvp')

    const data = await rsvpResponse.json();

    const rsvp = data.filter(e => e.userId === user.id)

    rsvp.forEach(event => {
        const card = document.createElement('div')
        card.className += 'card'

        
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
                card.innerHTML+= cardBody;
                cardContainer.appendChild(card);
            })
    })
}
getYourEvent()

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
