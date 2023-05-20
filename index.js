var contactButtons = document.querySelectorAll('.button');

for (var i = 0; i < contactButtons.length; i++) {
  contactButtons[i].addEventListener('click', function() {
    var phoneNumber = "+19177949688"; // Replace with your desired phone number

    if (isMobileDevice()) {
      // Dial the phone number on mobile devices
      window.location.href = "tel:" + phoneNumber;
    } else {
      // Open a pop-up with the phone number on desktop devices
      alert("Call us: " + phoneNumber);
    }
  });
}

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
