import { createBrowserRouter } from "react-router";
import Homeland from "../homeland/homeland";
import WorkSpace from "../workspace/workspace";
import constant from "../constant/constant";
import EditPage from "../workspace/editpage";

const moteBookRouter = createBrowserRouter([
    {
        path: constant.PathSet.HOMELAND,
        element: <Homeland></Homeland>
    },
    {
        path: constant.PathSet.WORKSPACE,
        element: <WorkSpace></WorkSpace>
    },
    {
        path: constant.PathSet.EDITPAGE,
        element: <EditPage></EditPage>
    }
])

export default moteBookRouter