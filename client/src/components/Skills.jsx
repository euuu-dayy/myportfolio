import { motion } from "framer-motion"

const skills = [
"Java",
"React",
"Node.js",
"MongoDB",
"MySQL",
"Bootstrap",
"Tailwind",
"JavaScript",
"Git",
"REST APIs",
"SpringBoot",
"Docker"
]

function Skills(){

return(

<section id="skills" className="py-5">

<div className="container">

<h2 className="text-center mb-5 fw-bold">

Skills

</h2>

<div className="row">

{skills.map((skill,index)=>(

<div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>

<motion.div
whileHover={{scale:1.1}}
whileTap={{scale:0.95}}

className="card shadow text-center p-4"
>

<h5>{skill}</h5>

</motion.div>

</div>

))}

</div>

</div>

</section>

)

}

export default Skills