export function initSecurity(writeLog) {
    window.boostVoltage = function(sectorNum) {
        const el = document.getElementById(`sec${sectorNum}Voltage`);
        if (!el) return;
        el.textContent = "15,000V [Boosted]";
        el.style.color = "var(--neon-green)";
        writeLog(`SECURITY: Sector ${sectorNum} fence voltage boosted.`);
        setTimeout(() => {
            el.textContent = "10,000V [Optimal]";
            el.style.color = "var(--neon-cyan)";
        }, 4000);
    };
}
