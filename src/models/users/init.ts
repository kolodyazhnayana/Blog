import { forward } from "effector-next"
import { fetchUsersFx, fetchUsers } from "./index"

forward({
    from: fetchUsers,
    to: fetchUsersFx
})

