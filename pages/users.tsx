import { withStart } from 'effector-next'
import { useStore } from 'effector-react'
import type { NextPage } from 'next'
import { fetchUsersPage } from '../src/models/pages/users'
import { $users } from '../src/models/users'

const enhance = withStart(fetchUsersPage)

const Users: NextPage = () => {
    const users = useStore($users)

    return (
        <div>
            {users.map(item => <div key={item.id}>{item.name}</div>)}
        </div>
    )
}

export default enhance(Users)