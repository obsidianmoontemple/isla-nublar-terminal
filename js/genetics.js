export function initGenetics(writeLog) {
    window.startIncubation = function(dinoName, dinoType, barId) {
        const bar = document.getElementById(barId);
        if (!bar) return;
        
        if (bar.style.width && parseInt(bar.style.width) > 0 && parseInt(bar.style.width) < 100) {
            writeLog(`LAB: Incubation cycle for ${dinoName} is already underway.`);
            return;
        }

        writeLog(`LAB: Incubation sequence initiated for ${dinoName}...`);
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            bar.style.width = progress + '%';
            if (progress >= 100) {
                clearInterval(interval);
                const newId = dinoName.substring(0, 3).toUpperCase() + '-' + Math.floor(10 + Math.random() * 90);
                
                if (window.addAsset) {
                    window.addAsset({ name: dinoName, type: dinoType, id: newId, status: "Newly Hatched" });
                }
                
                writeLog(`SUCCESS: ${dinoName} (${newId}) successfully hatched and added to Roster!`);
            }
        }, 1000);
    };
}
