// Function for dropdown of table content of size and colour

/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  //Functoin for checkbox to show bottom box only one at a time out of three boxes

  function myFunctionCheck() {
    var checkBox1 = document.getElementById("myCheck1");
    var checkBox2 = document.getElementById("myCheck2");
    var checkBox3 = document.getElementById("myCheck3");
    var box1 = document.getElementById("bottom-box1");
    var box2 = document.getElementById("bottom-box2");
    var box3 = document.getElementById("bottom-box3");
    if (checkBox1.checked == true && checkBox2.checked == false && checkBox3.checked == false){
      box1.style.display = "block";
      box2.style.display = "none";
      box3.style.display = "none";
      checkBox2.checked = false;
      checkBox3.checked = false;
      var  innerBox2 = document.getElementById("inner-container-box2")
      innerBox2.style.border = "2px solid #FF6B82";
      innerBox2.style.margin = "0 0 25px 0";
      document.getElementById("inner-top-box2").style.border = "none";

    } else if(checkBox1.checked == false && checkBox2.checked == true && checkBox3.checked == false){
      box1.style.display = "none";
      box2.style.display = "block";
      box3.style.display = "none";
      checkBox1.checked = false;
      checkBox3.checked = false;
      var  innerBox3 = document.getElementById("inner-container-box3")
      innerBox3.style.border = "2px solid #FF6B82";
      innerBox3.style.margin = "0 0 25px 0";
      document.getElementById("inner-top-box3").style.border = "none";
    }
    else if(checkBox1.checked == false && checkBox2.checked == false && checkBox3.checked == true) {
      box1.style.display = "none";
      box2.style.display = "none";
      box3.style.display = "block";
      checkBox1.checked = false;
      checkBox2.checked = false;
      var  innerBox4 = document.getElementById("inner-container-box4")
      innerBox4.style.border = "2px solid #FF6B82";
      innerBox4.style.margin = "0 0 25px 0";
      document.getElementById("inner-top-box4").style.border = "none";
    }
    else {
      box1.style.display = "none";
      box2.style.display = "none";
      box3.style.display = "none";
      checkBox1.checked = false;
      checkBox2.checked = false;
      checkBox3.checked = false;
    }
  }