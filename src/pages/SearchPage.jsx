import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchPage() {
  const query = useQuery().get("q")?.toLowerCase().trim() || "";

  const results = useMemo(() => {
    if (!query) return [];
    return articles.filter((a) =>
      `${a.title} ${a.excerpt} ${a.category}`.toLowerCase().includes(query)
    );
  }, [query]);

  return (
    <section>
      <h1 className="section-title">Search: "{query}"</h1>
      {results.length ? (
        <div className="grid">
          {results.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      ) : (
        <p>No matching articles found.</p>
      )}
    </section>
  );
}