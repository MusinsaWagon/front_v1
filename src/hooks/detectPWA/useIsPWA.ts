interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}
const isPWAActive = () => {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in navigator &&
      (navigator as NavigatorWithStandalone).standalone) ||
    document.referrer === ''
  );
};

export default isPWAActive;
