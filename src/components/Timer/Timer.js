import {useEffect, useRef, useState} from "react";
import Button from "../Button/Button";
import styles from './Timer.module.scss'
import FormattedTime from "../FormattedTime/FormattedTime";

const Timer = () => {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime((prevValue) => prevValue + 10);
            }, 10);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    }, [isRunning]);


    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setTime(0);
        setIsRunning(false);
    };

    return <div className={styles.timer}>
        <FormattedTime time={time}/>
        <dib className={"button_wrapper"}>
            <Button onClick={handleStart} disabled={isRunning}>Start</Button>
            <Button onClick={handleStop} disabled={!isRunning}> Stop</Button>
            <Button onClick={handleReset}>Reset</Button>
        </dib>
    </div>;
}

export default Timer;