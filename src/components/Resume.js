import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item ">
                       <div className="twelve columns block">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <label>CGPA : {item.CGPA}</label> 
                        </div>
                        :&nbsp;
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns block">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                               <label><b>Work Description :-</b></label>                     
                          {item.works.map((value) => {
                            return (
                            <>
                            <p className="text_color">
                          {value}
                          </p>
                          </>
                            )})
                }
                
                
                       </div>
                       :&nbsp;
                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      // <li>
                      // <span className={`bar-expand`} style={{ "width" : `${item.percentage }`,"-moz-animation": "css 2s ease",	"-webkit-animation": "css 2s ease"}}>
                      // </span><em>{item.skillname}</em>
                      // </li>
                      <div className="item" >
                 <div className="block">
                 <b style={{color:"black"}}><h4>{item.skillname}</h4></b>
                 </div>
                 </div>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}