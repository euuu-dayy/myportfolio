import axios from "axios"
import {useState} from "react"

function UploadResume(){

const [file,setFile] = useState()
const [password,setPassword] = useState("")

const upload = async ()=>{

try{

const formData = new FormData()

formData.append("resume",file)

await axios.post(
"https://myportfolio-rrdj.onrender.com/upload",
formData,
{
headers:{
"admin-password":password
}
}
)

alert("Resume uploaded")

}catch(err){

alert("Wrong password")

}

}

return(

<div className="container text-center py-5">

<h3>Upload Resume</h3>

<input
type="password"
placeholder="Enter admin password"
className="form-control mb-3"
onChange={(e)=>setPassword(e.target.value)}
/>

<input
type="file"
className="form-control mb-3"
onChange={(e)=>setFile(e.target.files[0])}
/>

<button
className="btn btn-dark"
onClick={upload}
>

Upload Resume

</button>

</div>

)

}

export default UploadResume




//await axios.post("https://myportfolio-rrdj.onrender.com/upload",formData)
