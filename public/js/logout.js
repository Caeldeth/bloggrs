async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        console.log(response.statusText);
    }
}

var buttonExists = document.querySelector('#logout-btn');

if (buttonExists !== null) {
    document.querySelector('#logout-btn').addEventListener('click', logout);
}
