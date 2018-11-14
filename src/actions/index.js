export const textChangeHandler = (text) => {
    return {
        type: 'userInput',
        payload: text
    }
}