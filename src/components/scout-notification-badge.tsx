"use client";

export function ScoutNotificationBadge({ count }: { count: number }) {
  if (count === 0) return null;

  return (
    <span className="scout-pulse ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1.5 text-[10px] font-bold text-charcoal">
      {count > 9 ? "9+" : count}
    </span>
  );
}
