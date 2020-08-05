pass.addEventListener("keyup", function () {
  strength();
});

function strength() {
  var val = document.getElementById("pass").value;
  var status = document.getElementById("length");
  var counter = 0;

  if (val != "") {
    if (val.length <= 8 && val.length > 0) {
      counter = 1;
    }
    if (val.length > 8 && val.length <= 15)
      if (val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
        counter = 3;
      } else {
        counter = 2;
      }
    if (val.length > 15) {
      if (val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
        counter = 4;
      } else {
        counter = 3;
      }
    }

    if (counter == 0) {
      status.innerHTML = "NA";
      status.style.background = "#fa6775";
      status.style.color = "#ffffff";
    }

    if (counter == 1) {
      status.innerHTML = "WEAK";
      status.style.background = "#fa6775";
      status.style.color = "#ffffff";
    }
    if (counter == 2) {
      status.innerHTML = "MEDIUM";
      status.style.background = "#336b87";
      status.style.color = "white";
    }
    if (counter == 3) {
      status.innerHTML = "STRONG";
      status.style.background = "#89da59";
      status.style.color = "#ffffff";
    }

    if (counter == 4) {
      status.innerHTML = "VERY STRONG";
      status.style.background = "#358d01";
      status.style.color = "#ffffff";
    }
  } else {
    status.innerHTML = "";
    status.style.background = "#edf1fd";
    status.style.color = "#ffffff";
  }
}
