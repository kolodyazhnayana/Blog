import { createEvent, createEffect, restore } from "effector-next"
import { User } from "../../interfaces/user"

export const fetchUsers = createEvent('fetch-users')

export const fetchUsersFx = createEffect(async () => {
    const url = 'http://jsonplaceholder.typicode.com/users'
    const req = await fetch(url)
    return req.json()
})

export const $users = restore<User[]>(fetchUsersFx, [])