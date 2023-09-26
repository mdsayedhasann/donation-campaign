import React from "react";
import { Link } from "react-router-dom";

const DonatedCard = ({ data }) => {
  const {
    id,
    picture,
    category,
    title,
    price,
    category_bg,
    card_bg,
    text_button_bg,
  } = data;
  return (
    <div>
      <div>
        <div className="flex p-0" style={{ background: card_bg }}>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="">
              <img src={picture} className="w-[200px] h-[200px]" />
            </div>
            <div>
              <h3
                className="w-fit px-2 py-1 rounded-md font-bold"
                style={{ background: category_bg, color: text_button_bg }}
              >
                {category}
              </h3>
              <div className="py-2">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 style={{ color: text_button_bg }}>{price}</h3>
              </div>

              <Link to={`/cardDetails/${id}`}>
                <button
                  style={{ background: text_button_bg }}
                  className="rounded text-white px-4 py-2"
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatedCard;
