import { create } from "zustand";

const useStore = create((set) => ({
  location: 0,
  changeLocation: (newLocation) => set({ location: newLocation }),
}));

export default useStore;
