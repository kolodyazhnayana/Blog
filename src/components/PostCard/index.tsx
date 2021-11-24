import styles from './postCard.module.css'

interface IProps {
    title: string,
    body: string,
    user: string
}

const PostCard = ({ title, body, user}: IProps) => {
    return (
        <div className={styles.card__container}>
            <h1>{title}</h1>
            <p>{body}</p>
            <p>{user}</p>
        </div>
    )
}

export default PostCard
