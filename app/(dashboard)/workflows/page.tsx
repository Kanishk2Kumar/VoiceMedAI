import React from 'react';

// Mock data for existing workflows
const existingWorkflows = [
  {
    id: 1,
    title: "Patient Intake V2",
    description: "Collects initial patient details, verifies insurance, and routes to appropriate department.",
    status: "Running",
    lastUpdated: "2 hours ago",
    icon: "medical_services",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-900/30",
  },
  {
    id: 2,
    title: "Appointment Set",
    description: "Schedules routine checkups, sends confirmations, and syncs directly with EHR calendar.",
    status: "Draft",
    lastUpdated: "1 day ago",
    icon: "calendar_month",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-900/30",
  },
  {
    id: 3,
    title: "Emergency Triage",
    description: "Assesses severe symptoms and routes critical calls directly to on-call nursing staff.",
    status: "Error",
    lastUpdated: "3 days ago",
    icon: "emergency",
    iconColor: "text-red-400",
    iconBg: "bg-red-900/30",
  },
  {
    id: 4,
    title: "Billing Inquiry",
    description: "Handles common payment questions, balance checks, and connects to billing department if needed.",
    status: "Running",
    lastUpdated: "5 hours ago",
    icon: "receipt_long",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-900/30",
  },
  {
    id: 5,
    title: "Post-Discharge Follow-up",
    description: "Automated check-in calls 48 hours after patient discharge to monitor recovery and medication adherence.",
    status: "Running",
    lastUpdated: "1 week ago",
    icon: "healing",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-900/30",
  },
  {
    id: 6,
    title: "Prescription Refill",
    description: "Processes routine pharmacy refill requests and verifies active prescriptions with providers.",
    status: "Draft",
    lastUpdated: "2 weeks ago",
    icon: "medication",
    iconColor: "text-teal-400",
    iconBg: "bg-teal-900/30",
  },
];

const Workflows = () => {
  return (
    <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background-dark">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border-dark bg-[#111813]">
        {/* Left: Title */}
        <div className="flex items-center gap-4 w-1/4">
          <button className="md:hidden p-2 text-white rounded-lg hover:bg-surface-dark">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Workflows
          </h2>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 flex justify-center w-2/4">
          <div className="relative group w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400">search</span>
            </div>
            <input
              className="block w-full pl-10 pr-3 py-2 border border-border-dark rounded-lg leading-5 bg-surface-dark text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors"
              placeholder="Search workflows by name or ID..."
              type="text"
            />
          </div>
        </div>

        {/* Right: Create Button */}
        <div className="flex items-center justify-end gap-4 w-1/4">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg hover:bg-[#0e9f6e] transition-colors shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Create Workflow
          </button>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        
        {/* Page Header Info */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white">Your Workflows</h3>
          <p className="text-sm text-slate-400 mt-1">Manage, edit, and monitor your conversational AI routes.</p>
        </div>

        {/* Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {existingWorkflows.map((workflow) => (
            <div 
              key={workflow.id}
              className="bg-surface-dark rounded-xl border border-border-dark shadow-sm p-6 flex flex-col hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer group"
            >
              {/* Card Header (Icon + Badge) */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${workflow.iconBg} ${workflow.iconColor}`}>
                  <span className="material-symbols-outlined text-2xl">{workflow.icon}</span>
                </div>
                
                {/* Status Badge */}
                {workflow.status === "Running" && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-900/30 text-emerald-400 border border-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                    Running
                  </span>
                )}
                {workflow.status === "Draft" && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300 border border-slate-600">
                    Draft
                  </span>
                )}
                {workflow.status === "Error" && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-900/30 text-red-400 border border-red-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mr-1.5"></span>
                    Error
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="mb-6 flex-1">
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {workflow.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                  {workflow.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border-dark">
                <span className="text-xs text-slate-500">
                  Updated {workflow.lastUpdated}
                </span>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-[#28392e] transition-colors" title="Edit">
                    <span className="material-symbols-outlined text-[20px]">edit</span>
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-[#28392e] transition-colors" title="Options">
                    <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Workflows;