import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from "../../utils";
import { act } from "react-dom/test-utils";

export const __addToDo = createAsyncThunk(
  "__addToDo",
  async (payload, thunkAPI) => {
    // waitTwoSeconds;
    setTimeout(() => {
      thunkAPI.dispatch(addTodo(payload));
    }, 2000);
  }
);

export const __deleteTodo = createAsyncThunk(
  "__deleteToDo",
  async (payload, thunkAPI) => {}
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //원래 있던거
    // addTodo: (state, action) => {},
    // deleteTodo: (state, action) => {},

    addTodo: (state, action) => {
      const tempTodo = {
        id: Date.now,
        title: action.payload.title,
        body: action.payload.body,
      };
      return [...state, tempTodo];
      // return tempTodo;
    },
    // deleteTodo: (state, action) => {},
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
