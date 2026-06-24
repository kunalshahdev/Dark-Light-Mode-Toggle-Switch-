const toggle = document.getElementById('theme-toggle');
const timeOfDay = document.getElementById('time-of-day');
const hintText = document.getElementById('hint-text');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  if (hour < 17) return 'afternoon';
  return 'evening';
}

function setTheme(isDark) {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  toggle.checked = isDark;
  timeOfDay.textContent = getTimeOfDay();
  hintText.textContent = isDark
    ? 'Switch to light mode for a sunny vibe ☀️'
    : 'Switch to dark mode for a calmer glow ✨';
}

setTheme(prefersDark.matches);

toggle.addEventListener('change', () => {
  setTheme(toggle.checked);
});

prefersDark.addEventListener('change', (e) => {
  setTheme(e.matches);
});
