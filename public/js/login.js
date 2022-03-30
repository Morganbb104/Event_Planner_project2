
// login DOM
const emailEl=document.getElementById('email');
const passwordEl=document.getElementById('password');
const loginForm=document.getElementById('loginform');

// update password DOM




const sendData = async (e) => {
    e.preventDefault();
  const body={
    email:emailEl.value.trim(),
    password:passwordEl.value.trim()
  
  }
  console.log(body)
    const fetchUser = await fetch('/user/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body)
    });
    const response = await fetchUser.json().then((data)=>{
      window.alert(data.message);
emailEl.value="";
passwordEl.value=""
    });
  
  
  
  
  }
  
  loginForm.addEventListener('submit',sendData);


