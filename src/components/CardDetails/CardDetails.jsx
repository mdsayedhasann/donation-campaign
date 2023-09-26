/* eslint-disable no-undef */
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveDonations } from "../../utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CardDetails = () => {
  const details = useLoaderData();
  const [donationAdded, setDonationAdded] = useState()
  const { id } = useParams();
  const idInt = parseInt(id);

  const detail = details.find((detail) => detail.id === idInt);
  console.log(detail.id, idInt);

  const backgroundStyle = {
    background: `url(${detail.picture})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const handleDonation = () => {
   saveDonations(idInt);
   setDonationAdded(true)
   toast.success('Donation Added Successfully', {
    position: "bottom-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })}
  return (
    <div className="md:max-w-7xl mx-auto">
      <div className="py-80 relative" style={backgroundStyle}>
        <div className="absolute left-0 bottom-0 py-14 bg-black w-full bg-opacity-50">
          <button onClick={handleDonation}
            className="text-opacity-100 text-white py-2 px-3 rounded-md mx-8"
            style={{ background: detail.text_button_bg }}
          >
            Donate ${detail.price}
          </button>
          {
            donationAdded  && <ToastContainer />
          }
          
          
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
