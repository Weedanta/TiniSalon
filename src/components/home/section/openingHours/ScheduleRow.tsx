import { motion } from "framer-motion";
import type { OpeningHour } from "@/components/home/data/openingHours";
import { SECTION_CONTENT } from "@/components/home/data/openingHours";

interface ScheduleRowProps {
  item: OpeningHour;
  index: number;
  isToday: boolean;
  compact?: boolean;
}

export function ScheduleRow({
  item,
  index,
  isToday,
  compact,
}: ScheduleRowProps) {
  const px = compact ? "px-5 py-3" : "px-6 py-3.5";
  const gap = compact ? "gap-2" : "gap-3";
  const badgeSize = compact ? "text-[9px] px-1.5" : "text-[10px] px-2";
  const textSize = compact ? "text-sm" : "text-sm lg:text-base";

  const highlight = isToday
    ? "bg-primary-500/10 border-l-4 border-l-primary-500"
    : "border-l-4 border-l-transparent";

  const Wrapper = compact ? "li" : motion.li;
  const wrapperProps = compact
    ? {}
    : {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.3, delay: 0.2 + index * 0.05 },
      };

  return (
    <Wrapper
      {...wrapperProps}
      className={`flex items-center justify-between ${px} transition-colors duration-200 ${highlight}`}
    >
      <div className={`flex items-center ${gap}`}>
        <span
          className={`${textSize} font-semibold ${isToday ? "text-primary-500" : "text-grey-700"}`}
        >
          {item.day}
        </span>
        {isToday && (
          <span
            className={`${badgeSize} font-bold uppercase tracking-wider text-primary-500 bg-primary-100 py-0.5 rounded-full`}
          >
            {SECTION_CONTENT.todayLabel}
          </span>
        )}
      </div>
      <span
        className={`${textSize} font-medium ${isToday ? "text-primary-500" : "text-grey-500"}`}
      >
        {item.hours}
      </span>
    </Wrapper>
  );
}
