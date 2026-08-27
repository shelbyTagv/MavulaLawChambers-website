import { useState } from "react";

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className = "" }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) setQuery("");
  };

  return (
    <div className={`relative flex items-center ${className}`}>
      <div
        className={`flex items-center overflow-hidden transition-all duration-300 ${
          isOpen ? "w-48 sm:w-64" : "w-0"
        }`}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full bg-black/40 text-white placeholder-gray-400 px-3 py-1.5 text-sm border border-gold/40 rounded-l focus:outline-none focus:border-gold"
          aria-label="Search the website"
        />
      </div>
      <button
        onClick={handleToggle}
        className={`flex items-center justify-center w-9 h-9 transition-all duration-300 ${
          isOpen
            ? "bg-gold text-black rounded-r"
            : "text-black hover:text-brand-charcoal"
        }`}
        aria-label={isOpen ? "Close search" : "Open search"}
      >
        {isOpen ? (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        )}
      </button>
    </div>
  );
}
