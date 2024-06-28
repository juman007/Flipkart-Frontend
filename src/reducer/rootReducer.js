import { combineReducers } from "redux";
import categoryReducer from "./category.Reducer";

const rootReucer = combineReducers({
   category: categoryReducer,
});

export default rootReucer;
