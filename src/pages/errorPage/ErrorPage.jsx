import React, {useState,useEffect} from "react";
import styles from "./ErrorPage.module.css"

function ErrorPage({person}) {
    const [personInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (person) {
            setUserInfo(person);
        }
    }, [person]);

    if (!personInfo) return null;

    return (
        <div>
            <h1 className={styles.text}>Тебе сюда нельзя - {person.name} {personInfo.lastname}</h1>
        </div>
    );
}

export default ErrorPage;
