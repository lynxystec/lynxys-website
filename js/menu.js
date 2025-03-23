function goTo(route) {
  const HOST = location.origin;

  if (!route) {
    location.href = `${HOST}/`;
    return;
  }

  location.href = `${HOST}/${route}`;
}