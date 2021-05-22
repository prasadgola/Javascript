const redux = require('redux')
const createstore = redux.createStore

// action
const buycake = () => {
	return {
		type:'BUY_CAKE',
		info:'lol'
	}
}

// reducer
const prevState = { numcake:10 }

const reducer = (state = prevState, action) => {
	switch(action.type) {
		case 'BUY_CAKE': return{
			...state,
			numcake:state.numcake-1
			}
		default:return state
	}
}

// store
const store = createstore(reducer)
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

// dispatch
store.dispatch(buycake())

unsubscribe()
