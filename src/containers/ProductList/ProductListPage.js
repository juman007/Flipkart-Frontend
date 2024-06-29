import React, { useEffect, useState } from "react";
import "./productListPage.css";
import Layout from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../../actions/action";
import { useParams } from "react-router-dom";
import { generatePublicUrl } from "../../urlConfig";

const ProductListPage = () => {
   const product = useSelector((state) => state.product);
   const [priceRange, setPriceRange] = useState({
      under5k: 5000,
      under10k: 10000,
      under15k: 15000,
      under20k: 20000,
      under30k: 30000,
   });

   const { slug } = useParams();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getProductBySlug(slug));
   }, []);

   return (
      <Layout>
         {Object.keys(product.productsByPrice).map((key, index) => {
            return (
               <div className="card" key={index}>
                  <div className="cardHeader">
                     <div>
                        {slug}&nbsp;Mobile Under &#8377;
                        {priceRange[key].toLocaleString()}
                     </div>
                     <button>view all</button>
                  </div>

                  <div style={{ display: "flex" }}>
                     {product.productsByPrice[key].map(
                        (
                           p,
                           idx // Added parentheses for implicit return
                        ) => (
                           <div className="productContainer" key={idx}>
                              <div className="productImgContainer">
                                 <img
                                    src={generatePublicUrl(
                                       p.productPictures[0].img
                                    )}
                                    alt=""
                                 />
                              </div>

                              <div className="productInfo">
                                 <div className="productName">{p.name}</div>
                                 <div>
                                    <span>4.3</span> &nbsp;
                                    <span>999</span>
                                 </div>
                              </div>

                              <div className="productPrice">
                                 &#8377;{p.price.toLocaleString()}
                              </div>
                           </div>
                        )
                     )}
                  </div>
               </div>
            );
         })}
      </Layout>
   );
};

export default ProductListPage;
