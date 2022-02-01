import { ADD_TODO, TOGGLE_TODO } from "../actionsType";

const initialState = {
  todos: [{
    id: 1,
    content: "coding",
    completed: false
  }],
}
const todos = (state = initialState, action) => {
    switch(action.type) {
      case ADD_TODO:
        const { id, content } = action.payload;
        return {
          todos: [
            ...state.todos,
            { content, completed: false, id }
          ]
        }

      default:
      return state.todos;
    }
};

export default todos;