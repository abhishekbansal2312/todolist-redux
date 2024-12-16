import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todolist: [
      {
        id: nanoid(),
        title: "Buy milk",
        completed: false,
        color: "red",
      },
      {
        id: nanoid(),
        title: "Buy doodh",
        completed: false,
        color: "blue",
      },
      {
        id: nanoid(),
        title: "Buy mum mum",
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
    clearCompleted: (state, action) => {
      state.todolist = state.todolist.filter((todo) => !todo.completed);
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleCompleted,
  changeColor,
  markAllCompleted,
  clearCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
