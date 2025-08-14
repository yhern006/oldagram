
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

    let postDiv = document.createElement('div')
    postDiv.setAttribute('class', 'post-div')
    feedPostsEl.appendChild(postDiv)

    let posterInfo = document.createElement('div')
    posterInfo.setAttribute('class', 'post-header')
    postDiv.appendChild(posterInfo)

    let posterAvatar = document.createElement('img')
    posterAvatar.src = currentPoster.avatar
    posterAvatar.setAttribute('class', 'avatar')
    posterInfo.appendChild(posterAvatar)

    let wordDiv = document.createElement('div')
    wordDiv.setAttribute('class', 'wordDiv')
    posterInfo.appendChild(wordDiv)

    let posterName = document.createElement('p')
    posterName.textContent = currentPoster.name
    posterName.setAttribute('class', 'bold-text')
    wordDiv.appendChild(posterName)

    let posterLocation = document.createElement('p')
    posterLocation.textContent = currentPoster.location
    wordDiv.appendChild(posterLocation)

    let posterImg = document.createElement('img')
    posterImg.src = currentPoster.post
    posterImg.setAttribute('class', 'post-img')
    postDiv.appendChild(posterImg)

    let postBody = document.createElement('div')
    postBody.setAttribute('class', 'post-body')
    postDiv.appendChild(postBody)

    let buttonsDiv = document.createElement('div')
    buttonsDiv.setAttribute('class', 'buttons-div')
    postBody.appendChild(buttonsDiv)

    let heatBtn = document.createElement('img')
    heatBtn.src = 'images/icon-heart.png'
    heatBtn.setAttribute('class', 'btn-icon')
    buttonsDiv.appendChild(heatBtn)

    let commentBtn = document.createElement('img')
    commentBtn.src = 'images/icon-comment.png'
    commentBtn.setAttribute('class', 'btn-icon')
    buttonsDiv.appendChild(commentBtn)

    let dmBtn = document.createElement('img')
    dmBtn.src = 'images/icon-dm.png'
    dmBtn.setAttribute('class', 'btn-icon')
    buttonsDiv.appendChild(dmBtn)

    let postStats = document.createElement('p')
    postStats.innerHTML = `<span class='bold-text'>
                            ${currentPoster.likes} likes
                            </span>`
    postBody.appendChild(postStats)

    let comments = document.createElement('p')
    comments.innerHTML = `<span class='bold-text'>
                            ${currentPoster.username}
                            </span> 
                            ${currentPoster.comment}`
    postBody.appendChild(comments)
}

for(let i = 0; i < posts.length; i++) {
    loadPost(i)
}