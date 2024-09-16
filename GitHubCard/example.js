import axios from 'axios';

// {
//   "login": "kennymiesner",
//   "id": 84544990,
//   "node_id": "MDQ6VXNlcjg0NTQ0OTkw",
//   "avatar_url": "https://avatars.githubusercontent.com/u/84544990?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/kennymiesner",
//   "html_url": "https://github.com/kennymiesner",
//   "followers_url": "https://api.github.com/users/kennymiesner/followers",
//   "following_url": "https://api.github.com/users/kennymiesner/following{/other_user}",
//   "gists_url": "https://api.github.com/users/kennymiesner/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/kennymiesner/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/kennymiesner/subscriptions",
//   "organizations_url": "https://api.github.com/users/kennymiesner/orgs",
//   "repos_url": "https://api.github.com/users/kennymiesner/repos",
//   "events_url": "https://api.github.com/users/kennymiesner/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/kennymiesner/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Kenny Miesner",
//   "company": null,
//   "blog": "",
//   "location": "Des Moines, IA",
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 23,
//   "public_gists": 0,
//   "followers": 0,
//   "following": 0,
//   "created_at": "2021-05-20T21:30:20Z",
//   "updated_at": "2021-06-20T16:39:55Z"
// }

axios.get(`https://api.github.com/users/kennymiesner`)
  .then(res => {
    document.querySelector(".cards").appendChild(createCard(res.data));
  })
  .catch(err => console.log(err.message))
  .finally(() => console.log('Done'))


const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
    .then(res => {
      document.querySelector(".cards").appendChild(createCard(res.data));
    })
    .catch(err => console.log(err.message))
    .finally(() => console.log('Done'))
})

function createCard(obj) {

  const card = document.createElement('div')
  const avatar = document.createElement('img')
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

  card.appendChild(avatar)
  card.appendChild(cardInfo)
  cardInfo.appendChild(h3)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(profileLink)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  avatar.src = obj.avatar_url
  h3.textContent = obj.name
  username.textContent = obj.login
  location.textContent = `Location: ${obj.location}`
  profileLink.href = obj.html_url
  profileLink.textContent = `Profile: ${obj.html_url}`
  followers.textContent = `Followers: ${obj.followers}`
  following.textContent = `Following: ${obj.following}`
  bio.textContent = `Bio: ${obj.bio}`

  return card

}
