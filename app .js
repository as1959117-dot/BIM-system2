/* ============================================================
   app-github.js — Static Version (No Firebase)
   BIM Construction Tracking System
   Works on GitHub Pages with hardcoded data
   ============================================================ */

// ── GET ELEMENT ID FROM URL ──────────────────────────────────
const params = new URLSearchParams(window.location.search);
const elementId = params.get("id") || "B145";

// ── SAMPLE DATA (Version 1 - 0% Progress) ────────────────────
const elementsData = {
  B145: {
    elementId:"B145", elementType:"RC Beam", companyName:"Group 1 — BIM and Digital Construction",
    projectName:"Lakeside Arts: Pavilion Expansion", docRef:"LAP-BIM-STR-B145-DS-001",
    revision:"P0", issueStatus:"For Review", issueDate:"15 Mar 2026",
    preparedBy:"Group 1", designStandard:"EN 1992-1-1 (EC2) — EN ISO 19650",
    gridRef:"C/4 - C/6, Level 01", level:"Level 01 (+4.200 m)", span:"12.8228 m",
    orientation:"East to West", concreteGrade:"C35/45", fck:"35.00 MPa",
    steelGrade:"B500C", fyk:"500.00 MPa", width:"400 mm", depth:"1100 mm",
    concreteVolume:"5.99 m3", steelWeight:"1,206.99 kg", steelDensity:"201.36 kg/m3",
    formworkArea:"35.66 m2", bendingMoment:"1,470.14 kN.m", shearForce:"945.24 kN",
    bottomBars:"8 ∅25 (As = 3928 mm2)", topBars:"12 ∅25 (As = 5892 mm2)",
    hangerBars:"4 ∅10", stirrupsSupport:"4 legs ∅10 @ 125 mm",
    stirrupsSpan:"4 legs ∅10 @ 300 mm", deflectionActual:"20 mm",
    deflectionAllow:"51 mm", deflectionRatio:"0.39 - PASS",
    constructionStatus:"Not Started", currentActivity:"Design approved — awaiting site mobilization",
    progressPercent:"0", lastUpdated:"15 Mar 2026, 08:00", updatedBy:"BIM Manager - Group 1",
    slumpTest:"Not yet tested", cube7day:"Not yet tested", cube28day:"Not yet tested",
    testLab:"UKAS-accredited laboratory, Nottingham (awaiting samples)",
    cubeSamples:"Not yet taken", qaApprovalStatus:"Awaiting construction commencement",
    revitElementId:"Beam - 145 (LAP-STR-L01)", bimFile:"Expansion after editing (Recovered).RTD",
    modelSyncStatus:"Up to date", lastSynced:"15 Mar 2026, 08:00",
    structuralSoftware:"Robot Structural Analysis 2026",
    costTotal:"4,864.76", costNote:"BCIS East Midlands Q1 2026. Excludes prelims, OH and P.",
    carbonDesignTotal:"4,775.88", carbonActualTotal:"0.00",
    carbonComparison:"Design estimate completed. Actual carbon will be tracked during construction from material delivery tickets and mill certificates.",
    costItems:[
      {desc:"Ready-Mix Concrete C35/45 — Tarmac, Nottingham", qty:"5.99", unit:"m3", supply:"118.00/m3", labour:"38.00/m3", total:"933.44"},
      {desc:"Steel Reinforcement B500C — A. Steadman and Son", qty:"1,206.99", unit:"kg", supply:"0.95/kg", labour:"0.48/kg", total:"1,726.00"},
      {desc:"Formwork Supply, Erect and Strike — Alsford Timber", qty:"35.66", unit:"m2", supply:"32.00/m2", labour:"19.00/m2", total:"1,818.66"},
      {desc:"Concrete Testing and QA — UKAS lab, Nottingham", qty:"1", unit:"item", supply:"155.00", labour:"—", total:"155.00"},
      {desc:"Site Management and Supervision — CITB levy 5%", qty:"—", unit:"%", supply:"5%", labour:"—", total:"231.66"},
    ],
    carbonDesign:[
      {material:"Concrete C35/45", qty:"5.99", unit:"m3", factor:"310 kgCO2e/m3", total:"1,856.90"},
      {material:"Steel B500C (rebar)", qty:"1,206.99", unit:"kg", factor:"1.99 kgCO2e/kg", total:"2,401.91"},
      {material:"Formwork (plywood)", qty:"35.66", unit:"m2", factor:"14.5 kgCO2e/m2", total:"517.07"},
    ],
    carbonActual:[
      {material:"Concrete C35/45", qty:"0.00", unit:"m3", factor:"295 kgCO2e/m3", total:"0.00"},
      {material:"Steel B500C (rebar)", qty:"0.00", unit:"kg", factor:"1.85 kgCO2e/kg", total:"0.00"},
      {material:"Formwork (plywood)", qty:"0.00", unit:"m2", factor:"13.2 kgCO2e/m2", total:"0.00"},
    ],
    phases:[
      {num:"01", phase:"Substructure and Setting Out", description:"Grid lines C/4 to C/6 to be confirmed against datum.", standard:"BS 5606", approvedBy:"—", date:"Not started", status:"Pending"},
      {num:"02", phase:"Formwork Design and Erection", description:"Formwork to be designed for full hydrostatic pressure.", standard:"BS EN 13670", approvedBy:"—", date:"Not started", status:"Pending"},
      {num:"03", phase:"Rebar Delivery and Inspection", description:"B500C steel to be delivered with mill certificates.", standard:"BS 4449:2005", approvedBy:"—", date:"Not started", status:"Pending"},
      {num:"04", phase:"Reinforcement Fixing", description:"All bars and stirrups to be placed per IFC drawings.", standard:"EN 1992-1-1", approvedBy:"—", date:"Not started", status:"Pending"},
      {num:"05", phase:"Pre-Pour Inspection", description:"Full inspection required before concrete pour.", standard:"BS EN 13670", approvedBy:"—", date:"Not started", status:"Pending"},
      {num:"06", phase:"Concrete Supply and Pour", description:"C35/45 to be placed. Slump test required.", standard:"BS EN 206", approvedBy:"—", date:"Not started", status:"Pending"},
      {num:"07", phase:"Concrete Testing and QA", description:"4 cube samples to UKAS lab. Awaiting 28-day result.", standard:"BS EN 12390", approvedBy:"—", date:"Not started", status:"Pending"},
      {num:"08", phase:"Curing", description:"Polythene sheeting to be applied. Min 7 days required.", standard:"BS EN 13670 S8", approvedBy:"—", date:"Not started", status:"Pending"},
      {num:"09", phase:"Formwork Striking", description:"Props to remain until 25 MPa confirmed.", standard:"EN 1992-1-1 S7.4", approvedBy:"—", date:"Not started", status:"Pending"},
      {num:"10", phase:"Final Inspection and Handover", description:"As-built to be checked against BIM. Revit model to be updated.", standard:"ISO 19650", approvedBy:"—", date:"Not started", status:"Pending"},
    ],
    constructionLog:[],
    deliveries:[],
    issues:[],
  },
  C12: {
    elementId:"C12", elementType:"RC Column", companyName:"Group 1 — BIM and Digital Construction",
    projectName:"Lakeside Arts: Pavilion Expansion", docRef:"LAP-BIM-STR-C12-DS-001",
    revision:"P1", issueStatus:"Issued for Construction", issueDate:"15 Apr 2026",
    preparedBy:"Group 1", designStandard:"EN 1992-1-1 (EC2) — EN ISO 19650",
    gridRef:"C/4, Level 00 to Level 01", level:"Level 00 (Ground) to Level 01 (+4.200 m)",
    span:"4.200 m (height)", orientation:"Vertical", concreteGrade:"C35/45",
    fck:"35.00 MPa", steelGrade:"B500C", fyk:"500.00 MPa",
    width:"400 mm", depth:"400 mm", concreteVolume:"0.67 m3",
    steelWeight:"98.40 kg", steelDensity:"146.87 kg/m3",
    formworkArea:"6.72 m2", bendingMoment:"—", shearForce:"—",
    bottomBars:"8 ∅16 (longitudinal)", topBars:"8 ∅16 (longitudinal)",
    hangerBars:"—", stirrupsSupport:"∅8 links @ 200 mm",
    stirrupsSpan:"∅8 links @ 300 mm",
    constructionStatus:"Completed", currentActivity:"Column cast and cured — above element under construction",
    progressPercent:"100", lastUpdated:"10 Apr 2026, 10:30", updatedBy:"Site Engineer - Group 1",
    slumpTest:"75 mm (S3 class) — Pass", cube7day:"27.1 MPa",
    cube28day:"38.4 MPa — Pass", testLab:"UKAS-accredited laboratory, Nottingham",
    cubeSamples:"4 cubes", qaApprovalStatus:"Approved — 28-day result confirmed",
    phases:[
      {num:"01", phase:"Setting Out", description:"Grid confirmed.", standard:"BS 5606", approvedBy:"Site Eng.", date:"18 Mar 2026", status:"Approved"},
      {num:"02", phase:"Formwork", description:"Formwork erected.", standard:"BS EN 13670", approvedBy:"Temp Eng.", date:"25 Mar 2026", status:"Approved"},
      {num:"03", phase:"Concrete Pour", description:"Concrete placed.", standard:"BS EN 206", approvedBy:"Site Eng.", date:"02 Apr 2026", status:"Approved"},
      {num:"04", phase:"Curing", description:"Curing completed.", standard:"BS EN 13670", approvedBy:"Site Eng.", date:"10 Apr 2026", status:"Approved"},
      {num:"05", phase:"Striking", description:"Formwork removed.", standard:"EN 1992-1-1", approvedBy:"Lead Eng.", date:"10 Apr 2026", status:"Approved"},
    ],
    constructionLog:[],
    deliveries:[],
    issues:[],
  },
  S05: {
    elementId:"S05", elementType:"RC Slab", companyName:"Group 1 — BIM and Digital Construction",
    projectName:"Lakeside Arts: Pavilion Expansion", docRef:"LAP-BIM-STR-S05-DS-001",
    revision:"P0", issueStatus:"For Review", issueDate:"22 Apr 2026",
    preparedBy:"Group 1", designStandard:"EN 1992-1-1 (EC2) — EN ISO 19650",
    gridRef:"C/4 to C/6 — D/4 to D/6, Level 01", level:"Level 01 (+4.200 m)",
    span:"5.50 x 4.80 m", orientation:"Horizontal", concreteGrade:"C32/40",
    fck:"32.00 MPa", steelGrade:"B500B", fyk:"500.00 MPa",
    constructionStatus:"Not started — awaiting beam curing completion",
    currentActivity:"Waiting for Beam 145 and Column C12 curing sign-off",
    progressPercent:"0", lastUpdated:"22 Apr 2026, 09:00", updatedBy:"BIM Manager - Group 1",
    phases:[
      {num:"01", phase:"Rebar Preparation", description:"Slab rebar to be prepared.", standard:"BS 4449", approvedBy:"—", date:"Not started", status:"Pending"},
      {num:"02", phase:"Concrete Pour", description:"Slab concrete to be placed.", standard:"BS EN 206", approvedBy:"—", date:"Not started", status:"Pending"},
    ],
    constructionLog:[],
    deliveries:[],
    issues:[],
  }
};

// ── MAIN INITIALIZATION ──────────────────────────────────────
window.addEventListener("DOMContentLoaded", () => {
  if (!elementId) {
    showError("No element ID found in URL. Please use index.html?id=B145");
    return;
  }

  // Get data for this element
  const data = elementsData[elementId];
  if (!data) {
    showError(`Element "${elementId}" not found. Try B145, C12, or S05.`);
    return;
  }

  // Generate QR code for this page URL
  generateQR(data);

  // Display the data
  populatePage(data);
  hideLoading();
});

// ── GENERATE QR CODE WITH DYNAMIC PROGRESS ────────────────────
function generateQR(data) {
  const qrEl = document.getElementById("qr-img");
  if (!qrEl) return;

  const base = window.location.href.split("?")[0];
  const url  = base + "?id=" + (elementId || "B145");
  const progress = parseInt(data?.progressPercent) || 0;
  const status = data?.constructionStatus || "Not Started";

  qrEl.innerHTML = "";

  const container = document.createElement("div");
  container.style.cssText = "text-align:center;";

  const img = document.createElement("img");
  img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACKElEQVRoge2ZUXLDIBBD92YcDY7GUXKTLSvtEscmM5l+C6eY1C8/qoToxOy30R1j9PVal61pWnOPCYsYL2EPbEC9wFLE+EUgMRpuTdgB617KOtbQdLYJeWcoLew7VtqGLVv6UdgvmEHfpfKEG+FMYd+xHefUePAp9sFT6oUBcy871hVRrotPhT2wGoFjJ8SKzUtxP4awK5DCwp7LoMhzmLI+8BJ2xxKoPHf2LjxpOK5wJeyO+ZvCy9gcYcu9egl7YINBBu8A6UarY956CXtiV4YfYoxj4m02YSfMuQMW6RVmzMLOmKUXiXNKpAokbCnsgY19LO50KGvXtsLWhD0wVC2PK8jvejtZGus5RpvCDth25ajyTTdamhO4sBtmewsc6dAo3NoKG+6Ms7D/YG+JsVXCxPk8/gq+XSzsA4OmGXx6OQ27S2YKO2Jol+67neHEjP3VvcIuWGfDDLPUOP77QD233dJN2AGrRIfIWGWSoe7FlcI+sLTjePfIfAtb50FhB2zAjyl0j29jKW6ealzYCQOEyrXsEhYHpS1fCntgbBBom9ac8GKeWMgJe2AwZlkyVqmqo3xZv8LuWA2eWnIbzNqlNU3YAUOS0R74iVA3aAqWu+Dl21hhhY0tLrl1zAtF6U0jbcKeGOMMmRHrnjHOOIfEL2FfsdQ2Zsjr2SKxFvYdg6KDPq26zTwLO2EZ52yPWGLro7jNb9ugsFt91OijlS+9UGH/xX4bf5z2Q3enjvVCAAAAAElFTkSuQmCC";
  img.alt = "QR Code — " + (elementId || "element") + " — " + progress + "% complete";
  img.style.cssText = "width:120px;height:120px;display:block;border:2px solid #1a3a6b;padding:4px;background:#fff;margin:0 auto;";

  img.onerror = function() {
    img.style.cssText = "display:none;";
    const fallback = document.createElement("div");
    fallback.style.cssText = "width:120px;height:120px;border:2px solid #1a3a6b;display:flex;align-items:center;justify-content:center;font-size:8px;color:#888;text-align:center;padding:4px;word-break:break-all;margin:0 auto;background:#f9f9f9;";
    fallback.textContent = url;
    container.appendChild(fallback);
  };

  container.appendChild(img);

  const statusLabel = document.createElement("div");
  statusLabel.style.cssText = "margin-top:8px;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;color:#1a3a6b;";
  statusLabel.innerHTML = `<span style="display:block;font-size:13px;">${elementId || "Element"}</span>
    <span style="display:block;color:#2356a8;font-size:12px;margin-top:2px;">${progress}% Complete</span>
    <span style="display:block;color:#666;font-size:10px;margin-top:2px;font-style:italic;">${status}</span>`;

  container.appendChild(statusLabel);
  qrEl.appendChild(container);
}

// ── POPULATE PAGE WITH ELEMENT DATA ─────────────────────────
function populatePage(d) {
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val || "—";
  };

  // Header
  document.title = `${d.elementId || elementId} — ${d.projectName || "BIM Data Sheet"}`;
  set("hdr-company",   d.companyName   || "—");
  set("hdr-project",   d.projectName   || "—");
  set("hdr-docref",    d.docRef        || "—");
  set("hdr-rev",       d.revision      || "—");
  set("hdr-status",    d.issueStatus   || "—");
  set("title-element", `${d.elementType || "Element"} ${d.elementId || elementId}`);
  set("title-sub",     `${d.projectName || ""} — ${d.designStandard || "EN 1992-1-1 (EC2)"}`);
  set("title-date",    `Prepared by: ${d.preparedBy || "—"} — Date: ${d.issueDate || "—"}`);

  // Meta row
  set("meta-project",  d.projectName   || "—");
  set("meta-id",       d.elementId     || elementId);
  set("meta-grid",     d.gridRef       || "—");
  set("meta-span",     d.span          || "—");

  // Live status
  set("ls-status",     d.constructionStatus  || "—");
  set("ls-activity",   d.currentActivity     || "—");
  set("ls-updated",    d.lastUpdated         || "—");
  set("ls-updatedby",  d.updatedBy           || "—");

  const progress = parseInt(d.progressPercent) || 0;
  const progFill = document.getElementById("prog-fill");
  const progPct  = document.getElementById("prog-pct");
  if (progFill) progFill.style.width = progress + "%";
  if (progPct)  progPct.textContent  = `${progress}% Complete`;

  const lsStatusEl = document.getElementById("ls-status");
  if (lsStatusEl) {
    lsStatusEl.className = "ls-val";
    const s = (d.constructionStatus || "").toLowerCase();
    if (s.includes("complete") || s.includes("approved")) lsStatusEl.classList.add("ok");
    else if (s.includes("hold") || s.includes("stop"))    lsStatusEl.classList.add("onhold");
    else                                                   lsStatusEl.classList.add("pending");
  }

  // Technical data
  set("td-concrete",    d.concreteGrade    || "—");
  set("td-fck",         d.fck              || "—");
  set("td-steel",       d.steelGrade       || "—");
  set("td-fyk",         d.fyk              || "—");
  set("td-width",       d.width            || "—");
  set("td-depth",       d.depth            || "—");
  set("td-spanlen",     d.span             || "—");
  set("td-volume",      d.concreteVolume   || "—");
  set("td-steelwt",     d.steelWeight      || "—");
  set("td-density",     d.steelDensity     || "—");
  set("td-formwork",    d.formworkArea     || "—");
  set("td-moment",      d.bendingMoment    || "—");
  set("td-shear",       d.shearForce       || "—");
  set("td-bottombar",   d.bottomBars       || "—");
  set("td-topbar",      d.topBars          || "—");
  set("td-hangers",     d.hangerBars       || "—");
  set("td-stir-sup",    d.stirrupsSupport  || "—");
  set("td-stir-span",   d.stirrupsSpan     || "—");
  set("td-deflection",  d.deflectionActual || "—");
  set("td-defl-allow",  d.deflectionAllow  || "—");
  set("td-defl-ratio",  d.deflectionRatio  || "—");

  // QA
  set("qa-slump",       d.slumpTest        || "—");
  set("qa-7day",        d.cube7day         || "—");
  set("qa-28day",       d.cube28day        || "—");
  set("qa-lab",         d.testLab          || "—");
  set("qa-samples",     d.cubeSamples      || "—");
  set("qa-status",      d.qaApprovalStatus || "—");

  // Cost table
  buildCostTable(d);
  buildCarbonTables(d);
  buildPhaseTable(d.phases || []);
}

function buildCostTable(d) {
  const tbody = document.getElementById("cost-tbody");
  if (!tbody) return;
  const items = d.costItems || [];
  tbody.innerHTML = items.map(r => `
    <tr>
      <td>${r.desc}</td>
      <td style="text-align:center">${r.qty}</td>
      <td style="text-align:center">${r.unit}</td>
      <td style="text-align:center">${r.supply}</td>
      <td style="text-align:center">${r.labour}</td>
      <td style="text-align:center"><b>${r.total}</b></td>
    </tr>`).join("");

  const ctEl = document.getElementById("cost-total");
  if (ctEl) ctEl.textContent = d.costTotal || "—";
}

function buildCarbonTables(d) {
  const tbA = document.getElementById("carbon-a-tbody");
  if (tbA) {
    const rows = d.carbonDesign || [];
    tbA.innerHTML = rows.map(r => `
      <tr>
        <td>${r.material}</td>
        <td style="text-align:center">${r.qty}</td>
        <td style="text-align:center">${r.unit}</td>
        <td style="text-align:center">${r.factor}</td>
        <td style="text-align:center">${r.total}</td>
      </tr>`).join("");
    const totalA = document.getElementById("carbon-a-total");
    if (totalA) totalA.textContent = d.carbonDesignTotal || "—";
  }

  const tbB = document.getElementById("carbon-b-tbody");
  if (tbB) {
    const rows = d.carbonActual || [];
    tbB.innerHTML = rows.map(r => `
      <tr>
        <td>${r.material}</td>
        <td style="text-align:center">${r.qty}</td>
        <td style="text-align:center">${r.unit}</td>
        <td style="text-align:center">${r.factor}</td>
        <td style="text-align:center">${r.total}</td>
      </tr>`).join("");
    const totalB = document.getElementById("carbon-b-total");
    if (totalB) totalB.textContent = d.carbonActualTotal || "—";
  }

  const ccEl = document.getElementById("carbon-compare");
  if (ccEl) ccEl.textContent = d.carbonComparison || "—";
}

function buildPhaseTable(phases) {
  const tbody = document.getElementById("phase-tbody");
  if (!tbody) return;
  if (!phases.length) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:#888;font-style:italic;">No phase data available.</td></tr>`;
    return;
  }
  tbody.innerHTML = phases.map(p => {
    const cls = p.status === "Approved"   ? "val-ok"
              : p.status === "Pending"    ? "val-warn"
              : p.status === "On Hold"    ? "val-fail"
              : "val-blue";
    return `<tr>
      <td style="font-family:var(--font-mono);color:#888">${p.num}</td>
      <td><b>${p.phase}</b></td>
      <td>${p.description}</td>
      <td style="font-style:italic;color:#888">${p.standard}</td>
      <td>${p.approvedBy}</td>
      <td style="font-style:italic;color:#888">${p.date}</td>
      <td class="${cls}">${p.status}</td>
    </tr>`;
  }).join("");
}

// ── UI HELPERS ───────────────────────────────────────────────
function hideLoading() {
  const el = document.getElementById("loading-msg");
  if (el) el.style.display = "none";
  const main = document.getElementById("main-content");
  if (main) main.style.display = "block";
}

function showError(msg) {
  const el = document.getElementById("loading-msg");
  if (el) { el.textContent = msg; el.className = "error-msg"; }
}
