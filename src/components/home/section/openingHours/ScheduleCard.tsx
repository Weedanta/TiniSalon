import type { OpeningHour } from "@/components/home/data/openingHours";
import { SECTION_CONTENT } from "@/components/home/data/openingHours";
import { ScheduleRow } from "./ScheduleRow";

interface ScheduleCardProps {
  hours: OpeningHour[];
  todayIndex: number;
  compact?: boolean;
}

export function ScheduleCard({
  hours,
  todayIndex,
  compact,
}: ScheduleCardProps) {
  const px = compact ? "px-5 py-3.5" : "px-6 py-4";
  const textSize = compact ? "text-base" : "text-lg";

  return (
    <div className="bg-linear-to-br from-primary-50 to-white rounded-2xl border border-primary-100 shadow-sm overflow-hidden">
      <div className={`bg-primary-500 ${px}`}>
        <p
          className={`text-white font-semibold ${textSize} text-center tracking-wide`}
        >
          {SECTION_CONTENT.cardTitle}
        </p>
      </div>
      <ul className="divide-y divide-primary-100/60">
        {hours.map((item, index) => (
          <ScheduleRow
            key={item.day}
            item={item}
            index={index}
            isToday={item.dayIndex === todayIndex}
            compact={compact}
          />
        ))}
      </ul>
    </div>
  );
}
