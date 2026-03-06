import { motion } from "framer-motion"

function About(){

return(

<section id="about" className="py-5 bg-light">

<div className="container">

<motion.h2
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:0.6}}
className="text-center mb-4 fw-bold"
>

About Me

</motion.h2>

<div className="row align-items-center">

<div className="col-md-6">

<motion.img
initial={{x:-80,opacity:0}}
whileInView={{x:0,opacity:1}}
transition={{duration:0.8}}

src="/me.jpg"
className="img-fluid rounded"
alt="developer"
/>

</div>

<div className="col-md-6">

<motion.p
initial={{x:80,opacity:0}}
whileInView={{x:0,opacity:1}}
transition={{duration:0.8}}
className="lead"
>

I am a passionate Full Stack Developer specializing in building secure and scalable web applications using React, Node.js, Java, and Spring Boot. I enjoy solving real-world problems through technology and developing responsive, user-friendly systems. I have experience implementing backend architectures, REST APIs, and security mechanisms such as JWT-based authentication and role-based access control. Currently, I focus on building high-quality projects and continuously improving my problem-solving skills.
</motion.p>

</div>

</div>

</div>

</section>

)

}

export default About