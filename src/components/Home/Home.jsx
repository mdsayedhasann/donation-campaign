import React, { useEffect, useState } from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import { useLoaderData } from "react-router-dom";
import HomeCard from "../HomeCard/HomeCard";
// import { data } from 'autoprefixer';

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <div className="md:max-w-7xl mx-auto">
        <HomeCard></HomeCard>
      </div>
    </div>
  );
};

export default Home;
