import MineHeadTab from "../mine/mineheadtab"
import { useNavigate } from "react-router"

function Homeland() {
    return (<div className="Homeland">
        <MineHeadTab></MineHeadTab>
        <div>MoteBook</div>
        <button>Start</button>
    </div>)
}

export default Homeland