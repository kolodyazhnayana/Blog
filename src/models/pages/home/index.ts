import {createEvent, PageContext, restore} from "effector-next"
import { MainFilter } from "../../../interfaces/filter"

export const fetchHomePage = createEvent<PageContext<{}>>('fetch-home-page')

export const addFilter = createEvent<MainFilter[]>('add-filter')

export const $mainFilter = restore<MainFilter[]>(addFilter, [])
