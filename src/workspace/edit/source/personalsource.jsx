function PersonalSource({ personalInfo, personalInfoSetter }) {

    return (<div className="PersonalSourceTemplate">
        <input className="PersonalNameInput" onChange={(e) => {
            let newPersonalInfo = {
                ...personalInfo
            }
            newPersonalInfo.PersonalName = e.target.value
            personalInfoSetter(newPersonalInfo)
        }}></input>

        <input className="PersonalBirthInput" onChange={(e) => {
            let newPersonalInfo = {
                ...personalInfo
            }
            newPersonalInfo.PersonalBirth = e.target.value
            personalInfoSetter(newPersonalInfo)
        }}></input>

        <input className="PersonalPhoneInput" onChange={(e) => {
            let newPersonalInfo = {
                ...personalInfo
            }
            newPersonalInfo.PersonalPhone = e.target.value
            personalInfoSetter(newPersonalInfo)
        }}></input>

        <input className="PersonalEmailInput" onChange={(e) => {
            let newPersonalInfo = {
                ...personalInfo
            }
            newPersonalInfo.PersonalEmail = e.target.value
            personalInfoSetter(newPersonalInfo)
        }}></input>

        <input className="PersonalCityInput" onChange={(e) => {
            let newPersonalInfo = {
                ...personalInfo
            }
            newPersonalInfo.PersonalCity = e.target.value
            personalInfoSetter(newPersonalInfo)
        }}></input>

        <input className="PersonalExpectInput" onChange={(e) => {
            let newPersonalInfo = {
                ...personalInfo
            }
            newPersonalInfo.PersonalExpect = e.target.value
            personalInfoSetter(newPersonalInfo)
        }}></input>
    </div>)
}

export default PersonalSource