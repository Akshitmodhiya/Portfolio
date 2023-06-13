const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
const sidemenu = document.getElementById("sidemenu");

// Tab bar
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Menu Bar
function openmenu() {
  sidemenu.style.right = '0';
}

function closemenu() {
  sidemenu.style.right = '-200px';
}

// Go to top
window.addEventListener('scroll', function () {
  let scrollToTopButton = document.querySelector('.goToTop');
  if (scrollToTopButton) {
    scrollToTopButton.classList.toggle('active', window.scrollY > 500);
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


// Contact Form
function sendEmail() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let message = document.getElementById('message').value;
  let body = `Name: ${name} <br/> Email: ${email} <br/> Phone No: ${phone} <br/> Message: ${message}`;

  Email.send({
    SecureToken: "fdcfb17e-49a4-4767-8470-7baa771e0ecc",
    To: 'axitmodhiya@gmail.com',
    From: "akshitmodhiya@gmail.com",
    Subject: "Contact Message",
    Body: body
  }).then(
    message => alert(message)
  );
}


