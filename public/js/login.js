// login DOM
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const loginForm = document.getElementById('loginform');

// update password DOM


const sendData = async (e) => {
    e.preventDefault();
    const body = {
        email: emailEl.value.trim(),
        password: passwordEl.value.trim()
    };


    const fetchUser = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    
    
    
    const response = await fetchUser.json()

    console.log(response)
    

    if(response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.userInfo))

        window.location.pathname = '/'
    }

    window.alert(response.message);


    emailEl.value = "";
    passwordEl.value = "";


} 

loginForm.addEventListener('submit', sendData);
