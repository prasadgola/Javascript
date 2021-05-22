// initial npm - npm init --yes
// install redux - npm install redux

// import redux from redux
const redux = require('redux')

// createStore method
const createstore = redux.createStore

// convention to use in community
const BUY_CAKE = 'BUY_CAKE'

// action creater-returns action
function buycake() {
	// return action 
	return {
		type:BUY_CAKE,
		info: 'First redux action'
	}
}

// prevState
const initialstate = { numofcakes:10 }

// reducer func-(prevState, action) => newState
const reducer = (state=initialstate, action) =>{
	switch(action.type) {
		case BUY_CAKE:return {
			...state,
			numofcakes:state.numofcakes - 1
		}

		default: return state
	}
}

// createStore method-(reducer func)
const store = createstore(reducer)

// getState method by redux
console.log('initial state', store.getState())

// return { action }cribe and unsubscribe method-(A function)
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

// dispatch method-(action)
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())

unsubscribe()