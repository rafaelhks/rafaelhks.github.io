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

function snackbar(message, time) {
  var snackbar = document.createElement('div');
  snackbar.id = 'snackbar';
  snackbar.className = 'show';
  snackbar.innerHTML = message;
  document.body.appendChild(snackbar);	

  setTimeout(function(){ 
	document.body.removeChild(snackbar); 
  }, time != null ? time : 3000);
} 

function remove(id) {
  var element = document.getElementById(id);
  document.body.removeChild(element); 
}	

function alert(title, message) {
  var alert = document.createElement('div');
  alert.id = 'rl_alert';
  alert.innerHTML = '<div class="fade show"><div class="rl-alert"><span class="rl-alert-header">'+title+'</span><span class="rl-alert-content">'+message+'</span><div class="rl-alert-footer"><span onclick="remove(\'rl_alert\');" class="rl-alert-option">OK</span></div></div></div>';
  document.body.appendChild(alert);
}

function toggleMenu() {
  var element = document.getElementById('id_Sidenav');
  var el_cur_class = element.className;

  console.log('claas: '+el_cur_class);
  
  if(el_cur_class==="sidenav"){
    element.className = "sidenav sidenav-collapsed";
  }else{
    element.className = "sidenav";
  }
}

function closeMenu(){
  var element = document.getElementById('id_Sidenav');
  element.className = "sidenav sidenav-collapsed";
}

function copyToClipboard(value) {
  const el = document.createElement('textarea');
  el.value = value;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  toast('Copiado para a área de transferência!');
};
