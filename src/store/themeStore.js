import { create } from 'zustand';

const useThemeStore = create((set) => ({
  theme: 'light',
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      // Update DOM class
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('light', 'dark');
        document.body.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
        document.body.classList.add(newTheme);
        // Save to localStorage
        localStorage.setItem('theme', newTheme);
      }
      return { theme: newTheme };
    });
  },
  setTheme: (theme) => {
    set(() => {
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('light', 'dark');
        document.body.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
      }
      return { theme };
    });
  },
  initializeTheme: () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light';
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = savedTheme === 'system' ? (prefersDark ? 'dark' : 'light') : savedTheme;

      document.documentElement.classList.remove('light', 'dark');
      document.body.classList.remove('light', 'dark');
      document.documentElement.classList.add(initialTheme);
      document.body.classList.add(initialTheme);
      set({ theme: initialTheme });
    }
  },
}));

export default useThemeStore;
