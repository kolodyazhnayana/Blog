import type { NextPage } from 'next'
import { withStart } from "effector-next"
import { useStore, useEvent } from "effector-react"
import { $posts } from '../src/models/posts'
import {addFilter, fetchHomePage} from '../src/models/pages/home'
import PostCard from '../src/components/PostCard'
import Layout from '../src/components/Layout'
import Filters from '../src/components/Filters'
import Container from '../src/components/Container/index'
import { $users } from '../src/models/users/index'
import { useRouter } from "next/router"
import { useEffect } from "react"
import { MainFilter } from '../src/interfaces/filter'
import _ from 'lodash'

const enhance = withStart(fetchHomePage)

const Home: NextPage = () => {
    const posts = useStore($posts)
    const users = useStore($users)

    const router = useRouter()

    const handleFilter = useEvent(addFilter)

    useEffect(() => {
        const filters: MainFilter[] = []
        _.forIn(router.query, (value, key) => {
            if (value) {
                filters.push({
                    filterName: key,
                    value: value
                })
            }
        })

        handleFilter(filters)
    }, [router.query])

    return (
        <Layout>
          <Container>
            <Filters users={users} />
            <div>
              {posts.map(item => {
                  const user = users.filter(elem => elem.id === item.userId)
                  return (
                      <PostCard key={item.id} title={item.title} body={item.body} user={user[0].name} />
                  )
                }
              )}
            </div>
          </Container>
        </Layout>
    )
}

export default enhance(Home)
