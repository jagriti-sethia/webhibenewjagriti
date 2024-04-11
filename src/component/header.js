import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        // <div className="headnav">
        //     <ul class="nav">
        //         <li class="nav-item">
        //             <Link to="/" >  Home  </Link>---
        //         </li>
        //         <li class="nav-item">
        //             <Link to="/userform" >  userform Page </Link>---
        //         </li>
        //         <li class="nav-item">
        //             <Link to="/login" >  loginPage </Link>
        //         </li>

        //     </ul>

        // </div>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">

                                <Link to="/" class="nav-link " >  Home  </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/userform" class="nav-link ">  userform Page </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/output" class="nav-link ">  outputtablePage </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" class="nav-link ">  loginPage </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/cardapi" class="nav-link ">  cardapiPage </Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Header;