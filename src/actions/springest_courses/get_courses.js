import ApiClient from '../../api/client'

export const GET_COURSES = 'GET_COURSES'

const api = new ApiClient()

export default () => {
  return dispatch => {

    api.get('/courses')
      .then(res => {
        dispatch({ type: GET_COURSES, payload: res.body })
      })
      .catch(err => {
        console.error(err)
      })
  }
}
