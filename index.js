
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 214
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const feedPostsEl = document.getElementById("feed-posts")

function loadPost(postIndex) {
    const currentPoster = posts[postIndex]
    let html_string = ""

    html_string = `<div class='post-div'>
                        <div class='post-header'>
                            <img src=${currentPoster.avatar} class='avatar'>
                            <div class='wordDiv'>
                                <p class='bold-text'>${currentPoster.name}</p>
                                <p>${currentPoster.location}</p>
                            </div>
                        </div>

                        <img class='post-img' src=${currentPoster.post}>
                    
                        <div class='post-body'>
                            <div class='buttons-div'>
                                <div class='heart-icon btn-icon'></div>
                                <img src='images/icon-comment.png' class='btn-icon icon'>
                                <img src='images/icon-dm.png' class='btn-icon icon'>
                            </div>
                            <p><span class='bold-text'>
                                ${currentPoster.likes} likes
                            </span></p>
                            <p><span class='bold-text'>${currentPoster.username}</span> 
                                ${currentPoster.comment}
                            </p>
                        </div>
                    </div>`

    feedPostsEl.innerHTML += html_string
}

for(let i = 0; i < posts.length; i++) {
    loadPost(i)
}