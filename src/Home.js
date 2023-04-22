import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from "react-router-dom";
class Home extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (
            <body>
                <div class="heading">
                    <div class="jumbotron text-center" id="heading">
                        <h1 class="myname">k.Harikarthi</h1>
                        <h6 class="myoccupation">Full Stack Developer</h6>
                        <ul class="nav nav-pills nav-justified" id="navigation">
                            <li class="nav-item">
                                <a class="nav-link active" href="/">
                                    Welcome To Portfolio
                                </a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link active" href="/project">
                                    project
                                </a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link active" href="/ exeprience">
                                    Exeprience
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/contact">
                                    contact
                                </a>
                            </li> */}
                        </ul>
                    </div>

                    <div class="cointainer">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="rounded-circle">
                                    <img
                                        src="https://10619-2.s.cdn12.com/reviews/original/723883.jpg"
                                        class="rounded-circle mx-auto d-block"
                                        alt="my photo"
                                        width="130px"
                                        heigth="150px"
                                    />

                                </div>
                                <br />


                            </div>
                            <div class="col-sm-8">
                                <h2 class="myskills">career objective</h2>
                                <br />
                                <p class="skills">
                                    Hi, I'm a Well-qualified Full Stack Developer familiar with a wide
                                    range of programming utilities and languages. Knowledgeable of backend
                                    and frontend development requirements with database management. Handles
                                    any part of the process with ease. Collaborative team player with a
                                    willingness to learn in and grow with the organization.

                                </p>
                                <img src="https://camo.githubusercontent.com/c5ce34e44b28514be89491d36fa14cf3c54626a331838a33b3b2fd89857b9a99/68747470733a2f2f696d67732e7365617263682e62726176652e636f6d2f77364166673566435838685f776b5731464432584c4d4f754b554f58565439744e32684a576d686c3652632f72733a6669743a3830303a3630303a312f673a63652f6148523063484d364c79396a5a4734752f5a484a70596d4a6962475575593239742f4c33567a5a584a7a4c7a45784e6a49772f4e7a637663324e795a575675633268762f64484d764d7a67304f446b784e4339772f636d396e636d4674625756794c6d64702f5a672e676966"></img>
                            </div>
                            
                            </div>
                            <br />
                            <div class="cointainer">
                                <div class="row">
                                    <div class="col-sm-6">

                                        <h2 class="myskills">Technical skills</h2>
                                        <br />
                                        <ul class="skills">
                                            <li>
                                                Frontend languages - HTML , CSS , JavaScript , React JavaScript,Bootstrap

                                            </li>
                                            <li>
                                                backend languages - nodeJs, API , Express ,es6
                                            </li>
                                            <li>
                                                Database - MySQL , mongoose , MongoDB

                                            </li>
                                            <li>
                                                git , netlify , heroku  
                                            </li>
                                            <img src="https://camo.githubusercontent.com/4fa9a5bdefafee7e59ad2086429306dfc0c902d0db4d2d1fdfb534b1767d9f62/68747470733a2f2f646576656c6f706572732e67697068792e636f6d2f6272616e63682f6d61737465722f7374617469632f6170692d35313264333663303936363236383237313731303861333862626235633537642e676966"></img>
                                            <div className="right-side">
        <div className="about-images">
          <img src="https://github.com/SanJay1577/portfolio/blob/master/src/Images/HtmlAbout.png?raw=true" alt="html" />
           <img src="https://github.com/SanJay1577/portfolio/blob/master/src/Images/CSSAbout.png?raw=true" alt="css" />
          <img src="https://github.com/SanJay1577/portfolio/blob/master/src/Images/JavaScriptSkills.png?raw=true" alt="javascript" />
          <img src="https://github.com/SanJay1577/portfolio/blob/master/src/Images/ReactAbout.png?raw=true" alt="react" />
          <img src="https://github.com/SanJay1577/portfolio/blob/master/src/Images/MongoAbout.png?raw=true" alt="mongodb" />
          <img src="https://github.com/SanJay1577/portfolio/blob/master/src/Images/NoddAbout.png?raw=true" alt="nodejs" />
          <img src="https://github.com/SanJay1577/portfolio/blob/master/src/Images/BootStrapSkills.png?raw=true" alt="bootstrap"/>
          <img src="https://github.com/SanJay1577/portfolio/blob/master/src/Images/GithubSkills.png?raw=true" alt="github"/>
        </div>
        </div>
                                        </ul>
                                    </div>
                                    <div class="col-sm-6">
                                        <h2 class="myskills">Internship and certification</h2>
                                        <br />
                                        <ul class="skills">

                                            <li>
                                                I Have done Full Stack Developer in guvi Institution
                                            </li>
                                            <li>
                                                I done More over 25+ Projects in guvi Zen class
                                            </li>
                                            <li>
                                                I have make creative  Graphics Designs for freelancing for startup companys 
                                            </li>
                                            
                                        </ul>
                                    </div>
                                    <br />
                                    <div class="col-sm-12">
                                        <h2 class="myskills">projects</h2>
                                        <br />
                                        <table class="table table-dark table-stripped">
                                            <thead>
                                                <tr>
                                                    <th>project Domain</th>
                                                    <th>programming Languages</th>
                                                    <th>project Links</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                           
                                                <tr>
                                                    <td>Full Stack Web Developer</td>
                                                    <td>Html , Css , JavaScript , Bootstrap , crud, React, Router</td>
                                                    <td>
                                                        <a href={"https://github.com/Harrysmart15/new-app.git"}>crud opration</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Full Stack Web Developer</td>
                                                    <td>Html , Css , JavaScript , Bootstrap ,  React, Router</td>
                                                    <td>
                                                        <a href={"https://github.com/Harrysmart15/pratice-app.git"}>MakeUP Artistry online Booking</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Full Stack Web Developer</td>
                                                    <td>Html , Css , JavaScript , Bootstrap ,  React,</td>
                                                    <td>
                                                        <a href={"https://github.com/Harrysmart15/Pricing-card-data.git"}>Data Recharge plan</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Full Stack Web Developer</td>
                                                    <td> Bootstrap , crud, React, Router, Formik</td>
                                                    <td>
                                                        <a href={"https://github.com/Harrysmart15/library-app.git"}>Formik</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Full Stack Web Developer</td>
                                                    <td> Bootstrap , HTML,CSS,JavaScript</td>
                                                    <td>
                                                        <a href={"https://github.com/Harrysmart15/Day-18-task-weather-API.git"}>Book collection</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Full Stack Web Developer</td>
                                                    <td> Bootstrap , crud, React, Router, Formik</td>
                                                    <td>
                                                        <a href={"https://github.com/Harrysmart15/library-app.git"}>set time</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Full Stack Web Developer</td>
                                                    <td> Bootstrap , crud, React, Router, Formik</td>
                                                    <td>
                                                        <a href={"https://github.com/Harrysmart15/calculator.git"}>calculator</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="col-sm-12">
                                        <h2 class="myskills">Education</h2>
                                        <br />
                                        <table class="table table-dark table-stripped">
                                            <thead>
                                                <tr>
                                                    <th>Degree</th>
                                                    <th>School/College</th>
                                                    <th>Yop</th>
                                                    <th>percentage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Mern Full Stack Developer</td>
                                                    <td>Guvi Institution</td>
                                                    <td>
                                                        2023
                                                    </td>
                                                    <td>95%</td>
                                                </tr>
                                                <tr>
                                                    <td>Diplomo In Mechanical Engineering</td>
                                                    <td>Muthyammal Polytechnic College</td>
                                                    <td>
                                                        2017
                                                    </td>
                                                    <td>87%</td>
                                                </tr>
                                                <tr>
                                                    <td>10th</td>
                                                    <td>S.R.K School Matric Hr secondary</td>
                                                    <td>
                                                        2014
                                                    </td>
                                                    <td>75%</td>
                                                </tr>
                                                
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="col-sm-12">
                                        <h2 class="myskills">Exeprience</h2>
                                        <br />
                                        <table class="table table-dark table-stripped">
                                            <thead>
                                                <tr>
                                                    <th>Company Name</th>
                                                    <th>Role</th>
                                                    <th>Year</th>
                                                    
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>ALFOUZ Arcade Restaurant</td>
                                                    <td>Manager</td>
                                                    <td>
                                                        2023
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>own Bussiness</td>
                                                    <td>Cafe Technical Care , Staff requirements,kictchen Acceroies & etc</td>
                                                    <td>
                                                        2022 -2023
                                                    </td>
                                                    
                                                    
                                                </tr>
                                                <tr>
                                                    <td>freelancing</td>
                                                    <td>Graphics designer</td>
                                                    <td>
                                                        2022 -2023
                                                    </td>
                                                    
                                                    
                                                </tr>
                                                <tr>
                                                    <td>Own Bussiness</td>
                                                    <td>Light House Corner Restaurant</td>
                                                    <td>
                                                        2020 - 2022
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>AMR Eveergreen</td>
                                                    <td>Over All Incharge</td>
                                                    <td>
                                                        2018 -2020
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>Rane Madras Limited</td>
                                                    <td>Production</td>
                                                    <td>
                                                        2017
                                                    </td>
                                                    
                                                </tr>
                                                
                                                
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                            <div class="jumbotron text-center" id="footer">
                            <h2 class="contact">Catch Me</h2>
                            <h6>phone:8778161679</h6>
                            <br/>
                                <ul class="nav justify-content-center">
                                    <li class="nav-item">
                                   
                                   
                                        <a href="https://www.linkedin.com/in/sri-k-1332b226a"
                                        class="fa fa-linkedin nav-link"
                                        style={{color:"blue"}}
                                        />
                                    </li>
                                    <li class="nav-item">
                                        <a href="https://github.com/Harrysmart15"
                                        class="fa fa-github nav-link"
                                        style={{color:"blue"}}
                                        />
                                    </li>
                                    <li class="nav-item">
                                        <a href="https://instagram.com/harikarthi508?igshid=ZDdkNTZiNTM="
                                        class="fa fa-instagram nav-link"
                                        style={{color:"blue"}}
                                        />
                                    </li>
                                    <li class="nav-item">
                                        <a href="https://www.facebook.com/harikarthi.harikarthi.50?mibextid=ZbWKwL"
                                        class="fa fa-facebook nav-link"
                                        style={{color:"blue"}}
                                        />
                                    </li>
                                    <li class="nav-item">
                                        <a href="https://twitter.com/LIGHTHOUSELOUN1?t=-BJ-D-RrUZP_gHvytz91gA&s=08"
                                        class="fa fa-twitter nav-link"
                                        style={{color:"blue"}}
                                        />
                                    </li>
                                    <li class="nav-item">
                                        <a href="https://harikarthik508@gmail.com"
                                        class="fa fa-gmail nav-link"
                                        style={{color:"blue"}}
                                        />
                                    </li>
                                </ul>
                                <br/>
                                <br/>
                                <h6>mail : harikarthik508@gmail.com</h6>
                            </div>
                        </div>

                    </div>
            </body>
        );
    }
}
export default Home;