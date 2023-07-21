const header = document.querySelector(".header");

header.innerHTML = ` 
  <div class="header-container">
  
    <div class="logo-header">
        <a href="index.html"><img src="./assets/images/Header-Footer/logo.svg"   alt=""   class="logo-img"></a>
    </div>
    
    <div class="menu">
        <ul class="menu-ul">
            <li class="serv-sec">Services
                <i class="fa-solid fa-chevron-down chevron-down chevron-down-1"></i>
    
                <div class="container-sub-serv-sec">
                    <div class="sub-serv-sec">
                        <ul>
                            <a href="./Services-ux-ui.html">UX / UI Design</a>
    
                            <li>Website Design</li>
                            <li>Mobile App Design</li>
                            <li>Design solution</li>
                            <li>UX Research</li>
                            <li>Prototyping</li>
                            <li>Wireframing</li>

                            <a id="Our-Brochure-btn-2" href="./assets/downlaod/New Microsoft PowerPoint Presentation..pdf" >Click here to download our Brochure</a>
                        </ul>
                        <ul>
                            <a href="./Services-develop.html">Development</a>
    
                            <li>Web Development</li>
                            <li>Mobile App Development</li>
                            <li>Game Development</li>
                            <li>AI Development</li>
                            <li>Full Stack Development</li>
                            <!-- <li>Backend Development</li>
                            <li>Frontend Development</li> -->
                        </ul>
                        <ul>
                            <a href="./Services-health.html">Health Data Science</a>
    
                            <li>Biosignal Analysis</li>
                            <li>Large Data Collection</li>
                            <li>Data Analytics</li>
                        </ul>
    
                        <a href="./Services.html">View All</a>
                    </div>
                </div>
            </li>
    
            <li><a href="./industry.html">Industries</a></li>
    
            <li class="case-sec">Case Study
                <i class="fa-solid fa-chevron-down chevron-down chevron-down-2"></i>
                <div class="container-sub-case-sec">
                  <div class="sub-case-sec">
                    <ul>
                      <a href="./BrainGoMo-Website.html">
                        BrainGoMo Website Redesign
                      </a>
                      <li>
                        <a href="./BrainGoMo-Website.html">
                          <img src="./assets/images/Header-Footer/Group 511.png" alt="">
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <a href="./Braingomo-App.html">BrainGoMo Mobile App Design</a>
                      <li>
                        <a href="./Braingomo-App.html">
                          <img src="./assets/images/Header-Footer/Green Gradient Application Showcase Presentation (1) 1.png"
                            alt="">
                        </a>
                      </li>
                    </ul>
                    <a href="./Case-Studies.html">View All</a>
                  </div>
                </div>
              </li>
    
            <li><a href="./about.html">About</a></li>
        </ul>
    </div>
    
    <div class="container-Btns-header">

      <a href="./assets/downlaod/New Microsoft PowerPoint Presentation..pdf" class="Our-Brochure-btn">Our Brochure</a>

      <a href="#" class="Contact-Us">Contact Us</a>

    </div>
    
    </div>
    
    <div class="header-container-mobile">
    
    <div class="header-container-mobile-top">
        <i class="fa-solid fa-bars bars-menu" style="color: #ffffff;"></i>
        <i class="fa-solid fa-xmark x-mark-menu" style="color: #ffffff;   font-size:   32px; display: none;"></i>
        <a href="./index.html"><img src="assets/images/Header-Footer/logo.svg"     alt=""></a>
        <i class="fa-solid fa-bars" style="color: #ffffff; visibility: hidden;"></i>
    </div>
    
    <div class="header-container-mobile-bottom">
    
        <ul class="header-container-mobile-bottom-ul">
    
            <li class="serv-mobile-btn">Services <i class="fa-solid   fa-chevron-down   chevron-down-mobile-1"></i>
                <ul class="serv-mobile">
                    <li><a href="./Services-ux-ui.html">UX / UI Design</a></li>
                    <li><a href="./Services-develop.html">Development</a></li>
                    <li><a href="./Services-health.html">Health Data Science</a></li>
                    <li><a href="./Services.html">View All</a></li>
                </ul>
            </li>
    
            <li><a href="./industry.html">Industries</a></li>
    
            <li class="serv-case-btn">Case Study <i class="fa-solid   fa-chevron-down   chevron-down-mobile-2"></i>
                <ul class="serv-case">
                    <li><a href="./BrainGoMo-Website.html">BrainGoMo Website     Redesign</a></li>
                    <li><a href="./Braingomo-App.html">BrainGoMo Mobile App Design</a></li>
                    <li><a href="./Case-Studies.html">View All</a></li>
                </ul>
            </li>
    
            <li><a href="./about.html">About</a></li>
    
        </ul>
    
        <a href="#" class="Contact-Us-mobile">Contact Us</a>
        <a id="Our-Brochure-btn-3" href="./assets/downlaod/New Microsoft PowerPoint Presentation..pdf" >Click here to download our Brochure</a>
    </div>
  </div>
`;