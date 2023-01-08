const firebaseConfig = {
    apiKey: "AIzaSyCkU6Oja2H-TefaNOWyhSHLuiGchOsLOpo",
    authDomain: "survey-form-2c780.firebaseapp.com",
    databaseURL: "https://survey-form-2c780-default-rtdb.firebaseio.com",
    projectId: "survey-form-2c780",
    storageBucket: "survey-form-2c780.appspot.com",
    messagingSenderId: "928739011558",
    appId: "1:928739011558:web:26602589b0b33a04b88427",
    measurementId: "G-BH6JWW7D65"
};
//   initialise firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var surveyFormDB = firebase.database().ref("surveyForm");

document.getElementById("surveyForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getElementVal("name");
    var rollNumber = getElementVal("rollNumber");
    var email = getElementVal("email");
    var hostelName = getElementVal("hostelName");
    var surveyTime = getElementVal("surveyTime");
    var staffBehaviur = getElementVal("staffBehaviur");
    var mostLike = getElementVal("mostLike");
    var foodTaste = getElementVal("foodTaste");
    var messClean = getElementVal("messClean");
    var suggestion = getElementVal("suggestion");
    
    var star = getElementVal("star");
    var canteen = getElementVal("canteen");
   

    saveMessages(name,rollNumber,email,hostelName,surveyTime,staffBehaviur,mostLike,foodTaste,messClean,suggestion,star,canteen);
    
    
}

const saveMessages = (name,rollNumber,email,hostelName,surveyTime,staffBehaviur,mostLike,foodTaste,messClean,suggestion,star,canteen) =>{
    var newSurveyForm = surveyFormDB.push();

    newSurveyForm.set({
        name : name,
        RollNumber : rollNumber,
        Email : email,
        Hostelname : hostelName,
        Surveytime : surveyTime,
        Staffbehaviur : staffBehaviur,
        Mostlike : mostLike,
        Foodtaste : foodTaste,
        Messclean : messClean,
        suggestion : suggestion,
        Stars : star,
        Canteen : canteen,
    });
};

const getElementVal = (id) => {
    
    return document.getElementById(id).value;
    
};



function Clear(){
    // var clears = document.getElementsByClassName("toClear");
    // for (ele in clears){
    //     clears[ele].value = "";
    // }
    alert("form filled successfully");
    location.reload();
}