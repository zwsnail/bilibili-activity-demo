import { FC } from "react";
import styles from "./styles.module.scss";
import CommentsImage from "../../assets/comment.jpg";
import Title1Image from "../../assets/title1.jpg";
import Title2Image from "../../assets/title2.jpg";

const ThirdSection: FC = () => {
    return (
        <div className={styles.thirdSection}>
            <h1>ThirdSection</h1>
            <img src={Title1Image} alt="Title1" />

            <img className={styles.comment} src={CommentsImage} alt="Comments" />

            <img src={Title2Image} alt="Title2" />

            <img className={styles.comment} src={CommentsImage} alt="Comments" />

        </div>
    )
}

export default ThirdSection;