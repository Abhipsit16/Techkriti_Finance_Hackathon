"use client";

import { useInsightsStore } from "@/store/insightsStore";
import InsightsCard from "@/components/insightscard";
import StoryBlock from "@/components/StoryBlock";
import RecommendationBox from "@/components/RecommendationBox";

export default function InsightsPage() {
  const { insights } = useInsightsStore();

  if (!insights) {
    return (
      <div className="text-center mt-16">
        <h1 className="text-3xl font-bold">No Insights Found</h1>
        <p className="mt-4 text-gray-600">Please upload a PDF and ask a question first.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Insights from your Financial Statement</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.keyIndicators.map((item: any, index: number) => (
          <InsightsCard key={index} title={item.title} value={item.value} />
        ))}
      </div>

      <StoryBlock story={insights.laymanStory} />
      <RecommendationBox recommendation={insights.recommendation} />
    </div>
  );
}
