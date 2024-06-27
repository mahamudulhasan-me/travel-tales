import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface ITodo {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
}

export interface IInitialState {
  todos: ITodo[];
}
const initialState: IInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTask, removeTask, toggleTask } = todoSlice.actions;
// export const todos = (state: IInitialState) => state.todos;
export default todoSlice.reducer;
