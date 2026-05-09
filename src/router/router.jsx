import { createBrowserRouter } from "react-router";
import Homeland from "../homeland/homeland";
import WorkSpace from "../workspace/workspace";
import constant from "../constant/constant";

const moteBookRouter = createBrowserRouter([
    {
        path: constant.PathSet.HOMELAND,
        element: <Homeland></Homeland>
    },
    {
        path: constant.PathSet.WORKSPACE,
        element: <WorkSpace></WorkSpace>
    }
])

export default moteBookRouter