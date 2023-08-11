import React from "react";
import Skeleton from "react-loading-skeleton";
import promoQuery from "../client/promo.query";
import useGQLQuery from "../talons/useGQLQuery";

const Promo = () => {
  const { data, loading } = useGQLQuery({ query: promoQuery });
  if (loading) {
    return (
      <div>
        <Skeleton count={1} height={"400px"} />
      </div>
    );
  }
  console.log(data);
  return (
    <div>
      <div className="sm:flex justify-evenly py-5 px-1 max-w-[1400px] mx-auto">
        {data.cms.promoCollection.items.map((item, index) => (
          <img
            key={index}
            className="sm:max-w-[48%] sm:my-0 w-[85%] my-3 mx-auto"
            src={item.image.url}
            alt={item.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Promo;
