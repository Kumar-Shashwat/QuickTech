
let dropdown1Text ;
let dropdown2Text ;
let dropdown3Text ;

dropdown1.addEventListener('change', (e) => {
        const selectedOption = dropdown1.options[dropdown1.selectedIndex];
        const selectedOptionText = selectedOption.text;
        // console.log(selectedOptionText);
        dropdown1Text = selectedOptionText;
      
  });

  dropdown2.addEventListener('change', (e) => {
    const selectedOption = dropdown2.options[dropdown2.selectedIndex];
    const selectedOptionText = selectedOption.text;
    // console.log(selectedOptionText);
    dropdown2Text = selectedOptionText;
  
});

dropdown3.addEventListener('change', (e) => {
    const selectedOption = dropdown3.options[dropdown3.selectedIndex];
    const selectedOptionText = selectedOption.text;
    // console.log(selectedOptionText);
    dropdown3Text = selectedOptionText;
  
});

let chooseBtn = document.querySelector('.btn');

chooseBtn.addEventListener('click', (e) => {

    console.log("hello  btn");
    console.log(dropdown1Text);
    console.log(dropdown2Text);
    console.log(dropdown3Text);

    const templateParams = {
        to_name: "QuickTeck",
        BusinessType: dropdown1Text,
        Category: dropdown2Text,
        pageNo: dropdown3Text,
    };

    sendEmailForBuisiness(templateParams);

    dropdown1Text = "select";
    dropdown2Text = "select";
    dropdown3Text = "select";

});


function sendEmailForBuisiness(templateParams) {
    emailjs.send("service_2eri71q","template_ytxpy28", templateParams, )
      .then(function (response) {
        console.log('Email sent successfully!', response.status, response.text);
        alert("Message sent sucessfully!");
        // Optionally, display a success message or perform other actions
      })
      .catch(function (error) {
        console.error('Error sending email:', error);
        alert("Error sending email:");
        // Optionally, display an error message or perform other actions
      });
  }
  






    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
      
        // Get form data

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;
      
        // Email.js parameters
        const templateParams = {
          from_name: name,
          to_name : "QuickTeck",
          email: email,
          subject : subject,
          message: message,
        };
      
        // Send email
        sendEmail(templateParams);

        // reseting all the entries.
        document.getElementById('contact-form').reset();
      });
      
      function sendEmail(templateParams) {
        emailjs.send("service_2eri71q","template_ihst2u9", templateParams, )
          .then(function (response) {
            console.log('Email sent successfully!', response.status, response.text);
            alert("Message sent sucessfully!");
            // Optionally, display a success message or perform other actions
          })
          .catch(function (error) {
            console.error('Error sending email:', error);
            alert("Error sending email:");
            // Optionally, display an error message or perform other actions
          });
      }
      