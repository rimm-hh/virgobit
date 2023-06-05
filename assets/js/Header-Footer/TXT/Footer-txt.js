const footer = document.querySelector(".footer");

footer.innerHTML = ` 
  <div class="container-footer">
    <div class="top-footer">
    
        <div class="footer-1-sec">
    
            <div class="logo-footer">
                <a href="index.html"><img class="logo-footer-img" src="./assets/images/Header-Footer/logo.png" alt=""></a>
            </div>
    
            <div class="social-footer">
                <a href="#" class="linkedin-soc"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="#" class="email-soc"><i class="fa-solid fa-envelope"></i></a>
            </div>
    
        </div>
        <div class="footer-2-sec">
            <h3>Company</h3>
            <p><a href="#">Impressum</a></p>
            <p><a href="#">About us</a></p>
            <p><a href="#">Services</a></p>
            <p><a href="#">FAQ</a></p>
        </div>
        <div class="footer-3-sec">
            <h3>Contact</h3>
            <a href="#">info@virgobit.com
            </a>
        </div>
        <div class="footer-4-sec">
            <h3 class="footer-5-sec-h3">Apply for our newsletter</h3>
            <form class="footer-form">
                <label class="footer-email-lable"     for="email-Apply-for-our-newsletter"> Enter your E-mail
                </label>
                <input type="email" name="email-Apply-for-our-newsletter"     class="footer-email-input" placeholder="Enter your E-mail">
                <input class="footer-email-submit" type="submit" value="Subscribe">
            </form>
        </div>
    
    </div>
    <div class="bottom-footer">
        <a class="footer-Terms" href="#">Terms & Conditions</span></a>
        <a class="footer-Lice" href="#">License</a>
        <a class="footer-Pri" href="#">Privacy</a>
    </div>
  </div>
`;