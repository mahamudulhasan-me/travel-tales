import store from "./app/store.mjs";
import { fetchVideo } from "./features/videoSlice.mjs";
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchVideo());
