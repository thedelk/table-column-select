import axios from 'axios'

// API URL Parameters
const Q_ROOTURL = `https://randomuser.me/api/`
const Q_NUMUSRS = `?results=25`
const Q_URLCCAT = `${Q_ROOTURL}${Q_NUMUSRS}`

// Transform API response to make usable by data table
const transform = user => ({
  email: user.email,
  location: user.location.country,
  username: user.login.username,
  login: {
    username: user.login.username,
    password: user.login.password
  },
  phone: user.phone,
  photo: {
    lg: user.picture.large,
    md: user.picture.medium,
    sm: user.picture.thumbnail
  },
  name: `${user.name.first} ${user.name.last}`
})

// Obtain users from Randomuser.me API
const getUsers = () =>
  axios
    .get(Q_URLCCAT)
    .then(response => response.data?.results?.map(transform))
    .catch(console.error)

export default getUsers
