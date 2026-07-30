import { initGenetics } from './genetics.js';
import { initSecurity } from './security.js';

let biosphereAssets = [
    { name: "Tyrannosaurus Rex", type: "Apex Carnivore", id: "TR-01", status: "Optimal" },
    { name: "Velociraptor", type: "Pack Carnivore", id: "VEL-01 to 03", status: "Active" },
    { name: "Triceratops", type: "Herbivore", id: "TRI-01 to 05", status: "Grazing" },
    { name: "Brachiosaurus", type: "Sauropod", id: "BRA-01 to 08", status: "Resting" }
];

function writeLog(text) {
    const log = document.getElementById('logOutput');
    const time = new Date().toLocaleTimeString();
    log.textContent += `\n[${time}] ${text}`;
    log.scrollTop = log.scrollHeight;
}

function renderRoster() {
    const grid = document.getElementById('rosterGrid');
    if (!grid) return;
    grid.innerHTML = '';
    biosphereAssets.forEach(asset => {
        const card = document.createElement('div');
        card.className = `card ${asset.type.includes('Carnivore') ? 'carnivore' : ''}`;
        card.style.padding = "15px";
        card.style.gap = "6px";
        card.innerHTML = `
            <h3 style="margin: 0 0 5px 0;">${asset.name}</h3>
            <p style="margin: 0; font-size: 0.85rem;">Classification: <strong>${asset.type}</strong></p>
            <p style="margin: 0; font-size: 0.85rem;">Asset ID: ${asset.id}</p>
            <p style="margin: 0; font-size: 0.85rem;">Status: <span style="color: var(--neon-green);">${asset.status}</span></p>
        `;
        grid.appendChild(card);
    });
    const countEl = document.getElementById('assetCount');
    if (countEl) countEl.textContent = `Active Assets: ${biosphereAssets.length}`;
}

function switchTab(tabId, evt) {
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
    writeLog(`NAV: Switched view to ${tabId}`);
}

function feedSector(sectorName) {
    writeLog(`BIOSPHERE: Feeding sequence initiated for ${sectorName}.`);
}

function triggerAlarm() {
    writeLog("WARNING: Facility-wide security alert triggered!");
    document.body.style.boxShadow = "inset 0 0 50px rgba(255, 51, 102, 0.4)";
    setTimeout(() => { document.body.style.boxShadow = "none"; }, 1000);
}

// Bind methods globally for HTML listeners
window.switchTab = switchTab;
window.feedSector = feedSector;
window.triggerAlarm = triggerAlarm;
window.addAsset = (asset) => {
    biosphereAssets.push(asset);
    renderRoster();
};

// Initialize Submodules
document.addEventListener('DOMContentLoaded', () => {
    renderRoster();
    initSecurity(writeLog);
    initGenetics(writeLog);
});
