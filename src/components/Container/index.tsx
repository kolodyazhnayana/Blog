import styles from './container.module.css'

interface IProps {
    children: React.ReactNode
}

const Container = ({ children }: IProps) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}

export default Container
