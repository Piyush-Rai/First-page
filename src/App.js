import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from  "./assets/images/logo.svg";
import Bnslogo from  "./assets/images/bnsLogo.svg";
import Container from '@material-ui/core/Container';
import Offer from "./Components/TimelineSection";
import createSpacing from '@material-ui/core/styles/createSpacing';
function App() {
  return (
    <div className="App" style={{backgroundColor:"#f7fafc"}}>
         <div style={{background:"linear-gradient( 0deg,rgb(54,37,78) 0%,rgb(44,37,73) 100% )",width:"100%"}}>
         
         
         {window.innerWidth>600?
         
         
           <Container>
           <Grid container >
             <Grid item xs={12}  style={{padding:20,borderBottom:"1px solid #6c628a80"}}>
                  <img src={Logo}></img>
             </Grid>



           </Grid>


           <Grid container style={{padding:20}}  
 
>
             <Grid item xs >
              <span style={{color:"white",fontSize:12,opacity:0.5,fontStyle:"italic"}}>powered by</span>
              <img src={Bnslogo}  width={40} height={40} style={{verticalAlign: "middle",
               marginBottom: "-0.25em",marginLeft:"5px",opacity:0.5}}></img>
             </Grid>
             <Grid item xs={8}>
               <div style={{float:"right",marginTop:5}}>
                 <span style={{fontSize:13 , color:"white"}} >INR' ₹</span>
               </div>
             </Grid>

             
           </Grid>





</Container>
:
<div>
<Grid container >
<Grid item xs={12}  style={{padding:20,borderBottom:"1px solid #6c628a80"}}>
     <img src={Logo}></img>
</Grid>



</Grid>


<Grid container style={{padding:20}}  

>
<Grid item xs >
 <span style={{color:"white",fontSize:12,opacity:0.5,fontStyle:"italic"}}>powered by</span>
 <img src={Bnslogo}  width={40} height={40} style={{verticalAlign: "middle",
  marginBottom: "-0.25em",marginLeft:"5px",opacity:0.5}}></img>
</Grid>
<Grid item xs={8}>
  <div style={{float:"right",marginTop:5}}>
    <span style={{fontSize:13 , color:"white"}} >INR' ₹</span>
  </div>
</Grid>


</Grid>



</div>



   }





         </div>

<div  style={{background:"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…44MjkgMTcxLjUyKSIgc2VyaWY6aWQ9Ik92YWwtNS1Db3B5LTIiLz48L2c+PC9nPjwvc3ZnPg==) 50% 50% no-repeat,linear-gradient( -180deg,rgb(54,37,78) 0%,rgba(78,69,118,0) 80% ),linear-gradient( -96deg,rgba(237,35,135,1) 0%,rgb(44,37,73) 100% )"
,
paddingTop:"3rem",
paddingBottom:"32rem",
position:"relative"

}}>

<Grid container 
  direction="row"
  justify="center">
  
<Grid item>
  <div style={{maxWidth:480}}>
  <h1 style={{textAlign:"center",color:"white",fontWeight:"semibold",marginTop:"1px"}}>
Little Drops of Bitcoin Make a Mighty Investment
</h1>
  </div>


</Grid>



  
</Grid> 


<Grid container 
  direction="row"
  justify="center">
  
<Grid item>
  <div style={{maxWidth:300}}>
  <p style={{textAlign:"center",color:"white",fontWeight:"semibold",marginTop:"1px",opacity:0.7,lineHeight:1.625}}>
  Bitdroplet's Systematic Purchase Plan allows you to invest as little as ₹73.15
  per day. Preserve your wealth in the long term with Bitdroplet.
</p>
  </div>


</Grid>
</Grid>



<svg id="svg" style={{position:"absolute",bottom:0,width:"100%", height:"auto"}} xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" class="css-1m0jyfd"><path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="#f7fafc" stroke-width="120" stroke-linecap="round"></path>
</svg>

{/* <img src={Bck} /> */}

</div>

<div style={{position:"relative",marginTop:"-30rem",zIndex:10,width:"100%"}}>

<div   style={{position:"relative",backgroundColor:"white",marginLeft:(window.innerWidth>600)?"40px":"10px",marginRight:(window.innerWidth>600)?"40px":"10px",padding:"10px"
,borderRadius:"0.3rem",
boxShadow: "0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)"

}}> 

<h1 style={{textAlign:"center",color:"#414141",fontWeight:"semibold"}}><span style={{fontSize:"33px"}}>
NORTON ANTIVIRUS OFFER
</span>
</h1>
<h3 style={{textAlign:"center",color:"#414141c7"}}>
      
 Signup with Bitdroplet and get 100% cashback on NORTON 360 STANDARD 1 YEAR SUBSCRIPTION WORTH 1199
</h3>



<Offer/>

</div>

</div>

<div style={{margin:"35px",marginTop:"60px"}}>
      <Grid container justify="center" >

      <Grid item xs={12} sm={12} md={4}>
   <div style={{marginTop:"60%"}}>
   <h1 style={{textAlign:"center",color:"#414141",fontWeight:"semibold"}}>
    Form to collect details
</h1> 
   </div>
  
  
   

     </Grid>












        <Grid item xs={12} sm={12} md={8}>
        <div style={{float:(window.innerWidth>600)?"right":null}}>
        {window.innerWidth>600?    
     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdWAhGS0PhEiJMbaLNYnINgtcyCZbpWLjl0DK0cVN29kjvUNA/viewform?embedded=true" width="700" height="806" frameborder="0" marginheight="0" marginwidth="0" >Loading…</iframe>
     :
     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdWAhGS0PhEiJMbaLNYnINgtcyCZbpWLjl0DK0cVN29kjvUNA/viewform?embedded=true" width="280" height="806"  scrolling="no"  frameborder="0" marginheight="0" marginwidth="0" >Loading…</iframe> 
} 
       
</div>
        </Grid>
        </Grid>

{/* 
        
        <Grid container justify="center">
        <Grid item cs={12} sm={12} md={6}> 
        <h2>Terms & Conditions </h2>

       </Grid>
       


      </Grid >

      <div style={{margin:"40px"}}>
       
         
      

       <Grid container>
         <Grid item xs={12} sm={12} md={12} lg={12}>

                  Offer valid once per user
Offer cannot be clubbed with any other offer
Order will be considered for the offer only if referral code NORTON is used during signup and same email id is used to order
Do not use any other link or 3rd party tools during placing order
If order not tracked, vouchers will not be mailed
IP address and Debit/Credit card should be unique and should not have been used before for this offer
Decision of Team Bitdroplet will be final 
   </Grid>
   </Grid>
   </div> */}






    </div> 




   

<div  style={{backgroundImage:"linear-gradient( rgba(7,25,66,1) 0%,rgba(35,85,118,1) 100% )",
marginTop:"2.5rem",
position:"relative",


}}>


{/* <svg xmlns="http://www.w3.org/2000/svg"  style={{position:"relative" , top:"-5px"}}  viewBox="-300 120 950 140" class="css-gztgsv"><path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="#f7fafc" stroke-width="120" stroke-linecap="round"></path></svg> */}





<Grid container 
  direction="row"
  justify="center">
  
<Grid item>
  <div style={{maxWidth:480}}>
  <h1 style={{textAlign:"center",color:"white",fontWeight:"semibold"}}>
     Terms & Conditions
</h1>
  </div>


</Grid>



  
</Grid> 


<Grid container 
  direction="row"
  justify="center">
  
<Grid item>
  <div style={{maxWidth:300}}>
  <p style={{textAlign:"center",color:"white",fontWeight:"semibold",marginTop:"1px",opacity:0.7,lineHeight:1.625}}>
  Offer valid once per user
Offer cannot be clubbed with any other offer
Order will be considered for the offer only if referral code NORTON is used during signup and same email id is used to order
Do not use any other link or 3rd party tools during placing order
If order not tracked, vouchers will not be mailed
IP address and Debit/Credit card should be unique and should not have been used before for this offer
Decision of Team Bitdroplet will be final 
</p>
  </div>


</Grid>
</Grid>

</div>







    </div>
  );
}

export default App;
