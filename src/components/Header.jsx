import React from "react";
import Skeleton from "react-loading-skeleton";
import headerQuery from "../client/header.query";
import useGQLQuery from "../talons/useGQLQuery";
import PrimaryCategory from "./PrimaryCategory";

const Header = () => {
  const { data, loading } = useGQLQuery({ query: headerQuery });
  if (loading) {
    return (
      <div>
        <Skeleton count={1} height={"100px"} />
      </div>
    );
  }
  return (
    <div className="max-w-[1400px] mx-auto ">
      <div className="flex justify-between items-center text-xl font-bold uppercase p-2">
        <div>Ecommerce</div>
        <div className="text-base font-normal flex gap-3">
          <input
            type="text"
            className="border-2 shadow-md rounded-lg px-1"
            placeholder="search products"
          />
          <button className="border-2 p-1.5 rounded-lg  bg-black text-white">
            search
          </button>
        </div>
      </div>
      <div>
        <div className="min-h-[25px] sm:block hidden">
          <ul className="flex justify-center gap-5 bg-black capitalize ">
            {data.cms.navbarCollection.items.map((item, index) => {
              return <PrimaryCategory primaryCategory={item} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
