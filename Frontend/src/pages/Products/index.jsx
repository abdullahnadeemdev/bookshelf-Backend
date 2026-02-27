import React from "react";
import Banner from "../../components/products/banner/Banner";
import Main from "../../components/products/main/Main";

const index = () => {
  return (
    <div>
      <Banner />

      <div className="bg-grayBg mb-5">
        <Main />
      </div>
    </div>
  );
};

export default index;
