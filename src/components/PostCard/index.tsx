import styles from './postCard.module.css'

interface IProps {
    title: string,
    body: string
}

const PostCard: React.FC<IProps> = ({ title, body }) => {
    return (
        <div className={styles.card__container}>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default PostCard