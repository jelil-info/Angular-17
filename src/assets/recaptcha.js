//recaptcha
function captcha() {

    document.getElementById('myForm').addEventListener('submit', function (e) {
      if (grecaptcha.getResponse() == "") {
        e.preventDefault();
        document.getElementById("recaptchaerr").innerHTML = 'Please select captcha';
      } else {

        //replacing button onsubmit
        document.getElementById("recaptchaerr").innerHTML = 'Thank you for sending';
        var newElement = document.createElement('p');
        newElement.textContent = 'The form has been submitted.';
        var oldElement = document.getElementById('clickToDisable1');
        oldElement.replaceWith(newElement);
        //document.getElementById("clickToDisable1").addEventListener("click", (e) => { e.preventDefault() });
        //document.getElementById("myForm").reset();
        /*var button = document.getElementById('myButton');
        var oldValue = button.value;
        var isDisabled = true;

        button.disabled = isDisabled;

        setTimeout(function() {
            button.value = oldValue;
            button.disabled = !isDisabled;
        }, 3000);*/
      }
    });

  }
