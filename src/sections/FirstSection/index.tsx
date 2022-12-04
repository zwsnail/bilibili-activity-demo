import { FC } from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// import BannerImage from "../../assets/banner.jpg";
import BannerImage1 from "../../assets/banner1.png";
import BannerImage2 from "../../assets/banner2.png";
import BannerImage3 from "../../assets/banner3.png";
import BannerImage4 from "../../assets/banner4.png";



const FirstSection: FC = () => {
    return (
        <div className={styles.firstSection}>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {/* <SwiperSlide><img src={BannerImage} alt="Banner" /></SwiperSlide> */}
                <SwiperSlide><img src={BannerImage1} alt="Banner1" /></SwiperSlide>
                <SwiperSlide><img src={BannerImage2} alt="Banner2" /></SwiperSlide>
                <SwiperSlide><img src={BannerImage3} alt="Banner3" /></SwiperSlide>
                <SwiperSlide><img src={BannerImage4} alt="Banner4" /></SwiperSlide>

            </Swiper>
        </div>


    )
}

export default FirstSection;