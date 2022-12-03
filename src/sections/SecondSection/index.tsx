import { FC, useState } from "react";
import styles from "./styles.module.scss";
import CartoonImage from "../../assets/cartoon.jpg";
import MovieImage from "../../assets/movie.png";
import LifeImage from "../../assets/life.jpg";
import FoodImage from "../../assets/food.jpg";
import classNames from "classnames";


const SecondSection: FC = () => {
    const [activeTab, setActiveTab] = useState<string>("cartoon");

    const tabs = [
        {
            key: 'cartoon',
            title: '动画',
        },
        {
            key: 'movie',
            title: '电影',
        },
        {
            key: 'life',
            title: '生活',
        },
        {
            key: 'food',
            title: '美食'
        }
    ]
    return (
        <div className={styles.secondSection}>
            <h1>SecondSection</h1>
            {/* Tabs */}
            <ul>
                {tabs.map(tab => (
                    <li key={tab.key} onClick={() => setActiveTab(tab.key)}>
                        <span>{tab.title}</span>
                        {activeTab === tab.key && <span className={classNames(styles.line, { [styles.visible]: activeTab })}></span>}
                    </li>
                ))}
            </ul>

            {/* {tabs.map(tab => (
                    <li key={tab.key} onClick={() => setActiveTab(tab.key)}>
                        <span>{tab.title}</span>
                        {activeTab === tab.key && <span className={styles.line} />}
                    </li>
                ))
            } */}

            {/* <ul>
                <li>
                    <span>动画</span>
                    {activeTab === "cartoon" && <span className={styles.line} />}
                </li>
                <li><span>美食</span>
                    {activeTab === "food" && <span className={styles.line} />}
                </li>
                <li><span>电影</span>
                    {activeTab === "movie" && <span className={styles.line} />}
                </li>
                <li><span>生活</span></li>
                {activeTab === "life" && <span className={styles.line} />}
            </ul> */}

            {/* Tabs */}
            <div>
                <section>
                    <h2>动画</h2>
                    <img src={CartoonImage} alt="Cartoon" />
                </section>
                <section>
                    <h2>美食</h2>
                    <img src={FoodImage} alt="Food" />
                </section>
                <section>
                    <h2>电影</h2>
                    <img src={MovieImage} alt="Movie" />
                </section>
                <section>
                    <h2>生活</h2>
                    <img src={LifeImage} alt="Life" />
                </section>
            </div>
        </div >
    )
}

export default SecondSection;