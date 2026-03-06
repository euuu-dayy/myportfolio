import { motion } from "framer-motion"
function Home(){

return(

<section id="home">

<div className="container">

<div className="row align-items-center text-center text-lg-start g-4">
{/* LEFT SIDE */}

<div className="col-lg-6 mb-5 mb-lg-0">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}

className="display-4 fw-bold"
>

Hi, I'm <span className="text-primary">Uday</span>

</motion.h1>

<motion.h3
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.3}}

className="text-secondary"
>

Full Stack Developer

</motion.h3>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.6}}

className="lead mt-3"
>

I build scalable and responsive web applications using
React, Node.js and Java Springboot REST APIS.

</motion.p>

<div className="mt-4">

<a
href="https://myportfolio-rrdj.onrender.com/uploads/resume.pdf"
target="_blank"
className="btn btn-dark me-3"
>
View Resume
</a>

<a
href="https://myportfolio-rrdj.onrender.com/download-resume"
className="btn btn-outline-dark"
>
Download Resume
</a>

<br />
<br />
<a
href="#contact"
className="btn btn-outline-dark"
>

Contact Me

</a>

</div>

</div>

{/* RIGHT SIDE */}

<div className="col-lg-6 text-center">

<motion.img
initial={{opacity:0,scale:0.8}}
animate={{opacity:1,scale:1}}
transition={{duration:1}}
src="https://cdn-icons-png.flaticon.com/512/1006/1006363.png"
className="img-fluid mx-auto d-block"
style={{maxWidth:"260px"}}
alt="developer"
/>

</div>

</div>

</div>

</section>

)

}

export default Home