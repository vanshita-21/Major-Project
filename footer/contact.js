const firebaseConfig = {
    apiKey: "AIzaSyDjaUr-cEtTf0unhIDTO4gmoG350v_bjFY",
    authDomain: "loginform-745df.firebaseapp.com",
    databaseURL: "https://loginform-745df-default-rtdb.firebaseio.com",
    projectId: "loginform-745df",
    storageBucket: "loginform-745df.appspot.com",
    messagingSenderId: "129672860453",
    appId: "1:129672860453:web:17b13749c7ec023880c0cc"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
  
  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit" , submitForm);

  function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var phone = getElementVal("phone");
    var email = getElementVal("email");
    var subject = getElementVal("subject");
    var message = getElementVal("message");
    

    saveMessages(name, phone, email, subject, message);

    // enable the alert

    document.querySelector(".alert").style.display = "block";

    // Remove the alert

    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    //reset the form

    document.getElementById("contactForm").reset();
  }

  const saveMessages = (name, phone, email, subject, message) => {
    var newcontactForm = contactFormDB.push();

    newcontactForm.set({
      name : name,
      phone : phone,
      email : email, 
      subject : subject,
      message : message,
      
    });
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

