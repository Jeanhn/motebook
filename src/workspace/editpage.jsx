import { useState } from "react";
import { useParams } from "react-router";
import PreviewBoard from "./edit/previewboard";
import EditBoard from "./edit/editboard";

function EditPage() {
    const params = useParams();
    const [templateSource, templateSetter] = useState()
    return (
        <div className="EditPage">
            <PreviewBoard templateSetter={templateSetter} />
            <EditBoard />
        </div>
    );
}

export default EditPage;