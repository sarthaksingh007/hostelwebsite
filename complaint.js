function sendMail(e) {
   
    var params = {
        name: document.getElementById("name").value,
        rollNumber: document.getElementById("rollNumber").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        branch: document.getElementById("branch").value,
        hostel: document.getElementById("hostel").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_5dg1xsr";
    // const templateID = "template_00bhjso";
    const templateID = "template_955t2r6";

    console.log({params});

    emailjs.send(serviceID, templateID, params).then((res) => {
        console.log(res.text);
       
        alert("your message sent successfully")
    })
        .catch((err) => console.log(err))
        .finally(()=>e.reset())
}

