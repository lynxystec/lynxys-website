function goTo(route) {
  const GITHUB_PAGES_HOST = 'lynxys-website';

  if (!route) {
    location.href = `${GITHUB_PAGES_HOST}/`;
    return;
  }

  location.href = `${GITHUB_PAGES_HOST}/${route}`;
}