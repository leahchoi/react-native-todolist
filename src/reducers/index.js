const todos = (state = {
    inputText: '',
    todoItems: []
}, action) => {
    switch (action.type) {
        case 'ON_TEXT_CHANGE':
        console.log('inside of reducer on text change', state)
            return {
                ...state, 
                inputText: action.payload,
                todoItems: []
            }
        case 'ADD_TODO':
            return {
                ...state,
                inputText: action.payload
            }
    };
}

export default todos