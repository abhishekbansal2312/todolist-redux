import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todolist: [
      {
        id: nanoid(),
        title: "Do Breakfast",
        completed: false,
        color: "red",
      },
      {
        id: nanoid(),
        title: "Had Lunch",
        completed: false,
        color: "blue",
      },
      {
        id: nanoid(),
        title: "Complete Homework",
        completed: false,
        color: "green",
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todolist.push({
        id: nanoid(),
        completed: false,
        color: "red",
        ...action.payload,
      });
    },
    removeTodo: (state, action) => {
      state.todolist = state.todolist.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    updateTodos: (state, action) => {
      const { id, title } = action.payload;
      const todo = state.todolist.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
      }
    },
    toggleCompleted: (state, action) => {
      const todo = state.todolist.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    changeColor: (state, action) => {
      const todo = state.todolist.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.color = action.payload.color;
      }
    },
    markAllCompleted: (state, action) => {
      state.todolist.forEach((todo) => (todo.completed = action.payload));
    },
    clearCompleted: (state) => {
      state.todolist = state.todolist.filter((todo) => !todo.completed);
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodos,
  toggleCompleted,
  changeColor,
  markAllCompleted,
  clearCompleted,
} = todoSlice.actions;

export const selectIncompleteTasks = (state) =>
  state.todos.todolist.filter((todo) => !todo.completed).length;

export default todoSlice.reducer;
