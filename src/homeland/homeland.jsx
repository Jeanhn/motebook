import constant from "../constant/constant"
import MineHeadTab from "../mine/mineheadtab"
import { useNavigate } from "react-router"

function Homeland() {
    const navigate = useNavigate()
    return (<div className="Homeland">
        <MineHeadTab></MineHeadTab>

        <div className="HomelandTitle">MoteBook</div>

        <button className="StartBtn"
            onClick={() => {
                navigate(constant.PathSet.WORKSPACE)
            }}>
            Start
        </button>
    </div>)
}

export default Homeland