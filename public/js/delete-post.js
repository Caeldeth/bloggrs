async function deleteHandler(event) {
    event.preventDefault();

    const pst_id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];

    document.location.replace("/dashboard/");

    const response = await fetch(`/api/posts/${pst_id}`, {
        method: 'delete',
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        console.log(response.statusText);
    }
}

document.getElementById('btn-delete-edit').addEventListener('click', deleteHandler);
