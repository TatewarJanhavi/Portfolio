import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1><b style={{color:"black"}}>Check Out Some of My Works.</b></h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="item" >
                 <div className="block">
                 
                         <h5>{item.name}</h5>
                        { item.description.map((value) => {
                              return(
                              <div className="text_color">{value}</div>
                               )
                              })
                          }     
                     </div>
                  :&nbsp;
              </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}