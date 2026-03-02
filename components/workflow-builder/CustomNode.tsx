"use client";

import React from "react";
import { Handle, Position } from "@xyflow/react";

export const CustomNode = ({ data, selected }: { data: any; selected: boolean }) => {
  return (
    <div
      className={`w-70 rounded-xl border bg-[#162e1e]/90 backdrop-blur-md shadow-2xl transition-all ${
        selected
          ? "border-primary ring-1 ring-primary/50"
          : "border-border-dark"
      }`}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="w-3! h-3! bg-slate-500! border-2! border-[#111813]!"
      />

      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${data.iconBg} ${data.iconColor}`}
            >
              <span className="material-symbols-outlined text-[18px]">
                {data.icon}
              </span>
            </div>
            <div className="font-bold text-white text-sm">{data.label}</div>
          </div>
          <span className="material-symbols-outlined text-slate-500 text-[18px]">
            more_horiz
          </span>
        </div>

        <div className="text-xs text-slate-400 font-mono bg-black/20 p-2 rounded border border-border-dark whitespace-pre-wrap">
          {data.sublabel}
        </div>

        {data.badge && (
          <div className="mt-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">
              {data.badge}
            </span>
          </div>
        )}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="w-3! h-3! bg-primary! border-2! border-[#111813]!"
      />
    </div>
  );
};

// Export the nodeTypes object here so it can be safely imported into the main page
export const nodeTypes = {
  customNode: CustomNode,
};