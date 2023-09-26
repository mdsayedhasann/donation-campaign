/* eslint-disable no-undef */
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const details = useLoaderData();
  const { id, picture, title, description, text_button_bg } = useParams();
  const idInt = parseInt(id);

  const detail = details.find((detail) => detail.id === idInt);
  console.log(id, idInt);

  const backgroundStyle = {
    background: `url(${detail.picture})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="md:max-w-7xl mx-auto">
      <div className="py-80 relative" style={backgroundStyle}>
        <div className="absolute left-0 bottom-0 py-14 bg-black w-full bg-opacity-50">
          <button
            className="text-opacity-100 text-white py-2 px-3 rounded-md mx-8"
            style={{ background: detail.text_button_bg }}
          >
            Donate ${detail.price}
          </button>
        </div>
      </div>

      <div className="py-10">
          <h2 className="text-[40px] font-bold text-black">{detail.title}</h2>
          <p className="pt-5 text-justify">{detail.description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
