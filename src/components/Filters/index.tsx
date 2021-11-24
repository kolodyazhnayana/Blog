import styles from './filters.module.css'
import { User } from '../../interfaces/user'
import { useRouter } from 'next/router'

const Filters = ({ users }: { users: User[] }) => {
    const router = useRouter()

    const handleClick = (id: number) => {
        router.push(`?userId=${id}`, undefined, { shallow: true })
    }

    const handleClear = () => {
        router.push('/')
    }

    return (
        <div>
            <h1>Фильтры</h1>
            {users.map(item => {
                return <button key={item.id} onClick={() => handleClick(item.id)}>{item.name}</button>
            })}
            <button onClick={() => handleClear()}>Сбросить фильтры</button>
        </div>
    )
}

export default Filters
