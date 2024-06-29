import axios from "../helpers/axios";
import { productConstants } from "./constant.Action";

export const getProductBySlug = (slug) => {
   return async (dispatch) => {
      const res = await axios.get(`product/${slug}`);
      if (res.status === 200) {
         dispatch({
            type: productConstants.GET_PRODUCT_BY_SLUG,
            payload: res.data,
         });
      } else {
         //   dispatch({type:})
      }
   };
};
