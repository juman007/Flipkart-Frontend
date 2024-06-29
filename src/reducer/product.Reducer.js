import { productConstants } from "../actions/constant.Action";

const initState = {
   products: [],
   productsByPrice: {
      under5k: [],
      under10k: [],
      under15k: [],
      under20k: [],
      under30k: [],
   },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
   // eslint-disable-next-line default-case
   switch (action.type) {
      case productConstants.GET_PRODUCT_BY_SLUG:
         state = {
            ...state,
            products: action.payload.products,
            productsByPrice: {
               ...action.payload.productsByPrice,
            },
         };
         break;
   }
   return state;
};
