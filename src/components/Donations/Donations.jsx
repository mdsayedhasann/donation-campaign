import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonations } from "../../utility/localStorage";
import DonatedCard from "../DonatedCard/DonatedCard";

const Donations = () => {
  const getAllData = useLoaderData();
  const [donated, setDonated] = useState([]);

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
        {donated.map((data) => (
          <DonatedCard key={data.id} data={data}></DonatedCard>
        ))}
      </div>
    </div>
  );
};

export default Donations;
