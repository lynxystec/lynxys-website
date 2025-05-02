function goTo(route) {
  const HOST = location.origin;

  if (HOST.startsWith('http://')) {
    if (!route) {
      location.href = `${HOST}/`;
      return;
    }
  
    location.href = `${HOST}/${route}`;
  }

  if (HOST.startsWith('https://')) {
    if (!route) {
      location.href = `${HOST}/lynxys-website`;
      return;
    }
  
    location.href = `${HOST}/lynxys-website/${route}`;
  }
}

function toggleModalMobile() {
  const modalMobile = document.getElementById('modal-mobile');
  modalMobile.classList.contains('hide') ? modalMobile.classList.remove('hide') : modalMobile.classList.add('hide');
}