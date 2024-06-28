import React, { useEffect } from "react";
import "./menuHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../actions/category.Action";

const MenuHeader = () => {
   const dispatch = useDispatch();
   const category = useSelector((state) => state.category);

   useEffect(() => {
      dispatch(getAllCategory());
   }, []);

   const renderCategories = (categories) => {
      let categoryList = [];

      for (let cat of categories) {
         categoryList.push(
            <li key={cat._id}>
               {cat.parentId ? (
                  <a href={cat.slug}>{cat.name}</a>
               ) : (
                  <span>{cat.name}</span>
               )}

               <ul>
                  {cat.children && cat.children.length > 0 ? (
                     <ul>{renderCategories(cat.children)}</ul>
                  ) : null}
               </ul>
            </li>
         );
      }

      return categoryList;
   };

   return (
      <div className="menuHeader">
         <ul>
            {category.categories.length > 0
               ? renderCategories(category.categories)
               : null}
         </ul>
      </div>
   );
};

export default MenuHeader;
