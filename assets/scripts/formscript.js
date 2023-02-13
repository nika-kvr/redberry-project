axios.get('https://resume.redberryinternship.ge/api/degrees').then(resp => {
    var data = resp.data;

    var selectfield = document.getElementById("xarisxi");
    let option = document.createElement("option");

    data.forEach(element => {
        let option = document.createElement("option");
        option.setAttribute('value', data[element.title]);

        let optionText = document.createTextNode(element.title);
        option.appendChild(optionText);
        option.value = element.title;

        var selectfield = document.getElementById("xarisxi");
        selectfield.appendChild(option);

    });
});


// change cv divs
var form1Btn = document.getElementById("form1-btn");
var form2Btn = document.getElementById("form2-btn");
var form3Btn = document.getElementById("form3-btn");


var form2backBtn = document.getElementById("form2back-btn");
var form3backBtn = document.getElementById("form3back-btn");


var div1 = document.getElementById("form1");
var div2 = document.getElementById("form2");
var div3 = document.getElementById("form3");
var cvForm = document.getElementById("cv-form");
var cvDemo = document.getElementById("cv-demo");


form1Btn.addEventListener("click", function(event){
    event.preventDefault();
    div1.style.display = "none";
    div2.style.display = "block";
    document.getElementById("cv-hr1").style.display = "block";

});

form2Btn.addEventListener("click", function(event){
    event.preventDefault();
    div2.style.display = "none";
    div3.style.display = "block";
    document.getElementById("cv-hr2").style.display = "block";
});


form2backBtn.addEventListener("click", function(event){
    event.preventDefault();
    div2.style.display = "none";
    div1.style.display = "block";
});

form3backBtn.addEventListener("click", function(event){
        event.preventDefault();
    div3.style.display = "none";
    div2.style.display = "block";
});




// upload image 

function getImagePreview(event){
    var image = URL.createObjectURL(event.target.files[0]);
    var imagediv = document.getElementById("preview");
    var newimg = document.createElement('img');
    newimg.src = image;
    newimg.style.borderRadius = "133px";
    newimg.style.width = "246px";
    newimg.style.height = "246px";
    imagediv.appendChild(newimg);
};

// review input typing
var fnameInput = document.getElementById("fname");
var lnameInput = document.getElementById("lname");
var textareaInput = document.getElementById("textarea");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone-number");
var tanamdebobaInput = document.getElementById("tanamdeboba");
var damsakmebeliInput = document.getElementById("damsakmebeli");
var startDateInput = document.getElementById("start-date")
var endDateInput = document.getElementById("end-date");
var descriptionInput = document.getElementById("description");
var saswavlebeliInput = document.getElementById("saswavlebeli");
var xarisxiInput = document.getElementById("xarisxi");
var unienddateInput = document.getElementById("uni-end-date");
var textareaagweraInput = document.getElementById("textarea-agwera");

var fnameHeader = document.getElementById("fname-header");
var lanemHeader = document.getElementById("lname-header");
var textareaHeader = document.getElementById("textarea-header");
var textareaLabel = document.getElementById("textarea-label");
var emailHeader = document.getElementById("email-header");
var phoneHeader = document.getElementById("phone-header");
var tanamdebobaHeader = document.getElementById("tanamdeboba-header");
var gamocdilebaHeader = document.getElementById("gamocdileba-header");
var damsakmebeliHeader = document.getElementById("damsakmebeli-header");
var startDateHeader = document.getElementById("start-date-header");
var endDateHeader = document.getElementById("end-date-hader");
var descripTionHeader = document.getElementById("description-header");
var saswavlebeliHeader = document.getElementById("saswavlebeli-header");
var xarisxiHeader = document.getElementById("xarisxi-header");
var unienddateHeader = document.getElementById("unienddate-header");
var textareaagweraHeader = document.getElementById("textarea-agwera-header");
var ganatlebaHeader = document.getElementById("ganatleba-header");

function reviewForm(){
    fnameHeader.innerHTML = fnameInput.value;
    lanemHeader.innerHTML = lnameInput.value;

    textareaHeader.innerHTML = textareaInput.value;
    if (textareaInput.value == "") {
        textareaLabel.style.display = "none";
    } else{
        textareaLabel.style.display = "block";
    };
    
    emailHeader.innerHTML = "@ " +emailInput.value;
    if (emailInput.value == ""){
        emailHeader.innerHTML = "";
    };

    phoneHeader.innerHTML = "📞 " + phoneInput.value;
    if (phoneInput.value == ""){
        phoneHeader.innerHTML = "";
    };


    tanamdebobaHeader.innerHTML = tanamdebobaInput.value;
    damsakmebeliHeader.innerHTML = ", " +damsakmebeliInput.value;
    if (tanamdebobaInput.value != "" || damsakmebeliInput.value != ""){
        gamocdilebaHeader.style.display = "block";
    }else{
        gamocdilebaHeader.style.display = "none";
    };

    if (damsakmebeliInput.value == ""){
        damsakmebeliHeader.innerHTML = "";
    };

    descripTionHeader.innerHTML = descriptionInput.value;

    saswavlebeliHeader.innerHTML = saswavlebeliInput.value;
    if (saswavlebeliInput.value == ""){
        ganatlebaHeader.style.display = "none";
    }else{
        ganatlebaHeader.style.display = "block";
    };

    textareaagweraHeader.innerHTML = textareaagweraInput.value;

};

function showDate(){
    startDateHeader.innerHTML = startDateInput.value + " - ";
    endDateHeader.innerHTML = endDateInput.value;
    xarisxiHeader.innerHTML = ",  " + xarisxiInput.value;
    if (xarisxiInput.value == ""){
        xarisxiHeader.innerHTML = "";
    };
    unienddateHeader.innerHTML = unienddateInput.value;

};



var submitBtn = document.getElementById("post-btn");

submitBtn.addEventListener("click", (e)=> {
    e.preventDefault(textareaagweraInput.value);

    const form = document.querySelector("#main-form");
    const formData = new FormData(form);

    var experiencesArray = [{
        "position": document.querySelector("#tanamdeboba").value,
        "employer": document.querySelector("#damsakmebeli").value,
        "start_date": document.querySelector("#start-date").value,
        "due_date": document.querySelector("#end-date").value,
        "description": document.querySelector("#description").value
      }];

    console.log(experiencesArray);

    var educationsArray = [{
        "institute": document.querySelector("#saswavlebeli").value,
        "degree": document.querySelector("#damsakmebeli").value,
        "due_date": document.querySelector("#start-date").value,
        "description": document.querySelector("#description").value
      }];

    console.log(educationsArray);

    formData.append("experiences[]", experiencesArray.toString());
    formData.append("educations[]", educationsArray.toString());


    var imagefile = document.querySelector('#upload-file');
    formData.append("image", imagefile.files[0]);
    console.log(formData.experiences);


    axios.post("https://resume.redberryinternship.ge/api/cvs", formData, {
        headers:{
            "Content-Type": "multipart/form-data",
        },
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });

});