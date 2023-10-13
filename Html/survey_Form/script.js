function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderMale = document.getElementById("male").checked;
    const genderFemale = document.getElementById("female").checked;
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const pop= document.getElementById("popup");

    if (firstName && lastName && dob && country && (genderMale || genderFemale || genderOthers) && profession && email && mobile) {
        const gender = genderMale ? "Male" : "Female";
        const popupContent = `
                            <div class='popupDetails'>
                                <div class='closingPopup'>
                                    <button onclick="closePopup()">
                                    <i class="fa fa-close" style="font-size:28px;color:red;cursor:pointer"></i>
                                    </button>
                                </div>
                                <div class='popupBody'>
                                    First Name: ${firstName}<br>
                                    Last Name: ${lastName}<br>
                                    Date of Birth: ${dob}<br>
                                    Country: ${country}<br>
                                    Gender: ${gender}<br>
                                    Profession: ${profession}<br>
                                    Email: ${email}<br>
                                    Mobile Number: ${mobile}`;
                                `</div>
                            </div>`

        document.getElementById("popupContent").innerHTML = popupContent;
        document.getElementById("popup").style.display = "flex";
    } 
    else {
        alert("Please fill out all fields.");
    }
}

document.getElementById("surveyForm").addEventListener("reset", function() {
    document.getElementById("popup").style.display = "none";
});

function closePopup() {
    document.getElementById("surveyForm").reset();
    
}