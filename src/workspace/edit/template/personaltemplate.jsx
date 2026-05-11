function PersonalTemplate({ personalInfo }) {
    return (<div className="PersonalTemplate">
        <span className="PersonalName">姓名</span>
        <span className="PersonalNameValue">{personalInfo.PersonalName}</span>

        <span className="PersonalBirth">出生时间</span>
        <span className="PersonalBirthValue">{personalInfo.PersonalBirth}</span>

        <span className="PersonalPhone">电话</span>
        <span className="PersonalPhoneValue">{personalInfo.PersonalPhone}</span>

        <span className="PersonalEmail">邮箱</span>
        <span className="PersonalEmailValue">{personalInfo.PersonalEmail}</span>

        <span className="PersonalCity">现居城市</span>
        <span className="PersonalCityValue">{personalInfo.PersonalCity}</span>

    </div>)
}

function Skill() {
    return (<div className="SkillTemplate">
        Skill
    </div>)
}

function Education() {
    return (<div className="EducationTemplate">
        education
    </div>)
}

function Career() {
    return (<div className="CareerTemplate">
        Career
    </div>)
}

function Intern() {
    return (<div className="InternTemplate">
        inteern
    </div>)
}

export default PersonalTemplate