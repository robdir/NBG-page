import request from 'superagent'

export default class ApiClient {

  constructor(host, options = {}) {
    this.host = host || 'http://localhost:3030'
  }

get(path) {
  return request
    .get(this.createUrl(path))
    .set(this.headers())
  }
}
