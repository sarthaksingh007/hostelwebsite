const firebaseConfig = {
    apiKey: "AIzaSyD1IJiX9Gl9qyRPXfjJoN9OtkZUI2ehfgw",
    authDomain: "registration-form-data.firebaseapp.com",
    databaseURL: "https://registration-form-data-default-rtdb.firebaseio.com",
    projectId: "registration-form-data",
    storageBucket: "registration-form-data.appspot.com",
    messagingSenderId: "609265870741",
    appId: "1:609265870741:web:88277b0782bf6bd2cd789c",
    measurementId: "G-BKYZFD3MLT"
};
//   initialise firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var registrationDB = firebase.database().ref("registration");

document.getElementById("registration").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getElementVal("name");
    var rollNumber = getElementVal("rollNumber");
    var email = getElementVal("email");
    var hostelName = getElementVal("hostelName");
    var bloodGroup = getElementVal("bloodGroup");
    var age = getElementVal("age");
    var category = getElementVal("category");
    var phoneNumber = getElementVal("phoneNumber");
    var birthDate = getElementVal("birthDate");
    var fatherName = getElementVal("fatherName");
    var fatherPhoneNumber = getElementVal("fatherPhoneNumber");
    var fatherEmailId = getElementVal("fatherEmailId");
    var guardianName = getElementVal("guardianName");
    var address1 = getElementVal("address1");
    var address2 = getElementVal("address2");
    var state = getElementVal("state");
    var city = getElementVal("city");
    var region = getElementVal("region");
    var pinCode = getElementVal("pinCode");
    var termCondition = getElementVal("termCondition");
    var selectedGender;
    document.getElementsByName("gender").forEach(function (elm) {
        if (elm.checked) {
            selectedGender = elm.id;
        }
    })

    console.log(name, rollNumber, email, hostelName, bloodGroup, age, category, phoneNumber, birthDate, fatherName, fatherPhoneNumber, fatherEmailId, guardianName, address1, address2, state, city, region, pinCode, termCondition,selectedGender);
    saveMessages(name, rollNumber, email, hostelName, bloodGroup, age, category, phoneNumber, birthDate, fatherName, fatherPhoneNumber, fatherEmailId, guardianName, address1, address2, state, city, region, pinCode, termCondition,selectedGender);
    alert("successfully");
    location.reload();
    

}


const saveMessages = (name, rollNumber, email, hostelName, bloodGroup, age, category, phoneNumber, birthDate, fatherName, fatherPhoneNumber, fatherEmailId, guardianName, address1, address2, state, city, region, pinCode, termCondition,selectedGender) => {
    var newRegistration = registrationDB.push();

    newRegistration.set({
        name: name,
        RollNumber: rollNumber,
        Email: email,
        Hostelname: hostelName,
        BloodGroup: bloodGroup,
        Age: age,
        Category: category,
        PhoneNumber: phoneNumber,
        BirthDate: birthDate,
        fatherName: fatherName,
        fatherPhoneNumber: fatherPhoneNumber,
        fatherEmailId: fatherEmailId,
        guardianName: guardianName,
        address1: address1,
        address2: address2,
        state: state,
        city: city,
        region: region,
        pinCode: pinCode,
        termCondition: termCondition,
        selectedGender : selectedGender,
    });
};

const getElementVal = (id) => {

    return document.getElementById(id).value;

};


