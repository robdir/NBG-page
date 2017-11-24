import ApiClient from '../../api/client'

export const UPDATE_BOOKS = 'UPDATE_BOOKS'

const api = new ApiClient()

export default () => {
  return dispatch => {

    api.get('/books')
      .then(res => {
        dispatch({ type: UPDATE_BOOKS, payload: res.body })
      })
      .catch(err => {
        console.error(err)
      })
  }
}
