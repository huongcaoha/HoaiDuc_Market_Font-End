import { createBrowserRouter } from "react-router-dom";
import { protectedRouter } from "./protected.routes";
import { publicRouter } from "./public.routes";

const mergeRouter = [...protectedRouter , ...publicRouter];

export const routers = createBrowserRouter(mergeRouter)