import { motion } from "framer-motion"

const projects = [

{
title:"Farmfleet , Agricultural Equipment Rental System",
description:"A secure Spring Boot–based agricultural equipment rental management system with JWT authentication, role-based access control, inventory management, and a booking system with concurrency control to prevent double bookings.",
github:"https://github.com/farmfleet-cdac-0825-project/farmfleet-rental-backend/commits/main/farmfleet-equipment-rental-backend",
demo:"https://farmfleet-equipment-rental.netlify.app/"
},

{
title:"E-Health Record System",
description:"Blockchain based healthcare system where doctors create prescriptions using smart contracts and patients control access to records.",
github:"#",
demo:"#"
},


]

function Projects(){

return(

<section id="projects" className="py-5 bg-light">

<div className="container">

<h2 className="text-center mb-5 fw-bold">

Projects

</h2>

<div className="row">

{projects.map((project,index)=>(

<div className="col-xl-4 col-lg-4 col-md-6 mb-4" key={index}>

<motion.div
whileHover={{scale:1.05}}
whileTap={{scale:0.97}}

className="card shadow h-100"
>

<div className="card-body">

<h5 className="card-title fw-bold">

{project.title}

</h5>

<p className="card-text">

{project.description}

</p>

<div className="d-flex justify-content-between mt-3">

<a
href={project.github}
className="btn btn-outline-dark btn-sm"
target="_blank"
>

GitHub

</a>

<a
href={project.demo}
className="btn btn-dark btn-sm"
target="_blank"
>

Live Demo

</a>

</div>

</div>

</motion.div>

</div>

))}

</div>

</div>

</section>

)

}

export default Projects
