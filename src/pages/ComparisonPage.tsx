import ComparisonTemplate from "@/components/ComparisonTemplate";
import { comparisons } from "@/data/comparisons";
import { useRoute } from "wouter";
import NotFound from "./NotFound";

export default function ComparisonPage() {
  const [match, params] = useRoute("/comparison/:slug");
  
  if (!match) return <NotFound />;
  
  const comparison = comparisons.find(c => c.slug === params.slug);
  
  if (!comparison) return <NotFound />;
  
  return <ComparisonTemplate data={comparison} />;
}
