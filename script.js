const cookiesContainer = document.getElementById('cookies-container');
if (cookiesAccepted === 'ok') {
  cookiesContainer.style.display = 'none';
} else {
  setTimeout(() => {
      cookiesContainer.style.opacity = '1';
    }, 0)
}

function acceptCookies() {
  cookiesContainer.style.display = 'none';
  localStorage.setItem('cookiesAccepted', 'ok');
  gtag('consent', 'update', {
    'analytics_storage': 'granted'
  });
}
