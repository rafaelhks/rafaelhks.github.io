window.onscroll = function() {stickNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function toast(message, time) {
    var toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'show';
    toast.innerHTML = message;
    document.body.appendChild(toast);
  
    setTimeout(function(){ 
      document.body.removeChild(toast); 
    }, time != null ? time : 3000);
  } 

function readMoL(btnMore, dotsId, moreId) {
    var dots = document.getElementById(dotsId);
    var moreText = document.getElementById(moreId);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnMore.innerHTML = "Ler mais";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnMore.innerHTML = "Ler menos";
        moreText.style.display = "inline";
    }
}

function callMail(){
    try {
        toast("Abrindo seu gerenciador de email...");
        window.location.href = "mailto:rafaelfrancisco_97@hotmail.com?subject=Assunto&body=Escreva%20uma%20mensagem%20aqui";
    } catch (error) {
        toast("Erro: "+error.message);
    }
}

function stickNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 

function goBack() {
  window.history.back();
}