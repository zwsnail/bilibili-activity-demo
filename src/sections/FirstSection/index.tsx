import { FC } from "react";
import BannerImage from "../../assets/banner.jpg";
import styles from "./styles.module.scss";

const FirstSection: FC = () => {
    return (
        <div className="styles.firstSection">
            <h1>First Section</h1>
            <img src={BannerImage} alt="Banner" />
        </div>
    )
}

export default FirstSection;