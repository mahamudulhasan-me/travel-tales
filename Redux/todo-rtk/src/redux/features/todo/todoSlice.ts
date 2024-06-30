import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodo {
  id: string;
  title: string;
  description: string;
  priority: string;
  isCompleted?: boolean;
}

export interface IInitialState {
  todos: ITodo[];
  filteredTodos: ITodo[];
  updatedTask?: ITodo;
}

const initialState: IInitialState = {
  todos: [],
  filteredTodos: [],
  updatedTask: undefined,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITodo>) => {
      const newTodo = { ...action.payload, isCompleted: false };
      state.todos.push(newTodo);
      state.filteredTodos.push(newTodo);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.filteredTodos = state.filteredTodos.filter(
        (todo) => todo.id !== action.payload
      );
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      state.filteredTodos = state.filteredTodos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    },
    filterTask: (state, action: PayloadAction<string>) => {
      if (action.payload === "All") {
        state.filteredTodos = state.todos;
      } else {
        state.filteredTodos = state.todos.filter(
          (todo) => todo.priority === action.payload
        );
      }
    },
    enableTaskUpdate: (state, action: PayloadAction<ITodo>) => {
      state.updatedTask = action.payload;
    },

    updateTaskReducer: (state, action: PayloadAction<Partial<ITodo>>) => {
      const { id, ...updatedProperties } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedProperties } : todo
      );
      state.filteredTodos = state.filteredTodos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedProperties } : todo
      );
      state.updatedTask = undefined; // Reset updatedTask after update
    },
  },
});

export const {
  addTask,
  removeTask,
  toggleTask,
  filterTask,
  enableTaskUpdate,
  updateTaskReducer,
} = todoSlice.actions;
export default todoSlice.reducer;
