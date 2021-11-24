import styles from './layout.module.css'

interface IProps {
    children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
    return (
        <div className={styles.layout}>{children}</div>
    )
}

export default Layout
