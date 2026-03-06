function ResumeSection(){

return(

<section className="py-5 bg-light">

<div className="container text-center">

<h2 className="fw-bold mb-4">

Resume

</h2>

<a
href="http://localhost:5000/uploads/resume.pdf"
target="_blank"
className="btn btn-primary me-3"
>

View Resume

</a>

<a
href="http://localhost:5000/uploads/resume.pdf"
download
className="btn btn-dark"
>

Download Resume

</a>

</div>

</section>

)

}

export default ResumeSection