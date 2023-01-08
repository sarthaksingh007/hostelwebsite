function sendMail(e) {
   
    var params = {
        Name: document.getElementById("Name").value,
        rollNumber: document.getElementById("rollNumber").value,
        email: document.getElementById("email").value,
        branch: document.getElementById("branch").value,
        date: document.getElementById("date").value,
        dateOfLeave: document.getElementById("dateOfLeave").value,
        dateOfArriving: document.getElementById("dateOfArriving").value,
        purpose: document.getElementById("purpose").value,
        numberOfDays: document.getElementById("numberOfDays").value,
        parentsContact: document.getElementById("parentsContact").value,
        areaCode: document.getElementById("areaCode").value,
        number: document.getElementById("number").value,
        radio: document.getElementById("radio").value,
        
    };

    const serviceID = "service_5dg1xsr";
    // const templateID = "template_00bhjso";
    const templateID = "template_0svld0b";

    console.log({params});

    emailjs.send(serviceID, templateID, params).then((res) => {
        console.log(res.text);
        // document.getElementById("name").value = "";
        // document.getElementById("rollno").value = "";
        // document.getElementById("branch").value = "";
        // document.getElementById("Email").value = "";
        // document.getElementById("phoneno.").value = "";
        // document.getElementById("hostel").value = "";
        // document.getElementById("description").value = "";
        alert("your message sent successfully")
    })
        .catch((err) => console.log(err))
        .finally(()=>e.reset())
}

