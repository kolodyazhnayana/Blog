import styles from './container.module.css'

interface IProps {
    children: React.ReactNode
}

const Container: React.FC<IProps> = ({ children }) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}

export default Container