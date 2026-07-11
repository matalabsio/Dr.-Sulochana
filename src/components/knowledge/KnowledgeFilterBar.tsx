"use client";

import type { KnowledgeFilter } from "@/content/knowledgeHub";

type FilterLabel = { id: KnowledgeFilter; label: string };

type KnowledgeFilterBarProps = {
  filters: FilterLabel[];
  activeFilter: KnowledgeFilter;
  onFilterChange: (filter: KnowledgeFilter) => void;
  id?: string;
};

export default function KnowledgeFilterBar({
  filters,
  activeFilter,
  onFilterChange,
  id = "knowledge-filters",
}: KnowledgeFilterBarProps) {
  return (
    <div
      id={id}
      className="knowledge-hub-filters"
      role="tablist"
      aria-label="Filter articles by topic"
    >
      {filters.map(({ id: filterId, label }) => {
        const isActive = activeFilter === filterId;
        return (
          <button
            key={filterId}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`knowledge-hub-filter${isActive ? " knowledge-hub-filter--active" : ""}`}
            onClick={() => onFilterChange(filterId)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
