import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
    const formatTime = (time) => {
        const milliseconds = `0${(time % 1000)}`.slice(-3);
        const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
        const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
        const hours = `0${Math.floor(time / 3600000)}`.slice(-2);

        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    };

    return (
        <div className={styles.component}>
            {formatTime(time)}
        </div>
    );

};

export default FormattedTime;