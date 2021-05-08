export const initState = {
    // user: {
    //     displayName: 'Shahriar Adib',
    //     photoURL: ''
    // },
    user: null
}

export const reducer = (state = initState, action) => {
    console.log(action);
    
    switch (action.type) {
        case "SET_USER":
            // localStorage.setItem('user', JSON.stringify(action.user))
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}