firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("login.html")
    }
})

function logout() {
    firebase.auth().signOut()
}
function registerBtn() {
    window.location.href = "hostelregistration.html";
}

function complaintPortalBtn() {
    window.location.href = "complaintportal.html";
}

function surveyBtn() {
    window.location.href = "surveyform.html";
}

function leaveFormBtn() {
    window.location.href = "hostelleaveform.html";
}