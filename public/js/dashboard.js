function showCreatePost(){
    document.getElementById('create-div').classList.remove('d-none');
    document.getElementById('posts-div').classList.add('d-none');
    document.getElementById('profile-div').classList.add('d-none');
}

function showMyPosts(){
    document.getElementById('create-div').classList.add('d-none');
    document.getElementById('posts-div').classList.remove('d-none');
    document.getElementById('profile-div').classList.add('d-none');
}

function showEditProfile(){
    document.getElementById('create-div').classList.add('d-none');
    document.getElementById('posts-div').classList.add('d-none');
    document.getElementById('profile-div').classList.remove('d-none');
}

/* need more research to figure out how to do this
async function updateGh(event) {
    event.preventDefault();

    const new_github = document.getElementById('gh-profile').value;

    if (new_github) {
    }
}
*/

document.getElementById('btn-create').addEventListener('click', showCreatePost);
document.getElementById('btn-myPosts').addEventListener('click', showMyPosts);
document.getElementById('btn-editProfile').addEventListener('click', showEditProfile);
/*
document.getElementById('btn-update-gh').addEventListener('click', updateGh);
document.getElementById('btn-update-tw').addEventListener('click', updateTw);
document.getElementById('btn-update-so').addEventListener('click', updateSo);
document.getElementById('btn-update-pf').addEventListener('click', updatePf);
*/