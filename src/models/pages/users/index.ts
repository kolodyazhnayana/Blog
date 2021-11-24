import { createEvent, PageContext } from "effector-next"

export const fetchUsersPage = createEvent<PageContext<{}>>('fetch-users-page')