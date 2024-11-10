/////////get reference to the frm and display area
const form = document.getElementById('input-form') as HTMLFormElement;
const resumeDisplay = document.getElementById(`resume-display`) as HTMLDivElement

 /////handle form submission
form.addEventListener(`submit`,(event : Event) => {
    event.preventDefault();  ///prevent page reload
     
    ////collect input values 
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experiace = (document.getElementById('experiance') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    ////generate the resume content display
    const resumeHtml = `
    <h2><b>Resume</b></h2>
    <h3> Personal information</h3>
    <p><b>Email:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Email:</b>${phone}</p>
    
    <h3>Education</h3>
    <p>${education}</p>
    
     <h3>Experiance</h3>
    <p>${experiace}</p>

     <h3>Skills</h3>
    <p>${skills}</p>`;

    if(resumeDisplay){
        resumeDisplay.innerHTML = resumeHtml;
    }else{
        console.error('The resume display element is missing.')
    }
})