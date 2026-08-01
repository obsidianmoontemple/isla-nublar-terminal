const dinoDatabase = [
    { id: 1, name: "Brachiosaurus", zone: "Zone A: Canopy / Jungle", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 1", rarity: "Common", requiredShards: 10, status: "Grazing high trees", type: "longneck", baseMood: "🌱 [CALM / GRAZING]", emoji: "🌱", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 2, name: "Velociraptor", zone: "Zone B: Heavy Security Pen", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 25, status: "Pacing perimeter", type: "raptor", baseMood: "⚠️ [HUNTING / ALERT]", emoji: "⚠️", moodState: "alert", trait: "Standard DNA", color: "#ff3344" },
    { id: 3, name: "Triceratops", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Common", requiredShards: 12, status: "Herd resting", type: "ceratopsian", baseMood: "🌿 [HERD RESTING]", emoji: "🌿", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 4, name: "Tyrannosaurus Rex", zone: "Zone D: Volcanic Ridge", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 5", rarity: "Apex", requiredShards: 30, status: "Stalking tree line", type: "trex", baseMood: "👑 [APEX STALKING]", emoji: "👑", moodState: "alert", trait: "Standard DNA", color: "#ff3344" },
    { id: 5, name: "Stegosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Wandering scrub", type: "stegosaur", baseMood: "🍃 [BROWSING]", emoji: "🍃", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 6, name: "Dilophosaurus", zone: "Zone B: Heavy Security Pen", paddock: "Paddock Beta", diet: "Carnivore", threat: "Level 3", rarity: "Rare", requiredShards: 15, status: "Flaring neck frill", type: "frilled_raptor", baseMood: "🧪 [VENOM CHARGED]", emoji: "🧪", moodState: "agitated", trait: "Standard DNA", color: "#ff3344" },
    { id: 7, name: "Parasaurolophus", zone: "Zone E: Wetland Delta", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 1", rarity: "Common", requiredShards: 10, status: "Wading in shallow water", type: "hadrosaur", baseMood: "🎵 [VOCALIZING]", emoji: "🎵", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 8, name: "Ankylosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Beta", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 18, status: "Hunkered down (Armored)", type: "ankylosaur", baseMood: "🛡️ [DEFENSIVE]", emoji: "🛡️", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 9, name: "Gallimimus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Beta", diet: "Omnivore", threat: "Level 1", rarity: "Common", requiredShards: 10, status: "Flock sprinting (Flighty)", type: "flocky", baseMood: "💨 [SPRINTING]", emoji: "💨", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 10, name: "Compsognathus", zone: "Zone B: Heavy Security Pen", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 2", rarity: "Common", requiredShards: 10, status: "Swarming in pack (Flighty)", type: "swarm", baseMood: "🔴 [PACK SWARM]", emoji: "🔴", moodState: "alert", trait: "Standard DNA", color: "#ff3344" },
    { id: 11, name: "Microceratus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 1", rarity: "Common", requiredShards: 10, status: "Foraging in underbrush (Tiny)", type: "tiny_ceratopsian", baseMood: "🌿 [HIDDEN IN BRUSH]", emoji: "🌿", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 12, name: "Pteranodon", zone: "Zone F: Coastal Cliff Aviary", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 3", rarity: "Rare", requiredShards: 15, status: "Soaring over cliffs", type: "pterosaur", baseMood: "🦅 [SOARING]", emoji: "🦅", moodState: "calm", trait: "Standard DNA", color: "#ff3344" },
    { id: 13, name: "Dimorphodon", zone: "Zone F: Coastal Cliff Aviary", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 2", rarity: "Common", requiredShards: 10, status: "Fluttering rapidly (Flighty)", type: "small_flyer", baseMood: "🦇 [RAPID FLUTTER]", emoji: "🦇", moodState: "alert", trait: "Standard DNA", color: "#ff3344" },
    { id: 14, name: "Mosasaurus", zone: "Zone G: Deep Water Lagoon", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 5", rarity: "Apex", requiredShards: 30, status: "Circling deep water", type: "aquatic", baseMood: "🌊 [SUB-SURFACE]", emoji: "🌊", moodState: "calm", trait: "Standard DNA", color: "#00f0ff" },
    { id: 15, name: "Baryonyx", zone: "Zone E: Wetland Delta", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 22, status: "Fishing in stream", type: "baryonyx", baseMood: "🐟 [HUNTING FISH]", emoji: "🐟", moodState: "alert", trait: "Standard DNA", color: "#ff3344" },
    { id: 16, name: "Cryo-Raptor", zone: "Zone H: Glacial Tundra", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 22, status: "Prowling snowdrifts", type: "tundra", baseMood: "❄️ [CRYO-ACTIVE]", emoji: "❄️", moodState: "alert", trait: "Standard DNA", color: "#ff3344" },
    { id: 17, name: "Spinosaurus", zone: "Zone G: Deep Water Lagoon", paddock: "Paddock Beta", diet: "Carnivore", threat: "Level 5", rarity: "Apex", requiredShards: 30, status: "Hunting near shoreline", type: "spinosaurus", baseMood: "⚡ [TERRITORIAL]", emoji: "⚡", moodState: "alert", trait: "Standard DNA", color: "#ff3344" },
    { id: 18, name: "Allosaurus", zone: "Zone D: Volcanic Ridge", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 25, status: "Prowling rocky outcrop", type: "trex", baseMood: "🔥 [AGRESSIVE]", emoji: "🔥", moodState: "alert", trait: "Standard DNA", color: "#ff3344" },
    { id: 19, name: "Carnotaurus", zone: "Zone D: Volcanic Ridge", paddock: "Paddock Beta", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 22, status: "Testing horned skull", type: "baryonyx", baseMood: "🐂 [SPRINT READY]", emoji: "🐂", moodState: "alert", trait: "Standard DNA", color: "#ff3344" },
    { id: 20, name: "Corythosaurus", zone: "Zone E: Wetland Delta", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 1", rarity: "Common", requiredShards: 10, status: "Calling out by river", type: "hadrosaur", baseMood: "🎶 [HERD CALL]", emoji: "🎶", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 21, name: "Diplodocus", zone: "Zone A: Canopy / Jungle", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Whipping long tail", type: "longneck", baseMood: "🌴 [CANOPY BROWSING]", emoji: "🌴", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 22, name: "Dryosaurus", zone: "Zone A: Canopy / Jungle", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 1", rarity: "Common", requiredShards: 10, status: "Sprinting through ferns", type: "flocky", baseMood: "👀 [VIGILANT]", emoji: "👀", moodState: "alert", trait: "Standard DNA", color: "#2ecc71" },
    { id: 23, name: "Edmontosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Common", requiredShards: 10, status: "Grazing peacefully", type: "hadrosaur", baseMood: "🌿 [CALM GRAZING]", emoji: "🌿", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 24, name: "Euoplocephalus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Swishing club tail", type: "ankylosaur", baseMood: "🛡️ [ARMOR LOCKED]", emoji: "🛡️", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 25, name: "Giganotosaurus", zone: "Zone D: Volcanic Ridge", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 5", rarity: "Apex", requiredShards: 30, status: "Resting in clearing", type: "trex", baseMood: "👑 [DOMINANT APEX]", emoji: "👑", moodState: "calm", trait: "Standard DNA", color: "#ff3344" },
    { id: 26, name: "Kentrosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Displaying shoulder spikes", type: "stegosaur", baseMood: "🌵 [SPIKE DISPLAY]", emoji: "🌵", moodState: "alert", trait: "Standard DNA", color: "#2ecc71" },
    { id: 27, name: "Metriacanthosaurus", zone: "Zone B: Heavy Security Pen", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 3", rarity: "Rare", requiredShards: 18, status: "Stalking enclosure fence", type: "baryonyx", baseMood: "⚡ [TESTING FENCE]", emoji: "⚡", moodState: "alert", trait: "Standard DNA", color: "#ff3344" },
    { id: 28, name: "Mamenchisaurus", zone: "Zone A: Canopy / Jungle", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Reaching highest branches", type: "longneck", baseMood: "🌿 [REACHING CANOPY]", emoji: "🌿", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 29, name: "Pachycephalosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Headbutting training post", type: "tiny_ceratopsian", baseMood: "💥 [HEADBUTTING]", emoji: "💥", moodState: "agitated", trait: "Standard DNA", color: "#2ecc71" },
    { id: 30, name: "Pentaceratops", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Displaying massive frill", type: "ceratopsian", baseMood: "🛡️ [FRILL DISPLAY]", emoji: "🛡️", moodState: "alert", trait: "Standard DNA", color: "#2ecc71" },
    { id: 31, name: "Proceratosaurus", zone: "Zone B: Heavy Security Pen", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 2", rarity: "Common", requiredShards: 10, status: "Chittering in shadows", type: "swarm", baseMood: "🌑 [SHADOW STALKING]", emoji: "🌑", moodState: "calm", trait: "Standard DNA", color: "#ff3344" },
    { id: 32, name: "Sauropelta", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Resting armored back", type: "ankylosaur", baseMood: "🛡️ [RESTING ARMORED]", emoji: "🛡️", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 33, name: "Sinoceratops", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Grazing with herd", type: "ceratopsian", baseMood: "🌿 [HERD GRAZING]", emoji: "🌿", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 34, name: "Suchomimus", zone: "Zone E: Wetland Delta", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 22, status: "Paddling in shallows", type: "spinosaurus", baseMood: "🌊 [PADDLING]", emoji: "🌊", moodState: "calm", trait: "Standard DNA", color: "#ff3344" },
    { id: 35, name: "Therizinosaurus", zone: "Zone A: Canopy / Jungle", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 3", rarity: "Epic", requiredShards: 22, status: "Swishing giant claws", type: "trex", baseMood: "⚔️ [CLAW SWISHING]", emoji: "⚔️", moodState: "alert", trait: "Standard DNA", color: "#2ecc71" },
    { id: 36, name: "Torosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Low-frill grazing", type: "ceratopsian", baseMood: "🌱 [BROWSING]", emoji: "🌱", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 37, name: "Troodon", zone: "Zone B: Heavy Security Pen", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 3", rarity: "Rare", requiredShards: 18, status: "Night vision active", type: "frilled_raptor", baseMood: "🌙 [NOCTURNE ACTIVE]", emoji: "🌙", moodState: "alert", trait: "Standard DNA", color: "#ff3344" },
    { id: 38, name: "Tuojiangosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Chewing dry brush", type: "stegosaur", baseMood: "🍂 [DRY BROWSING]", emoji: "🍂", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 39, name: "Tyrannotitan", zone: "Zone D: Volcanic Ridge", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 5", rarity: "Apex", requiredShards: 30, status: "Guarding territory", type: "trex", baseMood: "🔥 [TERRITORY GUARD]", emoji: "🔥", moodState: "alert", trait: "Standard DNA", color: "#ff3344" },
    { id: 40, name: "Utahraptor", zone: "Zone B: Heavy Security Pen", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 22, status: "Testing reinforced wire", type: "raptor", baseMood: "⚡ [WIRE TESTING]", emoji: "⚡", moodState: "agitated", trait: "Standard DNA", color: "#ff3344" },
    { id: 41, name: "Wuerhosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Low-slung browsing", type: "stegosaur", baseMood: "🌱 [LOW BROWSING]", emoji: "🌱", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 42, name: "Zuniceratops", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 1", rarity: "Common", requiredShards: 10, status: "Junior herd grazing", type: "tiny_ceratopsian", baseMood: "🍼 [JUNIOR GRAZING]", emoji: "🍼", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 43, name: "Albertosaurus", zone: "Zone D: Volcanic Ridge", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 22, status: "Patrolling ridge line", type: "baryonyx", baseMood: "🌋 [RIDGE PATROL]", emoji: "🌋", moodState: "alert", trait: "Standard DNA", color: "#ff3344" },
    { id: 44, name: "Amargasaurus", zone: "Zone A: Canopy / Jungle", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Showing double-spined neck", type: "longneck", baseMood: "🌴 [SPINE DISPLAY]", emoji: "🌴", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 45, name: "Archaeornithomimus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Omnivore", threat: "Level 1", rarity: "Common", requiredShards: 10, status: "Scavenging near herd", type: "flocky", baseMood: "🦴 [SCAVENGING]", emoji: "🦴", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 46, name: "Atrociraptor", zone: "Zone B: Heavy Security Pen", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 22, status: "Aggressive pacing", type: "raptor", baseMood: "😡 [HIGH AGGRESSION]", emoji: "😡", moodState: "agitated", trait: "Standard DNA", color: "#ff3344" },
    { id: 47, name: "Cearadactylus", zone: "Zone F: Coastal Cliff Aviary", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Gliding over surf", type: "small_flyer", baseMood: "🌊 [SURF GLIDING]", emoji: "🌊", moodState: "calm", trait: "Standard DNA", color: "#f1c40f" },
    { id: 48, name: "Ceratosaurus", zone: "Zone D: Volcanic Ridge", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 3", rarity: "Rare", requiredShards: 18, status: "Sniffing sulfur vents", type: "baryonyx", baseMood: "💨 [VENT SNIFFING]", emoji: "💨", moodState: "calm", trait: "Standard DNA", color: "#ff3344" },
    { id: 49, name: "Chasmosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Resting shade", type: "ceratopsian", baseMood: "🌳 [SHADE RESTING]", emoji: "🌳", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 50, name: "Concavenator", zone: "Zone D: Volcanic Ridge", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 22, status: "Showing back hump", type: "baryonyx", baseMood: "🌋 [HUMP DISPLAY]", emoji: "🌋", moodState: "alert", trait: "Standard DNA", color: "#ff3344" }
];

let genomeVault = {};
dinoDatabase.forEach(d => {
    genomeVault[d.name] = { count: 0, required: d.requiredShards, rarity: d.rarity };
});
genomeVault["Brachiosaurus"].count = 10;

const sectorList = [
    "Zone A: Canopy / Jungle",
    "Zone B: Heavy Security Pen",
    "Zone C: Plains / Savannah",
    "Zone D: Volcanic Ridge",
    "Zone E: Wetland Delta",
    "Zone F: Coastal Cliff Aviary",
    "Zone G: Deep Water Lagoon",
    "Zone H: Glacial Tundra"
];

const availablePaddocks = ["Paddock Alpha", "Paddock Beta", "Paddock Gamma", "Paddock Delta"];

let amber = 250;
let dna = 500;
let labLevel = 1;
let drillLevel = 1;
let extractionTimer = 30;
let timerInterval = null;
let miningX = 300;
let miningY = 150;
let miningNodes = [];
let drillStability = 100;
let miningActive = false;

let activeFeedIndex = 0;
let activeSectorFilter = "Zone A: Canopy / Jungle";
let animationFrameId = null;

function switchTab(tabId, event) {
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    if(event && event.target.tagName === 'BUTTON') event.target.classList.add('active');
    
    let unlocked = getUnlockedDinos();
    if(tabId === 'parkView') {
        if(unlocked.length > 0) {
            let currentActiveDino = dinoDatabase[activeFeedIndex];
            let isUnlocked = unlocked.some(d => d.id === currentActiveDino.id);
            if(!isUnlocked) activeFeedIndex = dinoDatabase.findIndex(d => d.id === unlocked[0].id);
        }
        setTimeout(() => loadOpticFeed(activeFeedIndex), 50);
    } else if(tabId === 'sectorDetailView') {
        renderSectorCensus(activeSectorFilter);
    } else if(tabId === 'biosphere') {
        renderBiosphereRegistry();
    } else if(tabId === 'genomeVault') {
        renderGenomeVault();
    } else {
        if(animationFrameId) cancelAnimationFrame(animationFrameId);
        stopMiningSession();
    }
}

function logMessage(text) {
    document.getElementById('logOutput').innerText = `[${new Date().toLocaleTimeString()}] ${text}`;
}

function initApp() {
    renderBiosphereRegistry();
    renderGenomeVault();

    const sectorBtnContainer = document.getElementById('sectorFilterButtons');
    if(sectorBtnContainer) {
        sectorBtnContainer.innerHTML = '';
        sectorList.forEach(sec => {
            let sBtn = document.createElement('button');
            sBtn.className = 'sector-btn';
            sBtn.style.whiteSpace = 'nowrap';
            sBtn.innerText = sec.split(':')[0];
            sBtn.onclick = () => openSectorDetail(sec);
            sectorBtnContainer.appendChild(sBtn);
        });
    }

    initMiningCanvas();
    loadOpticFeed(0);
}

function getUnlockedDinos() {
    return dinoDatabase.filter(d => {
        let record = genomeVault[d.name];
        return record && record.count >= record.required;
    });
}

function updateFeedSelectors() {
    let unlocked = getUnlockedDinos();
    const selectorContainer = document.getElementById('feedSelectorButtons');
    if(!selectorContainer) return;
    selectorContainer.innerHTML = '';
    unlocked.forEach((d) => {
        let realIdx = dinoDatabase.findIndex(item => item.id === d.id);
        let btn = document.createElement('button');
        btn.className = 'sector-btn';
        btn.style.whiteSpace = 'nowrap';
        btn.innerText = `${d.id}. ${d.name}`;
        btn.onclick = () => jumpToFeed(realIdx);
        selectorContainer.appendChild(btn);
    });
}

function renderGenomeVault() {
    const vaultGrid = document.getElementById('genomeVaultGrid');
    if(!vaultGrid) return;
    vaultGrid.innerHTML = '';

    let unlockedCount = 0;
    dinoDatabase.forEach(d => {
        let record = genomeVault[d.name] || { count: 0, required: d.requiredShards, rarity: d.rarity };
        let isCompleted = record.count >= record.required;
        if (isCompleted) unlockedCount++;
        let percentage = Math.min(100, Math.round((record.count / record.required) * 100));

        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="sector-details">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong style="color: ${isCompleted ? 'var(--neon-green)' : 'var(--text-main)'};">${d.name}</strong>
                    <span style="font-size:0.7rem; color:var(--neon-cyan); border:1px solid var(--neon-cyan); padding:2px 6px;">${d.rarity}</span>
                </div>
                <div class="sector-row"><span>Shards Collected:</span> <strong style="color:var(--neon-cyan);">${record.count} / ${record.required}</strong></div>
                <div class="sector-row"><span>Genome Completion:</span> <strong style="color:${isCompleted ? 'var(--neon-green)' : 'var(--neon-amber)'};">${percentage}% ${isCompleted ? '✅ UNLOCKED' : '🔒 LOCKED'}</strong></div>
            </div>
        `;
        vaultGrid.appendChild(card);
    });
    document.getElementById('vaultCount').innerText = unlockedCount;
    updateFeedSelectors();
}

function initMiningCanvas() {
    const canvas = document.getElementById('miningCanvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.onmousemove = (e) => {
        let rect = canvas.getBoundingClientRect();
        miningX = e.clientX - rect.left;
        miningY = e.clientY - rect.top;
    };

    canvas.onclick = () => {
        if (!miningActive) return;
        let hitIndex = -1;
        miningNodes.forEach((node, idx) => {
            let dist = Math.hypot(miningX - node.x, miningY - node.y);
            if (dist < node.radius + 12) hitIndex = idx;
        });

        if (hitIndex !== -1) {
            let node = miningNodes.splice(hitIndex, 1)[0];
            let payloadMult = drillLevel;
            if (!genomeVault[node.dinoName]) genomeVault[node.dinoName] = { count: 0, required: node.requiredShards, rarity: node.rarity };
            genomeVault[node.dinoName].count += payloadMult;

            let dnaGain = (node.isRare ? 15 : 5) * payloadMult;
            dna += dnaGain;
            amber += (node.isRare ? 20 : 5) * payloadMult;

            document.getElementById('amberCount').innerText = amber;
            document.getElementById('dnaCount').innerText = dna;
            document.getElementById('miningAmberCount').innerText = amber;
            document.getElementById('miningDnaCount').innerText = dna;
            renderGenomeVault();
            if (miningNodes.length === 0) spawnMiningNodes();
        } else {
            drillStability -= (15 + drillLevel * 4);
            document.getElementById('drillStability').innerText = Math.max(0, drillStability) + "%";
            if (drillStability <= 0) stopMiningSession();
        }
    };

    function spawnMiningNodes() {
        miningNodes = [];
        let nodeCount = 4 + drillLevel;
        for (let i = 0; i < nodeCount; i++) {
            let randomDino = dinoDatabase[Math.floor(Math.random() * dinoDatabase.length)];
            let isRare = randomDino.rarity === 'Epic' || randomDino.rarity === 'Apex';
            miningNodes.push({
                x: Math.random() * (canvas.width - 60) + 30,
                y: Math.random() * (canvas.height - 80) + 30,
                radius: isRare ? 14 : 10,
                isRare: isRare,
                dinoName: randomDino.name,
                rarity: randomDino.rarity,
                requiredShards: randomDino.requiredShards,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2
            });
        }
    }

    function miningLoop() {
        ctx.fillStyle = '#020408';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (miningActive) {
            miningNodes.forEach(node => {
                node.x += node.vx; node.y += node.vy;
                if (node.x < 20 || node.x > canvas.width - 20) node.vx *= -1;
                if (node.y < 20 || node.y > canvas.height - 20) node.vy *= -1;
                ctx.fillStyle = node.isRare ? '#ffb000' : '#00f0ff';
                ctx.beginPath(); ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2); ctx.fill();
            });
        }
        requestAnimationFrame(miningLoop);
    }
    miningLoop();
}

function startMiningDrill() {
    if (miningActive) return;
    miningActive = true;
    drillStability = 100;
    document.getElementById('drillStability').innerText = "100%";
    extractionTimer = 25 + (drillLevel * 5);
    document.getElementById('miningTimer').innerText = extractionTimer;
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        extractionTimer--;
        document.getElementById('miningTimer').innerText = extractionTimer;
        if (extractionTimer <= 0) stopMiningSession();
    }, 1000);
    miningNodes = [];
    for (let i = 0; i < 4 + drillLevel; i++) {
        let rd = dinoDatabase[Math.floor(Math.random() * dinoDatabase.length)];
        miningNodes.push({ x: Math.random()*500+50, y: Math.random()*200+40, radius: 10, isRare: false, dinoName: rd.name, requiredShards: rd.requiredShards, vx: 1, vy: 1 });
    }
}

function stopMiningSession() {
    miningActive = false;
    if (timerInterval) clearInterval(timerInterval);
}

function coolDownDrill() {
    drillStability = 100;
    document.getElementById('drillStability').innerText = "100%";
}

function upgradeDrillRig() {
    let cost = drillLevel * 100;
    if (amber < cost) return;
    amber -= cost; drillLevel++;
    document.getElementById('amberCount').innerText = amber;
    document.getElementById('drillLevelText').innerText = drillLevel;
}

function evaluateCompatibility(dinoA, dinoB) {
    if (dinoA.id === dinoB.id) return { status: "Self", color: "var(--neon-green)" };
    if (dinoA.paddock !== dinoB.paddock) return { status: "🛡️ BUFFERED", color: "var(--neon-green)" };
    if (dinoA.diet === "Carnivore" && dinoB.diet === "Carnivore") return { status: "⚠️ CLASH", color: "var(--neon-alert)" };
    if (dinoA.diet === "Carnivore" || dinoB.diet === "Carnivore") return { status: "❌ FATAL", color: "var(--neon-alert)" };
    return { status: "✅ HARMONIOUS", color: "var(--neon-green)" };
}

function renderBiosphereRegistry() {
    const rosterGrid = document.getElementById('masterRosterGrid');
    if(!rosterGrid) return;
    rosterGrid.innerHTML = '';
    let unlockedDinos = getUnlockedDinos();
    document.getElementById('unlockedBiosphereCount').innerText = `Discovered & Unlocked: ${unlockedDinos.length} / ${dinoDatabase.length}`;

    unlockedDinos.forEach((d) => {
        let realIdx = dinoDatabase.findIndex(item => item.id === d.id);
        let rCard = document.createElement('div');
        rCard.className = 'card';
        rCard.innerHTML = `
            <div class="sector-details">
                <strong style="color:var(--neon-green);">${d.name} [ID: ${d.id}]</strong>
                <p style="font-size:0.8rem;">Sector: <strong>${d.zone}</strong></p>
                <p style="font-size:0.8rem; color:var(--neon-amber);">Paddock: <strong>${d.paddock}</strong></p>
                <button class="sector-btn" style="margin-top:8px;" onclick="jumpToFeed(${realIdx})">🌐 Live Optic Feed</button>
            </div>
        `;
        rosterGrid.appendChild(rCard);
    });
}

function jumpToFeed(index) {
    activeFeedIndex = index;
    switchTab('parkView', null);
    loadOpticFeed(activeFeedIndex);
}

function boostClimateVoltage(zoneNum) {
    let el = document.getElementById(`zone${zoneNum}Voltage`);
    if(el) { el.innerText = "60,000V (MAX)"; el.style.color = "var(--neon-amber)"; }
}

function triggerDinoMood(action) {
    let dino = dinoDatabase[activeFeedIndex];
    if(action === 'feed') {
        dino.moodState = 'calm'; dino.baseMood = '🥗 [FED & CONTENT]'; dino.emoji = '🥗';
    } else if(action === 'agitate') {
        dino.moodState = 'agitated'; dino.baseMood = '⚡ [AGITATED / THREATENING]'; dino.emoji = '⚡';
    }
    loadOpticFeed(activeFeedIndex);
}

function openSectorDetail(sectorName) {
    activeSectorFilter = sectorName;
    switchTab('sectorDetailView', null);
    renderSectorCensus(sectorName);
}

function renderSectorCensus(sectorName) {
    let titleEl = document.getElementById('selectedSectorTitle');
    if(titleEl) titleEl.innerText = `Paddocks & Census // ${sectorName}`;
    
    let unlockedDinos = getUnlockedDinos();
    let filteredDinos = unlockedDinos.filter(d => d.zone === sectorName);
    
    let popCountEl = document.getElementById('sectorPopCount');
    if(popCountEl) popCountEl.innerText = `Registered Specimens: ${filteredDinos.length}`;

    let paddocksContainer = document.getElementById('paddocksContainer');
    if(paddocksContainer) {
        paddocksContainer.innerHTML = '';
        availablePaddocks.forEach(pad => {
            let padDinos = filteredDinos.filter(d => d.paddock === pad);
            let padDiv = document.createElement('div');
            padDiv.className = 'paddock-card';
            padDiv.innerHTML = `<strong style="color:var(--neon-amber);">${pad}</strong> (${padDinos.length} specimens: ${padDinos.map(d => d.name).join(', ') || 'Empty'})`;
            paddocksContainer.appendChild(padDiv);
        });
    }

    const censusGrid = document.getElementById('sectorCensusGrid');
    if(censusGrid) {
        censusGrid.innerHTML = '';
        filteredDinos.forEach(d => {
            let globalIdx = dinoDatabase.findIndex(item => item.id === d.id);
            let cCard = document.createElement('div');
            cCard.className = 'card';
            cCard.innerHTML = `
                <div class="sector-details">
                    <strong style="color:var(--neon-green);">${d.name} [ID: ${d.id}]</strong>
                    <div class="sector-row"><span>Paddock:</span> <strong style="color: var(--neon-amber);">${d.paddock}</strong></div>
                    <div class="sector-row"><span>Diet:</span> <strong style="color: var(--neon-cyan);">${d.diet}</strong></div>
                    <button class="sector-btn" style="margin-top:8px;" onclick="jumpToFeed(${globalIdx})">🌐 Live Optic Feed</button>
                </div>
            `;
            censusGrid.appendChild(cCard);
        });
    }
}

function reassignSectorFromTelemetry(newSector) {
    let dino = dinoDatabase[activeFeedIndex];
    if(dino) {
        dino.zone = newSector;
        logMessage(`Telemetry Transfer: ${dino.name} moved to ${newSector}.`);
        document.getElementById('telemetrySector').innerText = dino.zone;
    }
}

function reassignPaddockFromTelemetry(newPaddock) {
    let dino = dinoDatabase[activeFeedIndex];
    if(dino) {
        dino.paddock = newPaddock;
        logMessage(`Telemetry Partition: ${dino.name} moved to ${newPaddock}.`);
        document.getElementById('telemetryPaddock').innerText = dino.paddock;
    }
}

function updateWuTargetSelect() {
    const wuSelect = document.getElementById('wuTargetSelect');
    if(!wuSelect) return;
    wuSelect.innerHTML = '';
    
    let unlocked = getUnlockedDinos();
    if (unlocked.length === 0) {
        let opt = document.createElement('option');
        opt.value = "";
        opt.innerText = "No Unlocked Specimens Available in Genome Vault";
        wuSelect.appendChild(opt);
        return;
    }

    unlocked.forEach(d => {
        let record = genomeVault[d.name] || { count: d.requiredShards, required: d.requiredShards };
        let opt = document.createElement('option');
        opt.value = d.id;
        opt.innerText = `${d.id}. ${d.name} [${d.rarity}] - ${record.count}/${record.required} Shards ✅`;
        wuSelect.appendChild(opt);
    });
}

function updateSpliceCostDisplay() {
    const wuSelect = document.getElementById('wuTargetSelect');
    if (!wuSelect) return;
    let targetId = parseInt(wuSelect.value);
    let dino = dinoDatabase.find(d => d.id === targetId);
    if (dino) {
        let record = genomeVault[dino.name] || { required: dino.requiredShards };
        let cost = record.required * 3;
        let costLabel = document.getElementById('spliceCostLabel');
        if(costLabel) costLabel.innerText = `Target: ${dino.name} (${dino.rarity}) // Splice Cost: ${cost} DNA strands.`;
    }
}

// CRYSTAL-CLEAR OPTIC FEED RENDERER WITH CORRECTED ANATOMY & ACTIVE SECTOR BACKGROUNDS
function loadOpticFeed(index) {
    activeFeedIndex = index;
    let currentDino = dinoDatabase[activeFeedIndex];

    document.getElementById('activeFeedTitle').innerText = `Isla Nublar Live Optics // ${currentDino.zone} [${currentDino.paddock}]`;
    document.getElementById('telemetryName').innerText = currentDino.name;
    document.getElementById('telemetrySector').innerText = currentDino.zone;
    document.getElementById('telemetryPaddock').innerText = currentDino.paddock;
    document.getElementById('telemetryDiet').innerText = currentDino.diet;
    document.getElementById('telemetryStatusTag').innerText = currentDino.baseMood;
    document.getElementById('telemetryType').innerText = currentDino.type.toUpperCase() + " PHYSIOLOGY";
    document.getElementById('telemetryThreat').innerText = currentDino.threat;
    document.getElementById('telemetryTrait').innerText = currentDino.trait || "Standard DNA";

    let selectEl = document.getElementById('telemetrySectorSelect');
    if(selectEl) {
        selectEl.innerHTML = '';
        sectorList.forEach(sec => {
            let opt = document.createElement('option');
            opt.value = sec; opt.innerText = sec;
            if(sec === currentDino.zone) opt.selected = true;
            selectEl.appendChild(opt);
        });
    }

    const canvas = document.getElementById('uniqueOpticCanvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    if(animationFrameId) cancelAnimationFrame(animationFrameId);

    let entityX = 200; let targetX = 400; let legCycle = 0;

    function renderOpticFeed() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // DYNAMIC SECTOR BACKGROUND SYNC
        if(currentDino.zone.includes("Canopy")) {
            ctx.fillStyle = '#020f05'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#051f0a'; ctx.fillRect(0, 0, canvas.width, 60);
        } else if(currentDino.zone.includes("Security")) {
            ctx.fillStyle = '#0d0f12'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#161a22'; ctx.fillRect(0, 240, canvas.width, 110);
        } else if(currentDino.zone.includes("Plains")) {
            ctx.fillStyle = '#101407'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#1a220c'; ctx.fillRect(0, 250, canvas.width, 100);
        } else if(currentDino.zone.includes("Volcanic")) {
            ctx.fillStyle = '#140303'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ff330022'; ctx.fillRect(0, 260, canvas.width, 90);
        } else if(currentDino.zone.includes("Wetland")) {
            ctx.fillStyle = '#030810'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#061220'; ctx.fillRect(0, 220, canvas.width, 130);
        } else if(currentDino.zone.includes("Aviary")) {
            ctx.fillStyle = '#030b14'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else if(currentDino.zone.includes("Lagoon")) {
            ctx.fillStyle = '#010814'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#021630'; ctx.fillRect(0, 200, canvas.width, 150);
        } else if(currentDino.zone.includes("Tundra")) {
            ctx.fillStyle = '#0a121c'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ffffff11'; ctx.fillRect(0, 260, canvas.width, 90);
        } else {
            ctx.fillStyle = '#050a05'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.strokeStyle = '#1e331e'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(0, 270); ctx.lineTo(canvas.width, 270); ctx.stroke();

        if(Math.abs(entityX - targetX) < 2) targetX = Math.random() * (canvas.width - 200) + 100;
        if(Math.abs(targetX - entityX) > 0.5) {
            entityX += (targetX > entityX) ? 1.0 : -1.0;
            legCycle += 0.25;
        }

        let skinColor = currentDino.color || '#2ecc71';
        if(currentDino.moodState === 'agitated') skinColor = '#ff3344';

        ctx.save();
        ctx.translate(entityX, 0);
        let lOffset = Math.sin(legCycle) * 6;

        let pType = currentDino.type;
        ctx.fillStyle = skinColor;

        if(pType === 'longneck') {
            ctx.fillRect(-20, 190, 90, 45); // Body
            ctx.fillRect(50, 130, 14, 70); // Long neck
            ctx.fillRect(44, 120, 24, 14); // Distinct head profile
            ctx.fillRect(-30, 200, 70, 30); // Tail
        } else if(pType === 'raptor' || pType === 'frilled_raptor') {
            ctx.fillRect(-15, 205, 60, 35);
            ctx.fillRect(35, 180, 14, 30);
            ctx.beginPath(); ctx.arc(44, 175, 8, 0, Math.PI*2); ctx.fill();
            ctx.fillRect(-45, 210, 45, 12);
        } else if(pType === 'trex') {
            ctx.fillRect(-25, 190, 85, 50);
            ctx.fillRect(45, 160, 22, 45);
            ctx.beginPath(); ctx.arc(58, 150, 14, 0, Math.PI*2); ctx.fill();
            ctx.fillRect(-55, 205, 65, 20);
        } else if(pType === 'aquatic' || pType === 'spinosaurus') {
            ctx.fillRect(-30, 200, 100, 40);
            ctx.beginPath(); ctx.moveTo(0, 200); ctx.lineTo(20, 160); ctx.lineTo(40, 200); ctx.fill();
            ctx.fillRect(55, 185, 25, 25);
        } else if(pType === 'pterosaur' || pType === 'small_flyer') {
            ctx.fillRect(-15, 120, 40, 20);
            ctx.beginPath(); ctx.moveTo(-15, 130); ctx.lineTo(-60, 100); ctx.lineTo(-10, 140); ctx.fill();
            ctx.beginPath(); ctx.moveTo(25, 130); ctx.lineTo(70, 100); ctx.lineTo(20, 140); ctx.fill();
        } else {
            ctx.fillRect(-20, 200, 80, 40);
            ctx.fillRect(45, 180, 15, 30);
            ctx.beginPath(); ctx.arc(52, 175, 10, 0, Math.PI*2); ctx.fill();
        }

        // Legs
        ctx.fillStyle = '#111d11';
        ctx.fillRect(-5, 235, 10, 35 + lOffset);
        ctx.fillRect(35, 235, 10, 35 - lOffset);

        ctx.restore();

        // HUD OVERLAYS & STATUS ICONS
        ctx.font = '12px Courier New';
        ctx.fillStyle = '#00f0ff';
        ctx.fillText(`CAM-FEED // ID: ${currentDino.id} - ${currentDino.name.toUpperCase()}`, 15, 25);
        
        ctx.fillStyle = 'rgba(0,0,0,0.85)';
        ctx.fillRect(canvas.width - 55, 12, 42, 32);
        ctx.strokeStyle = currentDino.moodState === 'agitated' ? '#ff3344' : '#ffb000';
        ctx.strokeRect(canvas.width - 55, 12, 42, 32);
        ctx.font = '18px sans-serif';
        ctx.fillText(currentDino.emoji, canvas.width - 45, 34);

        ctx.font = '11px Courier New';
        ctx.fillStyle = 'rgba(0,0,0,0.85)';
        ctx.fillRect(12, 35, 230, 22);
        ctx.strokeStyle = currentDino.moodState === 'agitated' ? '#ff3344' : '#ffb000';
        ctx.strokeRect(12, 35, 230, 22);
        ctx.fillStyle = '#ffb000';
        ctx.fillText(`STATUS: ${currentDino.baseMood}`, 18, 50);

        if(document.getElementById('parkView').classList.contains('active')) {
            animationFrameId = requestAnimationFrame(renderOpticFeed);
        }
    }
    renderOpticFeed();
}

window.onload = initApp;
