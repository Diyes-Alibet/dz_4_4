import React, {useState, useEffect} from "react";
import styles from "./Title.module.css";

function MainPage({ person }) {
    const [personInfo, setPersonInfo] = useState(null);

    useEffect(() => {
        if (person) {
            setPersonInfo(person);
        }
    }, [person]);

    if (!personInfo) return null;

    return (
        <div>
            <h1 className={styles.text}>Добро пожаловать {personInfo.name} {personInfo.lastname}, мы тебя ждали!</h1>
        </div>
    );
}

export default MainPage;
