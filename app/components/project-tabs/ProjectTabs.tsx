"use client";

import { sanitizeHtml } from "@/app/helpers/sanitizeHtml";
import { useState } from "react";


interface Tab {
  key: string;
  label: string;
  body: string;
}

interface ProjectTabsProps {
  tabs: Tab[];
}

export function ProjectTabs({ tabs }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const currentTab = tabs.find((tab) => tab.key === activeTab);

  return (
    <div className="w-full">
      {/* Tabs header */}
      <div className="flex gap-6 border-b border-white/5 mb-10 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                pb-3 px-2 text-sm font-semibold whitespace-nowrap
                border-b-2 transition-colors
                ${
                  isActive
                    ? "border-brand-primary text-white"
                    : "border-transparent text-text-muted hover:text-white"
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      {currentTab && (
        <div
          className="prose prose-invert max-w-none text-text-muted"
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(currentTab.body),
          }}
        />
      )}
    </div>
  );
}