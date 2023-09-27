import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonations } from "../../utility/localStorage";
import DonatedCard from "../DonatedCard/DonatedCard";

const Donations = () => {
  const getAllData = useLoaderData();
  const [donated, setDonated] = useState([]);
  const [total, setTotal] = useState(4);

  useEffect(() => {
    const savedDonations = getDonations();
    if (savedDonations.length > 0) {
      const donatedTo = [];
      for (const id of savedDonations) {
        const donatedItem = getAllData.find((item) => item.id === id);
        if (donatedItem) {
          donatedTo.push(donatedItem);
        }
      }
      setDonated(donatedTo);
    }
  }, [getAllData]);

  return (
    <div className="md:max-w-7xl mx-auto my-10">
      <div className="md:grid grid-cols-2 gap-6">
        {donated.slice(0, total).map((data) => (
          <DonatedCard key={data.id} data={data}></DonatedCard>
        ))}
      </div>
      

      <div className="flex justify-center my-7 ">
        <div
          className={
            (donated.length < 5 || total === donated.length ? "hidden" : "")
          }
        >
          <button
            onClick={() => setTotal(donated.length)}
            className="text-center bg-[#009444] px-3 py-2 text-white rounded-md"
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donations;
