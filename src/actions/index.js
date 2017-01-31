// Action
// Need to make sure that the action that gets returned from it ends up running through all the reducers.
// The action needs to be wired up to redux. 
// The 'connect' in book-list.js turned booklist from a component into a container. 
// So need to further connect this component by binding the select book action to the booklist component. 
export function selectBook(book) {
    console.log("A book have been selected: " + book.title);
}