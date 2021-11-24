import styles from './filters.module.css'
import { User } from '../../interfaces/user'
import { useRouter } from 'next/router'
import Button from "../Button"
import { useState } from "react"

const Filters = ({ users }: { users: User[] }) => {
    const router = useRouter()
    const [active, setActive] = useState(0)

    const handleClick = (id: number) => {
        setActive(id)
        router.push(`?userId=${id}`, undefined, { shallow: true })
    }

    const handleClear = () => {
        setActive(0)
        router.push('/')
    }

    return (
        <div className={styles.filters__wrap}>
            <h1>Выбрать автора</h1>
            <div className={styles.filters}>
                {users.map(item => {
                    return <Button key={item.id} onClick={() => handleClick(item.id)} value={item.name} type='filter' active={active === item.id} />
                })}
                <div className={styles.filters__btn}>
                    <Button onClick={() => handleClear()} value='Сбросить фильтры' type='main' active={false} />
                </div>
            </div>
        </div>
    )
}

export default Filters
