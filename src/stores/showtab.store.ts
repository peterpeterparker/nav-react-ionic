import create from 'zustand';

export const [showTabStore] = create((set) => ({
  showTab: true,
  setShowTab: (show: boolean) => {
    set({showTab: show});
  },
}));
