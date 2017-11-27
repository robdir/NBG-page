import request from 'superagent'

export default class ApiClient {

  constructor(host, options = {}) {
    this.host = 'https://nbg-api.herokuapp.com' || 'http://localhost:3030'
  }

get(path) {
  return request
    .get(this.createUrl(path))
  }

  createUrl(path) {
    return [this.host, path].join('')
  }

}
