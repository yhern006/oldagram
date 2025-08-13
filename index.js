
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
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
console.log(feedPostsEl)

function loadPost() {
    const currentPoster = posts[0]

    let posterInfo = document.createElement('div')
    posterInfo.setAttribute('class', 'postDiv')
    document.body.appendChild(posterInfo)

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
    posterInfo.appendChild(posterImg)
}

loadPost()