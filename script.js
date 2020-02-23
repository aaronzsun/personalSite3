window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

function showAbout(){
  document.querySelector('.content-2').scrollIntoView({ 
      behavior: 'smooth' 
    });
}

function showResume(){
  document.querySelector('.content-3').scrollIntoView({ 
      behavior: 'smooth' 
    });
}

function showProjects(){
  document.querySelector('.content-4').scrollIntoView({ 
      behavior: 'smooth' 
    });
}

function toggle1(){
  var acc = document.getElementById("accordian1")
  var pan = document.getElementById("panel1")
  var icon = document.getElementById("downarrow1")
  if (pan.style.display=="none"){
    acc.style.height="200px"
    pan.style.display="block"
    icon.style.opacity="50%";
    icon.style.rotate="180";
  }
  else {
    acc.style.height="100px"
    pan.style.display="none"
    icon.style.opacity="100%"
  }
}

function toggle2(){
  var acc = document.getElementById("accordian2")
  var pan = document.getElementById("panel2")
  var icon = document.getElementById("downarrow2")
  if (pan.style.display=="none"){
    acc.style.height="200px"
    pan.style.display="block"
    icon.style.opacity="50%";
  }
  else {
    acc.style.height="100px"
    pan.style.display="none"
    icon.style.opacity="100%"
  }
}

function toggle3(){
  var acc = document.getElementById("accordian3")
  var pan = document.getElementById("panel3")
  var icon = document.getElementById("downarrow3")
  if (pan.style.display=="none"){
    acc.style.height="200px"
    pan.style.display="block"
    icon.style.opacity="50%";
  }
  else {
    acc.style.height="100px"
    pan.style.display="none"
    icon.style.opacity="100%"
  }
}