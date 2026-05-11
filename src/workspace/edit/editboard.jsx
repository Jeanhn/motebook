import { useState } from "react";
import template from "./template/personaltemplate.jsx"
import PersonalSource from "./source/personalsource.jsx";

function EditBoard({
    personalInfo, personalInfoSetter,
    skillInfo, skillInfoSetter,
    educationInfo, educationInfoSetter,
    careerInfo, careerInfoSetter,
    internInfo, internInfoSetter,
}) {
    return (
        <div className="EditBoard">
            <div className="PersonalAddEditZone">
                <PersonalSource personalInfo={personalInfo}
                    personalInfoSetter={personalInfoSetter}></PersonalSource>
            </div>
            <div className="SkillAddEditZone">
            </div>
            <div className="EducationAddEditZone">
            </div>
            <div className="CareerAddEditZone">
            </div>
            <div className="InternAddEditZone">
            </div>
        </div>
    );
}

export default EditBoard;