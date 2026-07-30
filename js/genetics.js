let labState = {
    amberPoints: 100,
    genomes: {
        "Stegosaurus": { integrity: 40, barId: "stegGenome", fillId: "stegGenomeBar" },
        "Dilophosaurus": { integrity: 20, barId: "diloGenome", fillId: "diloGenomeBar" }
    }
};

export function initGenetics(writeLog) {
    // Generate passive Amber points over time
    setInterval(() => {
        labState.amberPoints += 5;
        updateAmberDisplay();
    }, 4000);

    window.spliceGenome = function(dinoName) {
        let dino = labState.genomes[dinoName];
        if (!dino) return;

        if (labState.amberPoints < 30) {
            writeLog(`LAB ERROR: Insufficient Amber Extraction Points to splice ${dinoName} DNA.`);
            return;
        }

        if (dino.integrity >= 100) {
            writeLog(`LAB: ${dinoName} genome is already at 100% maximum viability.`);
            return;
        }

        labState.amberPoints -= 30;
        dino.integrity = Math.min(100, dino.integrity + 20);
        
        document.getElementById(dino.barId).textContent = `${dino.integrity}%`;
        document.getElementById(dino.fillId).style.width = `${dino.integrity}%`;
        
        updateAmberDisplay();
        writeLog(`LAB: Successfully spliced fossil DNA into ${dinoName} genome matrix. Integrity now at ${dino.integrity}%.`);
    };

    window.startIncubation = function(dinoName, dinoType, barId) {
        let dino = labState.genomes[dinoName];
        if (dino.integrity < 100) {
            writeLog(`ABORT: Cannot incubate ${dinoName}. Genome integrity is incomplete (${dino.integrity}%). Splice more DNA first!`);
            return;
        }

        const bar = document.getElementById(barId);
        if (!bar) return;
        
        if (bar.style.width && parseInt(bar.style.width) > 0 && parseInt(bar.style.width) < 100) {
            writeLog(`LAB: Incubation cycle for ${dinoName} is already underway.`);
            return;
        }

        writeLog(`LAB: Incubation sequence initiated for ${dinoName}... Monitoring thermal stability.`);
        let progress = 0;
        
        const interval = setInterval(() => {
            // Random chance of a power fluctuation complication (15% chance per tick)
            if (Math.random() < 0.15 && progress < 80) {
                writeLog(`⚠️ WARNING: Lab power fluctuation detected! Incubation stall on ${dinoName}.`);
                return; // Pauses progress for this tick
            }

            progress += 10;
            bar.style.width = progress + '%';
            
            if (progress >= 100) {
                clearInterval(interval);
                const newId = dinoName.substring(0, 3).toUpperCase() + '-' + Math.floor(10 + Math.random() * 90);
                
                if (window.addAsset) {
                    window.addAsset({ name: dinoName, type: dinoType, id: newId, status: "Optimal / Healthy" });
                }
                
                writeLog(`SUCCESS: Pure-strain ${dinoName} (${newId}) successfully hatched from incubator matrix!`);
            }
        }, 1200);
    };
}

function updateAmberDisplay() {
    const el = document.getElementById('amberCount');
    if (el) el.textContent = labState.amberPoints;
}
