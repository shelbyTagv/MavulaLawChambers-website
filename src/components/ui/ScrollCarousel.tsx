import { useRef, useState, useEffect } from "react";

interface ScrollCarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  cardWidth?: number; // Width of each card in pixels (used for scrolling calculation)
  gap?: number; // Gap between cards in pixels
  showArrows?: boolean;
  arrowLabel?: { prev: string; next: string };
}

export default function ScrollCarousel<T extends { id: number }>({
  items,
  renderItem,
  cardWidth = 320,
  gap = 24,
  showArrows = true,
  arrowLabel = { prev: "Scroll to previous", next: "Scroll to next" },
}: ScrollCarouselProps<T>) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    const container = scrollRef.current;
    container?.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("resize", checkScroll);
      container?.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollDistance = cardWidth + gap;
    container.scrollBy({
      left: direction === "left" ? -scrollDistance : scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      {showArrows && (
        <>
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label={arrowLabel.prev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gold text-black rounded-full p-2 shadow-lg hover:bg-gold-light transition-all duration-300 ${
              !canScrollLeft ? "opacity-30 cursor-not-allowed" : "opacity-0 group-hover:opacity-100"
            }`}
            disabled={!canScrollLeft}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label={arrowLabel.next}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gold text-black rounded-full p-2 shadow-lg hover:bg-gold-light transition-all duration-300 ${
              !canScrollRight ? "opacity-30 cursor-not-allowed" : "opacity-0 group-hover:opacity-100"
            }`}
            disabled={!canScrollRight}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item) => (
          <div key={item.id} className="snap-start shrink-0 w-72 sm:w-80">
            {renderItem(item)}
          </div>
        ))}
      </div>

      {/* Hide scrollbar with CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
