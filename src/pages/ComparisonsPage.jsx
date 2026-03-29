import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

export default function ComparisonsPage() {
  const comparisons = articles.filter((a) => a.category === "comparisons");

  return (
    <section>
      <h1 className="section-title">Product Comparisons</h1>
      <div className="grid">
        {comparisons.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </section>
  );
}