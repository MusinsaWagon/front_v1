interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}

const isPWAActive = (): boolean => {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in navigator &&
      Boolean((navigator as NavigatorWithStandalone).standalone))
  );
};

export default isPWAActive;
