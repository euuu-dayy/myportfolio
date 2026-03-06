import axios from "axios"
import {useState} from "react"

function UploadResume(){

const [file,setFile] = useState()

const upload = async ()=>{

const formData = new FormData()

formData.append("resume",file)

await axios.post("http://localhost:5000/upload",formData)

alert("Resume uploaded")

}

return(

<div className="container text-center py-5">

<h3>Upload Resume</h3>

<input
type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<button
className="btn btn-dark ms-3"
onClick={upload}
>

Upload

</button>

</div>

)

}

export default UploadResume