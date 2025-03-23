function goTo(route) {
  if (!route) {
    location.href = '/';
    return;
  }

  location.href = `/${route}`;
}