import axios from 'axios'
const HTTP = axios.create({
  baseURL: 'http://coupons.escng.com/v1',
  headers: {
    // Authorization: 'Bearer {token}'
  }
})

export {
  HTTP as default
}
