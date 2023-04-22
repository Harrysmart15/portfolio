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
                            </div>
                        </div>

                    </div>
            </body>
        );
    }
}
export default Home;