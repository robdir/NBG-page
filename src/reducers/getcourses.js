import { GET_COURSES } from '../actions/springest_courses/get_courses'

export default function (currentState = [], { type, payload } = {}) {
	console.log("COURSES", payload)
	switch (type) {

	   case GET_COURSES:
        return [...payload]

    default :
      return currentState
	}
}
