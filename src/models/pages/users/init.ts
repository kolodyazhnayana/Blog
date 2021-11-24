import { forward } from "effector-next"
import { fetchUsersPage } from "."
import { fetchUsers } from "../../users"

forward({
    from: fetchUsersPage,
    to: fetchUsers
})
