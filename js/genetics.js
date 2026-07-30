let labState = {
    amberPoints: 50,
    isExtracting: false,
    genomes: {
        "Stegosaurus": { integrity: 40, barId: "stegGenome", fillId: "stegGenomeBar" },
        "Dilophosaurus": { integrity: 20, barId: "diloGenome", fillId: "diloGenomeBar" }
    }
};

export function initGenetics(writeLog) {
    // Manual Laser Extraction Logic (No runaway timer)
    window.mineAmber = function() {
        if (labState.isExtracting) return;
        labState.isExtracting = true;

        const statusEl = document.getElementById('laserBeamStatus');
        const fillEl = document.getElementById('laserProgressFill');
        
        statusEl.textContent = "STATUS: LASER CUTTING";
        statusEl.style.color = "var(--neon-amber)";
        
        writeLog(`LAB EXTRACTION: High-frequency laser engaged on amber sample core...`);
        
        let progress = 0;
        const laserInterval = setInterval(() => {
            progress += 25;
            fillEl.style.width = progress + '%';

            if (progress >= 100) {
                clearInterval(laserInterval);
                labState.amberPoints += 25;
                updateAmberDisplay();

                statusEl.textContent = "STATUS: EXTRACTION COMPLETE";
                statusEl.style.color = "var(--neon-green)";
                writeLog(`SUCCESS: Amber core processed! Yielded +25 extraction points.`);

                setTimeout(() => {
                    fillEl.style.width = '0%';
                    statusEl.textContent = "STATUS: IDLE";
                    statusEl.style.color = "var(--neon-cyan)";
                    labState.isExtracting = false;
                }, 1200);
            }
        }, 300);
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
        writeLog(`GENETICS: Spliced extracted DNA into ${dinoName} matrix. Viability now at ${dino.integrity}%.`);
    };

    window.startIncubation = function(dinoName, dinoType, barId, textId, displayId) {
        let dino = labState.genomes[dinoName];
        if (dino.integrity < 100) {
            writeLog(`ABORT: Cannot incubate ${dinoName}. Genome has unmapped gaps (${dino.integrity}%). Splice required.`);
            return;
        }

        const bar = document.getElementById(barId);
        const textEl = document.getElementById(textId);
        const displayEl = document.getElementById(displayId);
        
        if (!bar) return;
        
        if (bar.style.width && parseInt(bar.style.width) > 0 && parseInt(bar.style.width) < 100) {
            writeLog(`LAB: Incubation pod for ${dinoName} is already active.`);
            return;
        }

        writeLog(`LAB: Incubation sequence initiated for ${dinoName}. Pressurizing synthetic growth tank...`);
        displayEl.textContent = "[ GROWING EMBRYO ]";
        displayEl.style.color = "var(--neon-green)";

        let progress = 0;
        const interval = setInterval(() => {
            progress += 20;
            bar.style.width = progress + '%';
            textEl.textContent = progress + '%';
            
            if (progress >= 100) {
                clearInterval(interval);
                displayEl.textContent = "[ SPECIMEN HATCHED ]";
                displayEl.style.color = "var(--neon-cyan)";
                
                const newId = dinoName.substring(0, 3).toUpperCase() + '-' + Math.floor(10 + Math.random() * 90);
                
                if (window.addAsset) {
                    window.addAsset({ name: dinoName, type: dinoType, id: newId, status: "Healthy / Secure" });
                }
                
                writeLog(`SUCCESS: Pure-strain ${dinoName} specimen (${newId}) successfully hatched and added to Roster!`);
            }
        }, 800);
    };
}

function updateAmberDisplay() {
    const el = document.getElementById('amberCount');
    if (el) el.textContent = labState.amberPoints;
}
