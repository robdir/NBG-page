import { UPDATE_BOOKS } from '../actions/books/update'

export default function (currentState = [], { type, payload } = {}) {
	switch (type) {

	   case UPDATE_BOOKS:
        return [...payload]

    default :
      return currentState
	}
}
