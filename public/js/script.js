var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
      delay: 3000,
      disableOnInteraction:false,
    }
  });
  
  var swiper = new Swiper(".review-slider", {
      slidesPerView: 1,
      grabCursor: true,
      loop:true,
      spaceBetween: 10,
      breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1050: {
          slidesPerView: 3,
        },    
      },
      autoplay:{
        delay: 5000,
        disableOnInteraction:false,
    }
  });


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// function choose event to user page

  // function filter
//filter time
// filter event category
//function state code
// date,time picker(type input) for our date range 
// filter will be a form, frontain //html input 
// eventlistener for submist btn, put information on, and take 



function submitFunction(){
  window.alert('test');
  
  // document.getElementById('form').submit();
}


