document.addEventListener("DOMContentLoaded", function(){
    if(!localStorage.getItem('cookieConsent')){
      document.getElementById("cookie-consent-popup").style.display = "block";
    }
    document.getElementById("cookie-consent-accept").addEventListener("click", function(){
      localStorage.setItem("cookieConsent", "true");
      document.getElementById("cookie-consent-popup").style.display = "none";
    });

    document.getElementById("cookie-consent-decline").addEventListener("click", function(){
        localStorage.setItem("cookieConsent", "false");
        document.getElementById("cookie-consent-popup").style.display = "none";
      });
  });
