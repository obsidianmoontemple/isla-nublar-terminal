let labState = {
    amberPoints: 120,
    genomes: {
        "Stegosaurus": { integrity: 40, barId: "stegGenome", fillId: "stegGenomeBar" },
        "Dilophosaurus": { integrity: 20, barId: "diloGenome", fillId: "diloGenomeBar" }
    }
};

export function initGenetics(writeLog) {
    // Generate passive Amber points over time
    setInterval(() => {
        labState.amberPoints += 10;
        updateAmberDisplay();
    }, 3000);

    window.spliceGenome = function(dinoName) {
        let dino = labState.genomes[dinoName];
        if (!dino) return;

        if (labState.amberPoints < 30) {
            writeLog(`LAB ERROR: Insufficient Amber reserves (${labState.amberPoints}/30). Awaiting extraction cycle.`);
            return;
        }

        if (dino.integrity >= 100) {
            writeLog(`LAB: ${dinoName} genome strand is already at 100% maximum genetic purity.`);
            return;
        }

        labState.amberPoints -= 30;
        dino.integrity = Math.min(100, dino.integrity + 20);
        
        document.getElementById(dino.barId).textContent = `${dino.integrity}%`;
        document.getElementById(dino.fillId).style.width = `${dino.integrity}%`;
        
        updateAmberDisplay();
        writeLog(`GENETICS: Cleared mutation gaps in ${dinoName} strand. Viability locked at ${dino.integrity}%.`);
    };

    window.startIncubation = function(dinoName, dinoType, barId, textId, statusId) {
        let dino = labState.genomes[dinoName];
        if (dino.integrity < 100) {
            writeLog(`ABORT: Cannot incubate ${dinoName}. Genome has unmapped gaps (${dino.integrity}%). Splice required.`);
            return;
        }

        const bar = document.getElementById(barId);
        const textEl = document.getElementById(textId);
        const statusEl = document.getElementById(statusId);
        const powerStatus = document.getElementById('labPowerStatus');
        
        if (!bar) return;
        
        if (bar.style.width && parseInt(bar.style.width) > 0 && parseInt(bar.style.width) < 100) {
            writeLog(`LAB: Embryo chamber for ${dinoName} is already active.`);
            return;
        }

        writeLog(`LAB: Incubation sequence initiated for ${dinoName}. Pressurizing amniotic tank...`);
        statusEl.textContent = "TANK: GROWING";
        statusEl.style.color = "var(--neon-green)";
        statusEl.style.borderColor = "var(--neon-green)";

        let progress = 0;
        const interval = setInterval(() => {
            // 20% chance of thermal fluctuation event
            if (Math.random() < 0.20 && progress < 80) {
                powerStatus.textContent = "⚠️ THERMAL FLUCTUATION";
                powerStatus.style.color = "var(--neon-alert)";
                statusEl.textContent = "TANK: STALLED";
                writeLog(`⚠️ LAB ALERT: Grid surge cooling down ${dinoName} incubator. Retrying synthesis...`);
                setTimeout(() => {
                    powerStatus.textContent = "THERMAL STABLE";
                    powerStatus.style.color = "var(--neon-green)";
                    statusEl.textContent = "TANK: GROWING";
                }, 1000);
                return; 
            }

            progress += 10;
            bar.style.width = progress + '%';
            textEl.textContent = progress + '%';
            
            if (progress >= 100) {
                clearInterval(interval);
                statusEl.textContent = "TANK: HATCHED";
                statusEl.style.color = "var(--neon-cyan)";
                statusEl.style.borderColor = "var(--neon-cyan)";
                
                const newId = dinoName.substring(0, 3).toUpperCase() + '-' + Math.floor(10 + Math.random() * 90);
                
                if (window.addAsset) {
                    window.addAsset({ name: dinoName, type: dinoType, id: newId, status: "Healthy / Secure" });
                }
                
                writeLog(`SUCCESS: ${dinoName} specimen (${newId}) successfully synthesized and moved to Biosphere Roster!`);
            }
        }, 1000);
    };
}

function updateAmberDisplay() {
    const el = document.getElementById('amberCount');
    if (el) el.textContent = labState.amberPoints;
}
