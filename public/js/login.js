async function loginHandler(event){
    event.preventDefault();

    const usr_email = document.querySelector('#email-login').value.trim();
    const usr_password = document.querySelector('#password-login').value.trim();
    console.log("email:" + usr_email);
    console.log("pw:" + usr_password);

    if (usr_email && usr_password) {
        
        const response = await fetch('api/users/login', {
            method: 'post',
            body: JSON.stringify({
                usr_email,
                usr_password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    } 
}

document.querySelector('.login-form').addEventListener('submit', loginHandler);