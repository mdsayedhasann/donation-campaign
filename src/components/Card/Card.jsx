/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Card = ({item}) => {
    const {id, picture , title, category, category_bg, card_bg, text_button_bg} = item;

  return (
    <div>
        <Link to={`/cardDetails/${id}`}>
      <div className="card">
        <figure>
          <img
            src={picture}
            alt={title}
          />
        </figure>
        <div className={`card-body rounded-b-xl`} style={{background:card_bg}}>
          <h2 className="">
            <span className={`px-2 py-1 rounded-md font-bold`} style={{background: category_bg, color:text_button_bg }} > 
            {category}
            </span>
          </h2>
          <h3 className={`font-bold text-xl`} style={{color:text_button_bg}}>{title}</h3>
         
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
