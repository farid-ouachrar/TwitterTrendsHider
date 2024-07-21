function hideTrends() {
  const trendsContainer = document.querySelector('[data-testid="sidebarColumn"] [data-testid="trend"]');
  if (trendsContainer) {
    trendsContainer.style.display = 'none';
  }
}

// Run the function when the page loads
hideTrends();

// Use a MutationObserver to handle dynamic content loading
const observer = new MutationObserver(hideTrends);
observer.observe(document.body, { childList: true, subtree: true });
