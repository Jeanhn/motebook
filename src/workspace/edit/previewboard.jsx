import PersonalTemplate from "./template/personaltemplate"
import "../../css/workspace/edit/previewboard.css"

function PreviewBoard({
    personalInfo,
    skillInfo,
    educationInfo,
    careerInfo,
    internInfo,
}) {
    return (<div className="PreviewBoard">
        <div className="PersonalPreviewZone">
            <PersonalTemplate personalInfo={personalInfo}></PersonalTemplate>
        </div>
        <div className="SkillPreviewZone">
        </div>
        <div className="EducationPreviewZone">
        </div>
        <div className="CareerPreviewZone">
        </div>
        <div className="InternPreviewZone">
        </div>
    </div>)
}

export default PreviewBoard