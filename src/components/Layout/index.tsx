import styles from './layout.module.css'

interface IProps {
    children: React.ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => {
    return (
        <div className={styles.layout}>{children}</div>
    )
}

export default Layout