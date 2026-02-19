interface TestimonialNavProps {
  onPrev: () => void;
  onNext: () => void;
}

export function TestimonialNav({ onPrev, onNext }: TestimonialNavProps) {
  return (
    <div className="flex gap-3 mt-6">
      <button
        onClick={onPrev}
        aria-label="Previous testimonial"
        className="w-10 h-10 rounded-full border-2 border-primary-500 text-primary-500 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={onNext}
        aria-label="Next testimonial"
        className="w-10 h-10 rounded-full border-2 border-primary-500 text-primary-500 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
