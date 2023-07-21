const ContactUs = document.querySelector(".contactUs-back");

ContactUs.innerHTML = `
    <i class="fa-solid fa-xmark contactUs-xmark"></i>
    <h1>By filling out this form, you can expect to receive a message from us via email:</h1>

    <form class="contactUs-form" action="send_email.php" method="post">
      <input class="contactUs-form-name" type="text" placeholder="Name" name="name" required>
      <input class="contactUs-form-email" type="email" placeholder="Email" name="email" required>

      <textarea class="contactUs-form-description" placeholder="Description" name="message" required ></textarea>

      <div class="contactUs-form-checkbox-back">
        <input class="contactUs-form-checkbox" type="checkbox" name="contactUs-form-checkbox" id="contactUs-form-checkbox">
        <label for="contactUs-form-checkbox">Apply for our newsletter </label>
      </div>

      <input class="contactUs-form-submit" type="submit" >
    </form>

    <img src="./assets/images/Contact US/Group 876.svg" alt="">

`;

const contactForm = document.querySelector(".contactUs-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting normally

    // Send form data to server using fetch API
    fetch("send_email.php", {
        method: "POST",
        body: new FormData(contactForm)
    })
    .then(response => response.text())
    .then(message => {
        // Show confirmation message
        alert(message);

        // Reset form
        contactForm.reset();
    })
    .catch(error => {
        // Show error message
        alert("Sorry, there was a problem sending your message. Please try again later.");
    });
});