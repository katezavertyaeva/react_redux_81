import Lesson17 from "../lessons/Lesson17/Lesson17"
import Lesson18 from "../lessons/Lesson18/Lesson18"
import PageNotFound from "../pages/PageNotFound/PageNotFound"
import type { RouteObj } from "./types"

export const routesData: RouteObj[] = [
  { path: "/", element: <Lesson17 /> },
  { path: "/lesson18", element: <Lesson18 /> },

  { path: "*", element: <PageNotFound /> },
]
