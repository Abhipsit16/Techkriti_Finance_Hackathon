import { create } from "zustand";

interface KeyIndicator {
  title: string;
  value: string;
}

interface Insights {
  keyIndicators: KeyIndicator[];
  laymanStory: string;
  recommendation: string;
}

interface Store {
  insights: Insights | null;
  setInsights: (insights: Insights) => void;
}

export const useInsightsStore = create<Store>((set) => ({
  insights: null,
  setInsights: (insights) => set({ insights }),
}));
