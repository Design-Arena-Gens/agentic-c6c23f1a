"use client";

import { useState } from "react";

const PERSPECTIVES = [
  {
    name: "National SOC",
    summary:
      "Holistic situational awareness across regions, devices, and relying parties.",
    metrics: [
      { label: "Median Auth Time", value: "38 ms", trend: "⬈ +4%" },
      { label: "Rogue Device Blocks", value: "1,204", trend: "⬊ -12%" },
      { label: "Ledger Anchors", value: "98.7M", trend: "⬈ +8%" },
    ],
    notes: [
      "Anomaly policy auto-shifts high-risk flows into manual review queue in under 2 seconds.",
      "SIEM integration pushes enriched signals to threat intel feeds every 5 minutes.",
    ],
  },
  {
    name: "Enrollment Ops",
    summary:
      "Real-time monitoring of assisted enrollment centers with workforce insights.",
    metrics: [
      { label: "Active Kiosks", value: "412", trend: "⬈ +21" },
      { label: "Avg Onboarding", value: "6m 14s", trend: "⬊ -9%" },
      { label: "Pending Reviews", value: "67", trend: "⬊ -18%" },
    ],
    notes: [
      "Queue orchestration balances load across service centers via geo-aware routing.",
      "Document verification failures feed into retraining loop for AI classifiers nightly.",
    ],
  },
  {
    name: "Developer Platform",
    summary:
      "Self-serve developer onboarding for relying parties with automated guardrails.",
    metrics: [
      { label: "Active Integrations", value: "146", trend: "⬈ +5" },
      { label: "Average Latency", value: "42 ms", trend: "⬊ -6%" },
      { label: "Sandbox Calls", value: "2.5M", trend: "⬈ +11%" },
    ],
    notes: [
      "Integration linting enforces claim minimization and schema conformity.",
      "Every client secret rotates automatically every 30 days with zero downtime.",
    ],
  },
];

export function OperationsDashboard() {
  const [index, setIndex] = useState(0);
  const active = PERSPECTIVES[index];

  return (
    <section
      id="operations"
      className="overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl"
    >
      <div className="grid gap-8 p-8 md:grid-cols-[2.5fr_1.5fr] md:gap-6">
        <div>
          <div className="flex flex-wrap gap-2">
            {PERSPECTIVES.map((perspective, i) => (
              <button
                type="button"
                key={perspective.name}
                onClick={() => setIndex(i)}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                  i === index
                    ? "border-cyan-300/60 bg-cyan-500/20 text-cyan-100"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-200/40 hover:text-white"
                }`}
              >
                {perspective.name}
              </button>
            ))}
          </div>
          <div className="mt-6 space-y-6">
            <p className="text-lg text-slate-200">{active.summary}</p>
            <ul className="space-y-4 text-sm text-slate-300">
              {active.notes.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-cyan-400" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-2xl border border-cyan-300/20 bg-slate-900/50 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
            Key Telemetry
          </h3>
          <ul className="mt-4 space-y-4 text-sm">
            {active.metrics.map((metric) => (
              <li
                key={metric.label}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    {metric.label}
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {metric.value}
                  </p>
                </div>
                <span className="text-xs font-semibold text-cyan-200">
                  {metric.trend}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
