function goTo(route) {
  const HOST = location.origin;

  if (test.startsWith('http://')) {
    if (!route) {
      location.href = `${HOST}/`;
      return;
    }
  
    location.href = `${HOST}/${route}`;
  }

  if (test.startsWith('https://')) {
    if (!route) {
      location.href = `${HOST}/lynxys-website`;
      return;
    }
  
    location.href = `${HOST}/lynxys-website/${route}`;
  }
}