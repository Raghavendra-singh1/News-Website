import React from "react";
import './signup.css'
const Signupp=()=>{
    return(
        
            <section className="signupp">
               <div className="containerr">
                <div className="content">
                    <div className="sign-form">
                        <h2 className="form-title">Sign up</h2>
                        <form className="register-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                <i class="fa-solid fa-user"></i>
                                </label>
                                <input type="text" name='name' id="name" placeholder="Your name"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                <i class="fa-regular fa-envelope"></i>
                                </label>
                                <input type="email" name='email' id="email" placeholder="email"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">
                                <i class="fa-regular fa-mobile"></i>
                                </label>
                                <input type="text" name='phone' id="phone" placeholder="phone number"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="profession">
                                <i class="fa-regular fa-briefcase"></i>
                                </label>
                                <input type="text" name='profession' id="profession" placeholder="profession"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                <i class="fa-sharp fa-regular fa-key"></i>
                                </label>
                                <input type="password" name='password' id="password" placeholder="password"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirm your password">
                                <i class="fa-regular fa-key"></i>
                                </label>
                                <input type="password" name='cpassword' id="cpassword" placeholder="confirm your password"/>
                            </div>

                            <div className="form-group form-button">
                                <input type='submit' name="signup" id="signup"  className="form-submit" value="register"/>
                            </div>
                        </form>
                        </div>
                        <div className="signup-img">
                            <figure>
                                <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ucx98ycptmoqvdfppzea" alt="imagr"/>
                            </figure>
                            <a href="/login"><p className="registered">i am alredy registered</p></a> 
                        
                    </div>
                </div>

               </div>

            </section>
        
    )
}



export default Signupp;