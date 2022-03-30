const signupForm=document.getElementById('signupform');
const passwordSU=document.getElementById('su-password');
const emailSU=document.getElementById('su-email');
const userName=document.getElementById('username')
const sendSignup=async(e)=>{
    e.preventDefault()

    const signupBody={
        username:userName.value.trim(),
        email:emailSU.value.trim(),
        password:passwordSU.value.trim(),

    };
    //send textbox value username,email,password to server side using post request to save it on database

    console.log('hi')
    const fetchSignup=await fetch('/user/signup',{
        method:'POST',
        headers: { 'content-type': 'application/json' },
        body:JSON.stringify(signupBody)
    });


    const response = await fetchSignup.json().then((data)=>{
window.alert(data.message);
emailSU.value="";
passwordSU.value="";
userName.value="" 
     // window.alert(`Email:${data.email} added sucessfully,Thank you for your signup,please register your information through sign in page`)
          })

}
signupForm.addEventListener('submit',sendSignup)