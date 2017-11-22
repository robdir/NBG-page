import { UPDATE_BOOKS } from '../actions/books/update'

export default function (currentState = [], { type, payload } = {}) {
    console.log(payload)
	switch (type) {
	   case UPDATE_BOOKS:
        return [...payload]
        //this specific payload is an array, so you need the array spread

    default :
      return currentState
	}
}
