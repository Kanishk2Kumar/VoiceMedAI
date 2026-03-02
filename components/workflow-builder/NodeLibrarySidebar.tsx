"use client";

import React from "react";

export function NodeLibrarySidebar({ isOpen }: { isOpen: boolean }) {
  // Drag handler
  const onDragStart = (event: React.DragEvent, nodeData: any) => {
    event.dataTransfer.setData("application/reactflow", JSON.stringify(nodeData));
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside
      className={`bg-[#111813] border-r border-border-dark flex flex-col z-10 shadow-xl transition-all duration-300 ease-in-out ${
        isOpen ? "w-72 translate-x-0" : "w-0 -translate-x-full overflow-hidden border-none"
      }`}
    >
      <div className="p-4 border-b border-border-dark min-w-[18rem]">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
          Node Library
        </h3>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-500 text-[18px]">
            search
          </span>
          <input
            type="text"
            placeholder="Search nodes..."
            className="w-full bg-[#1c2e24] border border-border-dark rounded p-2 pl-9 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 min-w-[18rem]">
        {/* Category: Voice & Input */}
        <div>
          <h4 className="text-xs font-semibold text-slate-500 mb-3">Voice & Input</h4>
          <div className="space-y-2">
            <div
              onDragStart={(e) =>
                onDragStart(e, { label: "Inbound Call", sublabel: "Source: Undefined", icon: "call", iconBg: "bg-blue-900/30", iconColor: "text-blue-400", badge: "Active" })
              }
              draggable
              className="flex items-center gap-3 p-2.5 rounded-lg border border-border-dark bg-[#1c2e24] hover:border-primary/50 cursor-grab active:cursor-grabbing transition-colors"
            >
              <div className="p-1.5 rounded bg-blue-900/30 text-blue-400">
                <span className="material-symbols-outlined text-[18px]">call</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white">Inbound Call</div>
                <div className="text-[10px] text-slate-400">Twilio / Sip trunk</div>
              </div>
            </div>

            <div
              onDragStart={(e) =>
                onDragStart(e, { label: "Speech-to-Text", sublabel: "Language: Auto-detect", icon: "graphic_eq", iconBg: "bg-purple-900/30", iconColor: "text-purple-400" })
              }
              draggable
              className="flex items-center gap-3 p-2.5 rounded-lg border border-border-dark bg-[#1c2e24] hover:border-primary/50 cursor-grab active:cursor-grabbing transition-colors"
            >
              <div className="p-1.5 rounded bg-purple-900/30 text-purple-400">
                <span className="material-symbols-outlined text-[18px]">graphic_eq</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white">Speech-to-Text</div>
                <div className="text-[10px] text-slate-400">Deepgram / Whisper</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category: AI & Logic */}
        <div>
          <h4 className="text-xs font-semibold text-slate-500 mb-3">AI & Logic</h4>
          <div className="space-y-2">
            <div
              onDragStart={(e) =>
                onDragStart(e, { label: "LLM Chain", sublabel: "Model: GPT-4 Turbo", icon: "smart_toy", iconBg: "bg-emerald-900/30", iconColor: "text-emerald-400" })
              }
              draggable
              className="flex items-center gap-3 p-2.5 rounded-lg border border-primary/50 bg-[#1c2e24] cursor-grab active:cursor-grabbing relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
              <div className="p-1.5 rounded bg-emerald-900/30 text-emerald-400 ml-1">
                <span className="material-symbols-outlined text-[18px]">smart_toy</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white">LLM Chain</div>
                <div className="text-[10px] text-slate-400">GPT-4 / Claude 3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}