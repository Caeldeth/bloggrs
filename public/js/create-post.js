async function createHandler(event) {
    event.preventDefault();

    const pst_title = document.querySelector("#create-post-title").value
    const pst_content = document.querySelector("#create-post-content").value

    const response = await fetch('/api/posts', {
        method: 'post',
        body: JSON.stringify({
            pst_title,
            pst_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        console.log(response.statusText);
    }
}

document.querySelector('.create-post-form').addEventListener('submit', createHandler);