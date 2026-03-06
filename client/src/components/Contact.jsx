import { motion } from "framer-motion"
import axios from "axios"
import { useState } from "react"

function Contact(){

const [form,setForm] = useState({
name:"",
email:"",
message:""
})

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const sendMail = async (e)=>{
e.preventDefault()

try{

await axios.post("https://myportfolio-rrdj.onrender.com/send-email",form)

alert("Message sent successfully")

setForm({
name:"",
email:"",
message:""
})

}
catch(err){

alert("Error sending message")

}

}

return(

<section id="contact" className="py-5 bg-light">

<div className="container">

<h2 className="text-center mb-5 fw-bold">

Contact Me

</h2>

<div className="row justify-content-center">

<div className="col-md-6">

<motion.form
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:0.8}}

onSubmit={sendMail}
>

<div className="mb-3">

<input
type="text"
name="name"
className="form-control"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
required
/>

</div>

<div className="mb-3">

<input
type="email"
name="email"
className="form-control"
placeholder="Your Email"
value={form.email}
onChange={handleChange}
required
/>

</div>

<div className="mb-3">

<textarea
rows="4"
name="message"
className="form-control"
placeholder="Message"
value={form.message}
onChange={handleChange}
required
/>

</div>

<button className="btn btn-dark w-100">

Send Message

</button>

</motion.form>

</div>

</div>

</div>

</section>

)

}

export default Contact