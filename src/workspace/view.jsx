import { useNavigate } from "react-router"
import util from "../util/util"
import constant from "../constant/constant"

function View() {
    const navigate = useNavigate()
    return (<div className="View">
        <button className="createNoteBtn"
            onClick={() => {
                navigate(util.getPagePath(0, constant.PageStatus.EDITING))
            }}>
            new
        </button>
    </div>)
}

export default View