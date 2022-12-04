import { FC, useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import CartoonImage from "../../assets/cartoon.jpg";
import MovieImage from "../../assets/movie.png";
import LifeImage from "../../assets/life.jpg";
import FoodImage from "../../assets/food.jpg";
import LogoImage from "../../assets/logo.png";
import classNames from "classnames";

const tabs = [
    {
        key: 'cartoon',
        title: '动画',
        image: CartoonImage
    },
    {
        key: 'movie',
        title: '电影',
        image: MovieImage
    },
    {
        key: 'life',
        title: '生活',
        image: LifeImage
    },
    {
        key: 'food',
        title: '美食',
        image: FoodImage
    }
]

const TAB_HEIGHT = 56;

const SecondSection: FC = () => {
    //记录 哪一个 tab 是 active 的状态
    const [activeTab, setActiveTab] = useState<string>("cartoon");
    //拿到 第二个 section 组建
    const secondSectionRef = useRef<HTMLDivElement>(null);
    //记录 是否 吸顶 fixed 的状态
    const [isFixed, setIsFixed] = useState<boolean>(false);
    //点击之后，先高亮，再切换
    const activate = (key: string) => {
        setActiveTab(key);

        const tabContentEl = document.querySelector(`[data-id="${key}"]`);

        if (tabContentEl) {
            tabContentEl.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }
    //实现滚动之后，tab 的 position 变成 fixed 在屏幕顶部
    //需要 1，拿到 secondSection，采用 ref (secondSectionRef) 2, 拿到距离屏幕最上面距离 3，当距离 <0 吸顶
    const onScroll = () => {
        if (secondSectionRef.current) {
            const top = secondSectionRef.current.getBoundingClientRect().top;
            // const {top} = secondSectionRef.current.getBoundingClientRect(); 这样也行，只是取了 top 属性
            setIsFixed(top < 0);
            //下面的简化成上面就行了，距离顶上的距离小于0，就是吸顶了
            // if (top < 0) {
            //     setIsFixed(true);
            // } else {
            //     setIsFixed(false);
            // }

            //滚动到某个 section 时，高亮 tab
            // tabs.forEach(tab => {
            //     const tabContentEl = document.querySelector(`[data-id="${tab.key}"]`);
            //     if (tabContentEl) {
            //         const top = tabContentEl.getBoundingClientRect().top;
            //         if (top <= TAB_HEIGHT) {
            //             setActiveTab(tab.key);
            //         }
            //     }
            // })
            //另一种写法
            const sectionNodes = secondSectionRef.current.querySelectorAll('section');
            //sectionNodes 是 list 要转变成 array
            Array.from(sectionNodes).forEach((sectionEl: Element) => {
                const top = sectionEl.getBoundingClientRect().top;
                const key = sectionEl.getAttribute('data-id') || '';
                if (top <= TAB_HEIGHT) {
                    setActiveTab(key);
                }
            })



        }
    }

    useEffect(() => {
        //不能为 ul 添加滚动事件，因为 ul 是没有滚动条的，所以要给 window 添加滚动事件
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    return (
        <div className={styles.secondSection} ref={secondSectionRef}>
            {/* Tabs */}
            {/* 第一个 isFixed 是样式，第二个是 useState 里面的状态 true or false */}
            <ul className={classNames({ [styles.isFixed]: isFixed })}>
                {tabs.map(tab => (
                    <li key={tab.key} onClick={() => activate(tab.key)}>
                        <span>{tab.title}</span>
                        {activeTab === tab.key && <span className={classNames(styles.line, { [styles.visible]: activeTab })}></span>}
                    </li>
                ))}
            </ul>

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
                {tabs.map(tab => (
                    <section data-id={tab.key}>
                        <h2>{tab.title}</h2>
                        <img src={tab.image} alt={tab.key} />
                    </section>
                ))
                }

                {/* <section>
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
                </section> */}
            </div>

            <div className={classNames(styles.btnWrapper, { [styles.visible]: isFixed })}>
                <img src={LogoImage} alt="logo" />
                <a href="https://www.bilibili.com" target="_blank">
                    <button>App 内打开</button>
                </a>
            </div>



        </div >
    )
}

export default SecondSection;