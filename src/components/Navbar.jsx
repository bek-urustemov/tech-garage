import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link to="/" className="brand">
          <span className="brand-mark" />
          <span className="brand-text">tech garage</span>
        </Link>

        <form className="topbar-search" onSubmit={onSearch}>
          <span className="search-ic">⌕</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search site"
            aria-label="Search site"
          />
        </form>

        <button className="theme-ic" aria-label="Theme">
          ☼
        </button>
      </div>
    </header>
  );
}