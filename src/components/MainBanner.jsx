import React from "react";
import Skeleton from "react-loading-skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import mainBannerQuery from "../client/mainBanner.query";
import useGQLQuery from "../talons/useGQLQuery";

const MainBanner = () => {
  const { data, loading } = useGQLQuery({ query: mainBannerQuery });

  if (loading) {
    return (
      <div>
        <Skeleton count={1} height={"500px"} />
      </div>
    );
  }
  
  return (
    <div>
      <div className=" max-w-[1400px] mx-auto">
        <Swiper pagination={true} modules={[Pagination]} loop={true}>
          {data.cms.mainBannerCollection.items.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.image.url}
                alt={item.alt}
                width={"100%"}
                height={"auto"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainBanner;
