"use client";

import React from "react";

interface PropertiesSidebarProps {
  isOpen: boolean;
  selectedNode: any;
  updateNodeData: (data: any) => void;
  deleteSelectedNode: () => void;
}

export function PropertiesSidebar({ isOpen, selectedNode, updateNodeData, deleteSelectedNode }: PropertiesSidebarProps) {
  return (
    <aside
      className={`bg-[#111813] border-l border-border-dark flex flex-col z-10 shadow-xl transition-all duration-300 ease-in-out ${
        isOpen ? "w-80 translate-x-0" : "w-0 translate-x-full overflow-hidden border-none"
      }`}
    >
      <div className="p-4 border-b border-border-dark flex items-center justify-between min-w-[20rem]">
        <h3 className="text-sm font-bold text-white">Properties</h3>
        <div className="flex gap-2">
          <button
            onClick={deleteSelectedNode}
            disabled={!selectedNode}
            className="material-symbols-outlined text-slate-400 hover:text-red-400 cursor-pointer text-[18px] disabled:opacity-30 disabled:cursor-not-allowed"
            title="Delete Node"
          >
            delete
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-6 min-w-[20rem]">
        {!selectedNode ? (
          <div className="flex flex-col items-center justify-center h-full text-slate-500 space-y-3 opacity-60">
            <span className="material-symbols-outlined text-4xl">ads_click</span>
            <p className="text-sm text-center">
              Select a node on the canvas<br />to edit its properties
            </p>
          </div>
        ) : (
          <>
            {/* Active Node Header */}
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded ${selectedNode.data.iconBg} ${selectedNode.data.iconColor}`}>
                <span className="material-symbols-outlined text-[24px]">
                  {selectedNode.data.icon}
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{selectedNode.data.label}</h3>
                <p className="text-xs text-slate-500 font-mono">ID: {selectedNode.id}</p>
              </div>
            </div>

            {/* General Sublabel Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400">Description / Sublabel</label>
              <input
                type="text"
                value={selectedNode.data.sublabel || ""}
                onChange={(e) => updateNodeData({ sublabel: e.target.value })}
                className="w-full bg-[#1c2e24] border border-border-dark rounded-md p-2.5 text-sm text-white outline-none focus:border-primary"
              />
            </div>
            
            {/* Add more custom property logic here depending on selectedNode.data.label */}
          </>
        )}
      </div>
    </aside>
  );
}