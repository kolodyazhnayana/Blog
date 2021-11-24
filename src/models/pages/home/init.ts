import { forward } from "effector"
import { fetchHomePage } from "./index"
import { fetchPosts } from "../../posts"
import { fetchUsers } from "../../users"

forward({
    from: fetchHomePage,
    to: [fetchPosts, fetchUsers]
})
