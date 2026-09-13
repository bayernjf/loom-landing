import { useState } from "react";

/**
 * Minimal interactive island: the final_id snapshot.
 * final_id = PWS + PCP + CSP + CSTP + CEP + CCR (six layer snapshots),
 * assembled only when every guard passes, exiting through E1.1 publishFCW.
 */
const LAYERS = [
  { key: "PWS", label: "Product atoms" },
  { key: "PCP", label: "Platform package" },
  { key: "CSP", label: "Strategy bundle" },
  { key: "CSTP", label: "Structure bundle" },
  { key: "CEP", label: "Expression bundle" },
  { key: "CCR", label: "Compliance clearance" },
] as const;

export default function GuardDemo() {
  const [n, setN] = useState(0);
  const done = n >= LAYERS.length;
  const finalId = LAYERS.slice(0, n)
    .map((l) => l.key)
    .join("+");

  return (
    <div className="guard">
      <div className="guard__layers">
        {LAYERS.map((l, i) => (
          <div key={l.key} className={i < n ? "guard__layer is-on" : "guard__layer"}>
            <span className="guard__key">{l.key}</span>
            <span className="guard__label">{l.label}</span>
          </div>
        ))}
      </div>

      <div className="guard__out">
        <div className="guard__readout">{done ? finalId : "· · ·"}</div>
        <div className="guard__exit">{done ? "E1.1 publishFCW →" : "gates pending…"}</div>
      </div>

      <button
        className="btn btn--primary guard__btn"
        onClick={() => setN((x) => (x >= LAYERS.length ? 0 : x + 1))}
      >
        {done ? "Reset" : `Assemble snapshot (${n}/${LAYERS.length})`}
      </button>
    </div>
  );
}
