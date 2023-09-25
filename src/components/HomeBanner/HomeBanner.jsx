import React from "react";

const HomeBanner = () => {
  return (
    <div className="">
      <div className="hero py-32 bg-[url('https://i.ibb.co/Dr0pD1y/image.png')]">
        <div className="hero-content text-center z-10 opacity-100">
          <div className="">
            <h1 className="text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
            {/* Search Form */}
            <div className="join my-10">
              <input
                className="input input-bordered join-item"
                placeholder="Search here...."
              />
              <button className="btn join-item rounded bg-[#FF444A] text-white">
                Search
              </button>
            </div>
            {/* Search Form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
