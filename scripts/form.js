//rating

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
   rangevalue.innerHTML = range.value;
}

//password verification
const pwd1 = document.querySelector("#password");
const pwd2 = document.querySelector("#password2");

const msg = document.querySelect("#message");

pwd2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pwd1.value !== pwd2.value) {
        msg.textContent = "❗Passwords DO NOT MATCH!";
        msg.style.visibility = "show";
        pwd2.style.backgroundColor = "#fff0f3";
        pwd2.value = "";
        pwd2.focus();
    } else {
        msg.style.display ="none";
        pwd2.style.backgroundColor = "rgba(0,0,0,0.2)";
        pwd2.style.color = "#000";
    }
}