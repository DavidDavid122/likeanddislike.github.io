function like() {
    let like = document.getElementById("like");
    if(like.className=='fa-regular fa-thumbs-up') {
        like.className='fa-solid fa-thumbs-up' 
    }
    else {
        like.className='fa-regular fa-thumbs-up'
    }
}
function like1() {
    let like = document.getElementById("like1");
    if(like.className=='fa-regular fa-thumbs-down') {
        like.className='fa-solid fa-thumbs-down' 
    }
    else {
        like.className='fa-regular fa-thumbs-down'
    }
}