import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get(`https://api.github.com/users/kennymiesner`)

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

const kennymiesner = {
  "login": "kennymiesner",
  "id": 84544990,
  "node_id": "MDQ6VXNlcjg0NTQ0OTkw",
  "avatar_url": "https://avatars.githubusercontent.com/u/84544990?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kennymiesner",
  "html_url": "https://github.com/kennymiesner",
  "followers_url": "https://api.github.com/users/kennymiesner/followers",
  "following_url": "https://api.github.com/users/kennymiesner/following{/other_user}",
  "gists_url": "https://api.github.com/users/kennymiesner/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kennymiesner/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kennymiesner/subscriptions",
  "organizations_url": "https://api.github.com/users/kennymiesner/orgs",
  "repos_url": "https://api.github.com/users/kennymiesner/repos",
  "events_url": "https://api.github.com/users/kennymiesner/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kennymiesner/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Kenny Miesner",
  "company": null,
  "blog": "",
  "location": "Des Moines, IA",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 23,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-05-20T21:30:20Z",
  "updated_at": "2021-06-20T16:39:55Z"
}

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createCard(obj) {

  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const h3 = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profileLink = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  h3.classList.add('name')
  username.classList.add('username')

  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(h3)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(profileLink)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  return card

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
