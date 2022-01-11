async function editHandler(event) {
    event.preventDefault();

    const pst_title = document.getElementById('edit-title').value;
    const pst_content = document.getElementById('edit-post-content').value;
    const pst_id = window.location.toString().split("/")[
        window.location.toString().split("/").length-1
    ];
    console.log(pst_title);
    document.location.replace("/dashboard/");

    const response = await fetch(`/api/posts/${pst_id}`, {
        method: 'put',
        body: JSON.stringify({
            pst_title,
            pst_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        console.log(response.statusText);
    }
}

document.getElementById('btn-save-edit').addEventListener('click', editHandler);