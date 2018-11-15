export const textChangeHandler = (text) => {
    // console.log("hello");
    return {
        type: 'ON_TEXT_CHANGE',
        text: text
    }
}