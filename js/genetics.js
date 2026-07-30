let labState = {
    amberPoints: 50,
    genomes: {
        "Stegosaurus": { integrity: 40, barId: "stegGenome", fillId: "stegGenomeBar" },
        "Dilophosaurus": { integrity: 20, barId: "diloGenome", fillId: "diloGenomeBar" }
    }
};

export function initGenetics(writeLog) {
    // Manual Amber Extraction Action
    window.mineAmber = function() {
        labState.amberPoints += 25;
        updateAmberDisplay();
        
        const statusEl = document.getElementById('extractionStatus');
        statusEl.textContent = "EXTRACTING +25🧬";
        statusEl.style.color = "var(--neon-green)";
        
        writeLog(`LAB EXTRACTION: Laser beam vaporized amber resin node. Yielded +25 extraction points.`);
        
        setTimeout(() => {
            statusEl.textContent = "SYSTEM READY";
            statusEl.style.color = "var(--neon-cyan)";
        }, 1500);
    };

    window.spliceGenome = function(dinoName) {
        let dino = labState.genomes[dinoName];
        if (!dino) return;

        if (labState.amberPoints < 30) {
            writeLog(`LAB ERROR: Insufficient Amber reserves (${labState.amberPoints}/30). Use the Laser Extraction Bay above!`);
            return;
        }

        if (dino.integrity >= 100) {
            writeLog(`LAB: ${dinoName} genome strand is already at 100% maximum purity.`);
            return;
        }

        labState.amberPoints -= 30;
        dino.integrity = Math.min(100, dino.integrity + 20);
        
        document.getElementById(dino.barId).textContent = `${dino.integrity}%`;
        document.getElementById(dino.fillId).style.width = `${dino.integrity}%`;
        
        updateAmberDisplay();
        writeLog(`GENETICS: Spliced genetic code into ${dinoName} matrix. Viability now at ${dino.integrity}%.`);
    };

    window.startIncubation = function(dinoName, dinoType, barId, textId, statusId) {
        let dino = labState.genomes[dinoName];
        if (dino.integrity < 100) {
            writeLog(`ABORT: Cannot incubate ${dinoName}. Genome integrity incomplete (${dino.integrity}%). Splice more DNA!`);
            return;
        }

        const bar = document.getElementById(barId);
        const textEl = document.getElementById(textId);
        const statusEl = document.getElementById(statusId);
        
        if (!bar) return;
        
        if (bar.style.width && parseInt(bar.style.width) > 0 && parseInt(bar.style.width) < 100) {
            writeLog(`LAB: Incubation chamber for ${dinoName} is already active.`);
            return;
        }

        writeLog(`LAB: Incubation sequence initiated for ${dinoName}. Pressurizing synthetic womb...`);
        statusEl.textContent = "TANK: SYNTHESIZING";
        statusEl.style.color = "var(--neon-green)";
        statusEl.style.borderColor = "var(--neon-green)";

        let progress = 0;
        const interval = setInterval(() => {
            progress += 20;
            bar.style.width = progress + '%';
            textEl.textContent = progress + '%';
            
            if (progress >= 100) {
                clearInterval(interval);
                statusEl.textContent = "TANK: MATURED";
                statusEl.style.color = "var(--neon-cyan)";
                statusEl.style.borderColor = "var(--neon-cyan)";
                
                const newId = dinoName.substring(0, 3).toUpperCase() + '-' + Math.floor(10 + Math.random() * 90);
                
                if (window.addAsset) {
                    window.addAsset({ name: dinoName, type: dinoType, id: newId, status: "Healthy / Secure" });
                }
                
                writeLog(`SUCCESS: ${dinoName} specimen (${newId}) successfully hatched and logged to Biosphere Roster!`);
            }
        }, 800);
    };
}

function updateAmberDisplay() {
    const el = document.getElementById('amberCount');
    if (el) el.textContent = labState.amberPoints;
}
