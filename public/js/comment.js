async function commentHandler(event) {
    event.preventDefault();

    const cmt_text = document.getElementById('comment-text').value;
    const cmt_pst_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    console.log("text:" + cmt_text);
    console.log("postid:" + cmt_pst_id)
    if (cmt_text) {
        try {
            const response = await fetch('/api/comments', {
                method: 'POST',
                body: JSON.stringify({
                    cmt_pst_id,
                    cmt_text
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                document.location.reload();
            } else {
                console.log(response.statusText);
            }
        } catch (err) {
            // this will show the error
            console.log('There was an error!', err);
        } 
    }
}

document.getElementById('btn-post-comment').addEventListener('click', commentHandler);