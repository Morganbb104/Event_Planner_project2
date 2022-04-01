const profileBtn = document.querySelector('#profile')
const loginBtn = document.querySelector('#login')
const logOutButton = document.querySelector('#log-out');
const signUpBtn = document.querySelector('#sign-up')

const user = JSON.parse(localStorage.getItem('user'))

// Get user's item from localstorage
if(user) {
  profileBtn.classList.remove('hide');
  logOutButton.classList.remove('hide');
  
  signUpBtn.classList.add('hide')
  loginBtn.classList.add('hide')

} else {
  profileBtn.classList.add('hide');
  logOutButton.classList.add('hide');
  
  signUpBtn.classList.remove('hide')
  loginBtn.classList.remove('hide')

}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// function choose event to user page

// function filter
//filter time
// filter event category
//function state code
// date,time picker(type input) for our date range
// filter will be a form, frontain //html input
// eventlistener for submist btn, put information on, and take

const swiperWrapper = document.querySelector("#swiper-wrapper");
const bottomCard = document.querySelector('#bottom-card');

// get the event data to card
const getAllEvents = async () => {
  const response = await fetch("/api/events");

  const data = await response.json();

  console.log(data, 'all events');

  for(let i = 0; i < 6; i++) {
    if(data[i]) {
      const event = data[i]

      const swiperSlide = document.createElement("div");
      swiperSlide.className += "swiper-slide";
  
      const localDate = new Date(event.startDate);
      const cardBody = `
        <div class="card-header">
          <h1>${localDate.toLocaleString('en-US', {timeZone: 'PST'})}</h1>
        </div>
        <div class="card-body ${event.category}">
            <p>
                ${event.description}
            </p>
            <a class="btn">${event.state}</a>
            <a class="btn">${event.location} at ${event.startTime}</a>
            <a class="btn">${event.category}</a>
        </div>
        
        `;
  
        swiperSlide.innerHTML += cardBody;
        swiperWrapper.appendChild(swiperSlide);
    }
  }

  data.forEach(event => {

  
    const swiperSlide = document.createElement("div");
    swiperSlide.className += "card";

    const localDate = new Date(event.startDate);

    const cardBody = `
        <div class="card-header">
          <h1>${localDate.toLocaleString('en-US', {timeZone: 'PST'})}</h1>
        </div>
        <div class="card-body ${event.category}">
          <p>
              ${event.description}
          </p>
          <a href="/detail" class="btn">${event.state}</a>
          <a href="/detail" class="btn">${event.location} at ${event.startTime}</a>
          <a href="/detail" class="btn">${event.category}</a>
        </div>
      `;

      swiperSlide.innerHTML += cardBody;
      bottomCard.appendChild(swiperSlide);
  })

};

getAllEvents();



// filter function 
const form = document.getElementById('form');
const submitButton = document.querySelector('#submit-button')
const states = document.getElementById('states');
const event_category = document.getElementById('event_category');
const startT = document.getElementById('startT');
const endT = document.getElementById('endT');

// console.log(form)

const submitFunction = async (e) => {
    // alert('h');

    e.preventDefault();
    // console.log(e)
    swiperWrapper.innerHTML = ''
    bottomCard.innerHTML = ''

    const filterData = {
        state: states.value.trim(),
        event_category: event_category.value.trim(),
        startT: startT.value.trim(),
        endT: endT.value.trim()
    };

    // if(filterData.state === "all") {
    //   getAllEvents()
    //   return;
    // }

    const response = await fetch("/api/events");

    let data = await response.json();


    data = data.filter(event =>{

      const startD1 = new Date(filterData.startT)
      const startD2 = new Date(event.startDate)

      const endD1 = new Date(filterData.endT)
      const endD2 = new Date(event.endDate)

      if(filterData.state === 'all' && filterData.event_category === 'allCatergory') {
        return startD1 < startD2 && endD1 > endD2
      }

      if(filterData.state === 'all') {
        return event.category === filterData.event_category.toLowerCase() && (startD1 < startD2 && endD1 > endD2);
      }

      if(filterData.event_category === 'allCatergory') {
        return event.state === filterData.state && (startD1 < startD2 && endD1 > endD2)
      }

      return event.state === filterData.state && event.category === filterData.event_category.toLowerCase() && (startD1 < startD2 && endD1 > endD2);
    })


    for(let i = 0; i < data.length; i++) {
      if(data[i] && i < 6) {
        const event = data[i]
  
        const swiperSlide = document.createElement("div");
        swiperSlide.className += "swiper-slide";
    
        const localDate = new Date(event.startDate);
        const cardBody = `
          <div class="card-header">
            <h1>${localDate.toLocaleString('en-US', {timeZone: 'PST'})}</h1>
          </div>
          <div class="card-body ${event.category}">
              <p>
                  ${event.description}
              </p>
              <a href="#" class="btn">${event.state}</a>
              <a href="#" class="btn">${event.location} at ${event.startTime}</a>
              <a href="#" class="btn">${event.category}</a>
          </div>
          
          `;
    
          swiperSlide.innerHTML += cardBody;
          swiperWrapper.appendChild(swiperSlide);
      } else {
        break;
      }
    }
  
    data.forEach(event => {
  
        const swiperSlide = document.createElement("div");
        swiperSlide.className += "card";
    
        const localDate = new Date(event.startDate);
  
        const cardBody = `
            <div class="card-header">
              <h1>${localDate.toLocaleString('en-US', {timeZone: 'PST'})}</h1>
            </div>
            <div class="card-body ${event.category}">
              <p>
                  ${event.description}
              </p>
              <a href="/detail" class="btn">${event.state}</a>
              <a href="/detail" class="btn">${event.location} at ${event.startTime}</a>
              <a href="/detail" class="btn">${event.category}</a>
            </div>
          `;
    
          swiperSlide.innerHTML += cardBody;
          bottomCard.appendChild(swiperSlide);
    })
} 


const logOut = (e) => {
  e.preventDefault();


  localStorage.clear();

  alert('Log out')

  window.location.pathname = '/home'

}


form.addEventListener('submit', submitFunction);
logOutButton.addEventListener('click', logOut)
// submitButton.addEventListener('submit', submitFunction)
