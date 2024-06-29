import { combineReducers } from "redux";
import categoryReducer from "./category.Reducer";
import productReducer from "./product.Reducer";

const rootReucer = combineReducers({
   category: categoryReducer,
   product: productReducer,
});

export default rootReucer;
