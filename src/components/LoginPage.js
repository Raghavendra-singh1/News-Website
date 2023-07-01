// import './LoginPage.css'
import React from 'react';
const LoginPage=()=>{
    return(
        
        <div className="div1" style={{display: "flex", alignItems:"start"}}>
            <div className="div2" style={{width:"50%" , height:"600px" ,backgroundColor:"gray"}}>
              <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ucx98ycptmoqvdfppzea" className="w-full h-full" style={{alignItems:"start", width:"100%" , height:"100%"}}/>
               <div className='div3' style={{position: " absolute", top:"32%", left:"70%", width:"100%"}}>
                {/* <h1 style={{ fontSize:"1.5rem" ,marginTop:"10px", marginLeft:"-80px" , fontWeight:"800" , background:"rgb(249,249,249"}}>Turn Your Dream into Reality</h1> */}
               </div>
            </div>
            <div className='div4' style={{width:"50%" , height:"600px", textAlign:"center",justifyContent:"center",display:"flex",background:"rgb(244,226,226)" }}>
           
              <div className='sub-main' style={{marginTop:"10%", display:"flex",justifyContent:"center",height:"450px",
            width:"65%",backgroundColor:"brown",boxShadow:"11px 12px 11px 12px blueviolet", borderRadius:"60px", backgroundColor:"aliceblue"}}>
             
                <div className='img' style={{justifyContent:"center",display:"flex"}}>
                    <div className='container' style={{backgroundColor:"beige", borderRadius:"80px", alignItems:"center",
                display:"flex",height:"80px",width:"80px",marginTop:"30px"}}>
                          <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt='image' className='profile' style={{height:"80px",width:"80px",borderRadius:"120px"}}/>
                    </div>
                   


                    <div>
                        <div className='div5' style={{marginTop:"50px"}}>
                            <h1 style={{marginBottom:"40px"}}>login page</h1>
                            <div>
                            <i class="fa-solid fa-envelope" style={{justifyContent:"space-between", marginLeft:"-0100px"}}></i>
                            
                            <input type="email" placeholder='Email' className='email' style={{border:"none", textUnderlineOffset:"none"
                        ,paddingLeft:"10px",marginRight:"10px",marginTop:"10px", width:"200px",height:"35px",borderRadius:"60px",boxShadow:"insert 6px 0 25px 0 gainsboro"}}/>
                            </div>
                            <div >
                            
                            <i class="fa-regular fa-key" style={{justifyContent:"space-between", marginLeft:"-0100px"}}></i>
                            <input type="password" placeholder='password' className='password' style={{border:"none", textUnderlineOffset:"none"
                        ,paddingLeft:"10px",marginRight:"10px",marginTop:"10px" ,marginBottom:"10px", width:"200px",height:"35px",borderRadius:"60px",boxShadow:"insert 6px 0 25px 0 gainsboro"}}/>
                            </div>

                            <div className='button' style={{marginTop:"15px",marginRight:"70px"}}>
                            <button style={{width:"100px",height:"35px",borderRadius:"60px",backgroundColor:"cadetblue"
                        ,color:"aliceblue",fontSize:"20px",border:"none"}}>Login</button>
                           
                            </div>
                           
                            <div className='signup' style={{paddingTop:"30px",textAlign:"center",alignItems:"center"}}>
                                <p className='sup' style={{marginTop:"20px",marginLeft:"-60px"}}>dont have any account?<a href="/signup"> <span className='sign'>signup </span></a>  for free</p>
                            </div>
                            

                            
                        </div>
                    </div>
                </div>
              </div>

            </div>
        </div>
       
    )
}

export default LoginPage;