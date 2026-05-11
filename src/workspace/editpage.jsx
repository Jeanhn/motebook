import { useState } from "react";
import { useParams } from "react-router";
import PreviewBoard from "./edit/previewboard";
import EditBoard from "./edit/editboard";
import "../css/workspace/editpage.css"


function EditPage() {

    const [personalInfo, personalInfoSetter] = useState({})
    const [skillInfo, skillInfoSetter] = useState([])
    const [educationInfo, educationInfoSetter] = useState([])
    const [careerInfo, careerInfoSetter] = useState([])
    const [internInfo, internInfoSetter] = useState([])

    return (
        <div className="EditPage">
            <EditBoard personalInfo={personalInfo} personalInfoSetter={personalInfoSetter}
                skillInfo={skillInfo} skillInfoSetter={skillInfoSetter}
                educationInfo={educationInfo} educationInfoSetter={educationInfoSetter}
                careerInfo={careerInfo} careerInfoSetter={careerInfoSetter}
                internInfo={internInfo} internInfoSetter={internInfoSetter} />

            <PreviewBoard personalInfo={personalInfo}
                skillInfo={skillInfo}
                educationInfo={educationInfo}
                careerInfo={careerInfo}
                internInfo={internInfo} />
        </div>
    );
}

export default EditPage;