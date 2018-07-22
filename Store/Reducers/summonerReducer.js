// Store/Reducers/avatarReducer.js

const initialState = {player:[]}

function setSummoner(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'ADD_SUMMONER':
            let newIconUrl = state.player.slice();
            newIconUrl.push(action.payload)
            return {...state, player: newIconUrl};

        default:
            return state
    }
}

export default setSummoner