/////////get reference to the frm and display area
var form = document.getElementById("input-form");
var resumeDisplay = document.getElementById("resume-display");
/////handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); ///prevent page reload
    ////collect input values 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiace = document.getElementById('experiance').value;
    var skills = document.getElementById('skills').value;
    ////generate the resume content display
    var resumeHtml = "\n    <h2><b>Resume</b></h2>\n    <h3> Personal information</h3>\n    <p><b>Email:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Email:</b>").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    \n     <h3>Experiance</h3>\n    <p>").concat(experiace, "</p>\n\n     <h3>Skills</h3>\n    <p>").concat(skills, "</p>");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is missing.');
    }
});