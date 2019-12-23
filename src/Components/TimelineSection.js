import React from "react";
import Grid from '@material-ui/core/Grid';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CloseIcon from '@material-ui/icons/Close';
import Form from "../assets/images/form.png"


export default function TimelineSection() {
  
  return (
    <div style={{marginTop:"54px"}} >
      <h2 style={{textAlign:"center",color:"#414141"}}> <span style={{fontSize:"28px"}}>HOW TO AVAIL OFFER -</span></h2>
      <div>
        <Grid container >
          <Grid item xs={12} sm={12} md={12}>
            
              <div style={{backgroundColor:"#3333331c", width:'100%'}}>
              {/* <div style={{marginTop:'90px', marginBottom:'50px', textAlign:'center'}}>
                  <h1>Achievements</h1>
              </div> */}
            <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="STEP 1"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<CloseIcon />}
            >
              {/* <h3 className="vertical-timeline-element-title">

            

              </h3> */}
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              OPEN <a href="https://bitdroplet.com/" target="_blank">BITDROPLET.COM</a>        
    
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="STEP 2"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<CloseIcon />}
            >
              {/* <h3 className="vertical-timeline-element-title">
             
              </h3> */}
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              CLICK ON SIGNUP AND FILL DETAILS
              ENTER NORTON IN REFERRAL CODE SECTION(YOU WILL BE ELIGIBLE ONLY IF CODE IS MENTIONED)
              <br/>
              {(window.innerWidth > 600)?<img src={Form}  />
              :
              <img src={Form} width={180} height={500} />
              
              
              } 
              
              </p>
              
               
             
            
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="STEP 3"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<CloseIcon />}
            >
              {/* <h3 className="vertical-timeline-element-title"> </h3> */}
              {/* <h4 className="vertical-timeline-element-subtitle"> </h4> */}
              <p>
              ONCE YOU CLICK ON     <span style={{color:"#25b196"}}> CREATE ACCOUNT</span>  , YOU WILL LAND ON THE OFFER PAGE. PLEASE GO THROUGH THE DETAILS 

              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="STEP 4"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<CloseIcon />}
            >
              {/* <h3 className="vertical-timeline-element-title">ACM ICPC </h3> */}
              {/* <h4 className="vertical-timeline-element-subtitle"> </h4> */}
              <p>
              CLICK ON <span style={{color:"#25b196"}}>SUBSCRIBE</span>  TO NORTON ANTI VIRUS BUTTON 
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="STEP 5"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<CloseIcon />}
            >
              {/* <h3 className="vertical-timeline-element-title">ACM ICPC</h3>
              <h4 className="vertical-timeline-element-subtitle"> </h4> */}
              <p>
              COMPLETE THE TRANSACTION AND CLICK HERE TO SUBMIT DETAILS
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="STEP 6"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<CloseIcon />}
            >
              {/* <h3 className="vertical-timeline-element-title">ACM ICPC</h3>
              <h4 className="vertical-timeline-element-subtitle">Kolkata</h4> */}
              <p>
              POST VALIDATION YOU WILL RECEIVE <span style={{color:"#fbdd06"}}>INR 1200</span> WORTH AMAZON VOUCHERS MAILED IN TO YOUR REGISTERED EMAIL ID 
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<CloseIcon />}
            />
          </VerticalTimeline>     
          </div> 
        
            
            
            
            
            
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
