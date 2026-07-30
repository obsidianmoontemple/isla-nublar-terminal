let labState = {
    amberPoints: 50,
    isExtracting: false,
    genomes: {
        "Stegosaurus": { integrity: 40, barId: "stegGenome", fillId: "stegGenomeBar" },
        "Dilophosaurus": { integrity: 20, barId: "diloGenome", fillId: "diloGenomeBar" }
    }
};

export function initGenetics(writeLog) {
    setupLaserCanvas(0, false);

    window.mineAmber = function() {
        if (labState.isExtracting) return;
        labState.isExtracting = true;

        const statusEl = document.getElementById('laserStatusText');
        statusEl.textContent = "LASER CUTTING ACTIVE";
        statusEl.style.color = "var(--neon-amber)";
        writeLog(`EXTRACTION: Precision laser locked onto fossilized resin. Vaporizing amber matrix...`);

        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            setupLaserCanvas(progress, true);

            if (progress >= 100) {
                clearInterval(interval);
                labState.amberPoints += 25;
                updateAmberDisplay();

                statusEl.textContent = "MOSQUITO DNA ISOLATED (+25 🧬)";
                statusEl.style.color = "var(--neon-green)";
                writeLog(`SUCCESS: Prehistoric DNA strand successfully extracted from amber core!`);

                setTimeout(() => {
                    setupLaserCanvas(0, false);
                    statusEl.textContent = "READY";
                    statusEl.style.color = "var(--neon-cyan)";
                    labState.isExtracting = false;
                }, 1500);
            }
        }, 150);
    };

    window.spliceGenome = function(dinoName) {
        let dino = labState.genomes[dinoName];
        if (!dino) return;

        if (labState.amberPoints < 30) {
            writeLog(`LAB ERROR: Insufficient Amber reserves (${labState.amberPoints}/30). Use the Laser Extraction Chamber above!`);
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

function setupLaserCanvas(progress, cutting) {
    const canvas = document.getElementById('laserCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background grid lines
    ctx.strokeStyle = "rgba(0, 243, 255, 0.05)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 20) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }

    // Draw Glowing Amber Nugget Block in Center
    ctx.fillStyle = "rgba(255, 170, 0, 0.25)";
    ctx.strokeStyle = "#ffaa00";
    ctx.lineWidth = 2;
    ctx.fillRect(150, 25, 200, 80);
    ctx.strokeRect(150, 25, 200, 80);

    // Draw Encapsulated Prehistoric Mosquito Silhouette inside amber
    ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    ctx.beginPath();
    ctx.arc(250, 65, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#00f3ff";
    ctx.font = "10px monospace";
    ctx.fillText("🦟 SPECIMEN INCLUSION", 170, 70);

    if (cutting) {
        // Draw Laser Beam Cutting Across
        let cutX = 150 + (2 * progress);
        ctx.strokeStyle = "#ff3366";
        ctx.lineWidth = 4;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#ff3366";
        ctx.beginPath();
        ctx.moveTo(cutX, 20);
        ctx.lineTo(cutX, 110);
        ctx.stroke();
        ctx.shadowBlur = 0; // reset

        // Draw Sparks flying off the laser point
        ctx.fillStyle = "#ffffff";
        for (let i = 0; i < 6; i++) {
            let sparkX = cutX + (Math.random() * 20 - 10);
            let sparkY = 25 + Math.random() * 80;
            ctx.fillRect(sparkX, sparkY, 3, 3);
        }
    }
}

function updateAmberDisplay() {
    const el = document.getElementById('amberCount');
    if (el) el.textContent = labState.amberPoints;
}
