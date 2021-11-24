import { fetchPosts, fetchPostsFx } from './index'
import { forward } from 'effector-next'
import { $mainFilter } from "../pages/home"

forward({
    from: fetchPosts,
    to: fetchPostsFx,
})

forward({
    from: $mainFilter,
    to: fetchPostsFx
})
