import { createEvent, createEffect, restore } from "effector-next"
import { Post } from "../../interfaces/post"
import { MainFilter } from "../../interfaces/filter"

export const fetchPosts = createEvent('fetch-posts')

const addParamsToUrl = (url: string, params: MainFilter[]) => {
    url += "?"
    let paramsString = ""
    params.forEach(
        (item, index) =>
            (paramsString += `${index > 0 ? "&" : ""}${item.filterName}=${
                item.value
            }`)
    )
    return url + paramsString
}

export const fetchPostsFx = createEffect(async (filter?: MainFilter[]) => {
    const url = "http://jsonplaceholder.typicode.com/posts"
    if (filter && filter.length > 0) {
        const req = await fetch(addParamsToUrl(url, filter))
        return req.json()
    } else {
        const req = await fetch(url)
        return req.json()
    }
})

export const $posts = restore<Post[]>(fetchPostsFx, [])


