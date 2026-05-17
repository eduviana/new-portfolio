// // "use client";

// // import { useState } from "react";
// // import { SafeHtml } from "../safe-html/SafeHtml";

// // interface Tab {
// //   key: string;
// //   label: string;
// //   body: string;
// // }

// // interface ProjectTabsProps {
// //   tabs: Tab[];
// // }

// // export function ProjectTabs({ tabs }: ProjectTabsProps) {
// //   const [activeTab, setActiveTab] = useState(tabs[0].key);

// //   const currentTab = tabs.find((tab) => tab.key === activeTab);

// //   return (
// //     <div className="w-full">
// //       {/* Tabs header */}
// //       <div className="flex gap-6 border-b border-white/5 mb-10 overflow-x-auto">
// //         {tabs.map((tab) => {
// //           const isActive = tab.key === activeTab;

// //           return (
// //             <button
// //               key={tab.key}
// //               onClick={() => setActiveTab(tab.key)}
// //               className={`
// //                 pb-3 px-2 text-sm font-semibold whitespace-nowrap
// //                 border-b-2 transition-colors
// //                 ${
// //                   isActive
// //                     ? "border-brand-primary text-white"
// //                     : "border-transparent text-text-muted hover:text-white"
// //                 }
// //               `}
// //             >
// //               {tab.label}
// //             </button>
// //           );
// //         })}
// //       </div>

// //       {/* Tab content */}
// //       {currentTab && <SafeHtml html={currentTab.body} />}
// //     </div>
// //   );
// // }

"use client";

import { useState } from "react";
import { SafeHtml } from "../safe-html/SafeHtml";

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
      {/* Tabs */}
      <div className="-mx-8 mb-10 border-b-2 border-white/5 px-8">
        {" "}
        <div className="flex justify-center gap-4 overflow-x-auto p-6">
          {" "}
          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  relative rounded-xl px-5 py-3
                  text-sm md:text-base font-semibold
                  whitespace-nowrap transition-all duration-300
                  ${
                    isActive
                      ? `
                        bg-brand-primary/15
                        text-white
                        shadow-[0_0_20px_rgba(255,255,255,0.03)]
                        border border-brand-primary/30
                      `
                      : `
                        text-text-muted
                        border border-transparent
                        hover:text-white
                        hover:bg-white/[0.03]
                      `
                  }
                `}
              >
                {tab.label}

                {/* Active indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-[4px] w-10 -translate-x-1/2 rounded-full bg-brand-primary" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div key={activeTab} className="fade-in-up">
        {currentTab && <SafeHtml html={currentTab.body} />}
      </div>
    </div>
  );
}
