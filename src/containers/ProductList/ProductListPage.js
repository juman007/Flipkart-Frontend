import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useDispatch } from "react-redux";
import { getProductBySlug } from "../../actions/action";
import { useParams } from "react-router-dom";

const ProductListPage = () => {
   const { slug } = useParams();
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getProductBySlug(slug));
   }, []);

   return <Layout>ProductList</Layout>;
};

export default ProductListPage;
