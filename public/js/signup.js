async function signupHandler(event) {
    event.preventDefault();

    const usr_email = document.querySelector('#email-signup').value.trim();
    const usr_pw = document.querySelector('#password-signup').value.trim();
    const usr_name = document.querySelector('#name-signup').value.trim();

    /* TO-Do: if time, figure out how to make this into an array of not null values to pass to sequelize
    const usr_twitter = document.querySelector('#gh-signup').value.trim();
    const usr_github = document.querySelector('#tw-signup').value.trim();
    const usr_stackof = document.querySelector('#so-signup').value.trim();
    const usr_portfolio = document.querySelector('#pf-signup').value.trim();
    */

    console.log('usr_email' + usr_email);
    console.log('usr_pw' + usr_pw);
    console.log('username:' + usr_name);

    /*
    console.log('usr_twitter' + usr_twitter);
    console.log('usr_github' + usr_github);
    console.log('usr_stackof' + usr_stackof);
    console.log('usr_portfolio' + usr_portfolio);
    */

    if (usr_name && usr_email && usr_pw) {
        try {
            const response = await fetch('/api/users', {
                method: 'post',
                body: JSON.stringify({
                    usr_email,
                    usr_name,
                    usr_pw
                    /*
                    usr_twitter,
                    usr_github,
                    usr_stackof,
                    usr_portfolio,
                    */
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                document.location.replace('/');
                console.log(response.statusText);
            } else {
                console.log(response.statusText);
            }

            const loginStep = await fetch('/api/users/login', {
                method: 'post',
                body: JSON.stringify({
                    usr_email,
                    usr_pw
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            if(loginStep.ok) {
                document.location.replace("/");
            } else {
                console.log(response.statusText);
            }
        } catch (err) {
            // this will show the error
            console.log('There was an error!', err);
        } 
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupHandler);