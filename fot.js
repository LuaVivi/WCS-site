async function loadFooter() {
  try {
    const response = await fetch('footer.html');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const footerContent = await response.text();
    document.getElementById('share').innerHTML = footerContent;
  } catch (error) {
    console.error('Eroare la încărcarea footer-ului:', error);
  }
}

loadFooter();
