const dinoDatabase = [
    { id: 1, name: "Brachiosaurus", zone: "Zone A: Canopy / Jungle", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 1", rarity: "Common", requiredShards: 10, status: "Grazing high trees", type: "longneck", baseMood: "🌱 [CALM / GRAZING]", emoji: "🌱", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 2, name: "Velociraptor", zone: "Zone B: Heavy Security Pen", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 25, status: "Pacing perimeter", type: "raptor", baseMood: "⚠️ [HUNTING / ALERT]", emoji: "⚠️", moodState: "alert", trait: "Standard DNA", color: "#e74c3c" },
    { id: 3, name: "Triceratops", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Common", requiredShards: 12, status: "Herd resting", type: "ceratopsian", baseMood: "🌿 [HERD RESTING]", emoji: "🌿", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 4, name: "Tyrannosaurus Rex", zone: "Zone D: Volcanic Ridge", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 5", rarity: "Apex", requiredShards: 30, status: "Stalking tree line", type: "trex", baseMood: "👑 [APEX STALKING]", emoji: "👑", moodState: "alert", trait: "Standard DNA", color: "#e74c3c" },
    { id: 5, name: "Stegosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Wandering scrub", type: "stegosaur", baseMood: "🍃 [BROWSING]", emoji: "🍃", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 6, name: "Dilophosaurus", zone: "Zone B: Heavy Security Pen", paddock: "Paddock Beta", diet: "Carnivore", threat: "Level 3", rarity: "Rare", requiredShards: 15, status: "Flaring neck frill", type: "frilled_raptor", baseMood: "🧪 [VENOM CHARGED]", emoji: "🧪", moodState: "agitated", trait: "Standard DNA", color: "#e74c3c" },
    { id: 7, name: "Parasaurolophus", zone: "Zone E: Wetland Delta", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 1", rarity: "Common", requiredShards: 10, status: "Wading in shallow water", type: "hadrosaur", baseMood: "🎵 [VOCALIZING]", emoji: "🎵", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 8, name: "Ankylosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Beta", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 18, status: "Hunkered down (Armored)", type: "ankylosaur", baseMood: "🛡️ [DEFENSIVE]", emoji: "🛡️", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 9, name: "Gallimimus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Beta", diet: "Omnivore", threat: "Level 1", rarity: "Common", requiredShards: 10, status: "Flock sprinting (Flighty)", type: "flocky", baseMood: "💨 [SPRINTING]", emoji: "💨", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 10, name: "Compsognathus", zone: "Zone B: Heavy Security Pen", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 2", rarity: "Common", requiredShards: 10, status: "Swarming in pack (Flighty)", type: "swarm", baseMood: "🔴 [PACK SWARM]", emoji: "🔴", moodState: "alert", trait: "Standard DNA", color: "#e74c3c" },
    { id: 11, name: "Microceratus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 1", rarity: "Common", requiredShards: 10, status: "Foraging in underbrush (Tiny)", type: "tiny_ceratopsian", baseMood: "🌿 [HIDDEN IN BRUSH]", emoji: "🌿", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 12, name: "Pteranodon", zone: "Zone F: Coastal Cliff Aviary", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 3", rarity: "Rare", requiredShards: 15, status: "Soaring over cliffs", type: "pterosaur", baseMood: "🦅 [SOARING]", emoji: "🦅", moodState: "calm", trait: "Standard DNA", color: "#e74c3c" },
    { id: 13, name: "Dimorphodon", zone: "Zone F: Coastal Cliff Aviary", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 2", rarity: "Common", requiredShards: 10, status: "Fluttering rapidly (Flighty)", type: "small_flyer", baseMood: "🦇 [RAPID FLUTTER]", emoji: "🦇", moodState: "alert", trait: "Standard DNA", color: "#e74c3c" },
    { id: 14, name: "Mosasaurus", zone: "Zone G: Deep Water Lagoon", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 5", rarity: "Apex", requiredShards: 30, status: "Circling deep water", type: "aquatic", baseMood: "🌊 [SUB-SURFACE]", emoji: "🌊", moodState: "calm", trait: "Standard DNA", color: "#3498db" },
    { id: 15, name: "Baryonyx", zone: "Zone E: Wetland Delta", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 22, status: "Fishing in stream", type: "baryonyx", baseMood: "🐟 [HUNTING FISH]", emoji: "🐟", moodState: "alert", trait: "Standard DNA", color: "#e74c3c" },
    { id: 16, name: "Cryo-Raptor", zone: "Zone H: Glacial Tundra", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 22, status: "Prowling snowdrifts", type: "tundra", baseMood: "❄️ [CRYO-ACTIVE]", emoji: "❄️", moodState: "alert", trait: "Standard DNA", color: "#e74c3c" },
    { id: 17, name: "Spinosaurus", zone: "Zone G: Deep Water Lagoon", paddock: "Paddock Beta", diet: "Carnivore", threat: "Level 5", rarity: "Apex", requiredShards: 30, status: "Hunting near shoreline", type: "spinosaurus", baseMood: "⚡ [TERRITORIAL]", emoji: "⚡", moodState: "alert", trait: "Standard DNA", color: "#e74c3c" },
    { id: 18, name: "Allosaurus", zone: "Zone D: Volcanic Ridge", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 25, status: "Prowling rocky outcrop", type: "trex", baseMood: "🔥 [AGRESSIVE]", emoji: "🔥", moodState: "alert", trait: "Standard DNA", color: "#e74c3c" },
    { id: 19, name: "Carnotaurus", zone: "Zone D: Volcanic Ridge", paddock: "Paddock Beta", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 22, status: "Testing horned skull", type: "baryonyx", baseMood: "🐂 [SPRINT READY]", emoji: "🐂", moodState: "alert", trait: "Standard DNA", color: "#e74c3c" },
    { id: 20, name: "Corythosaurus", zone: "Zone E: Wetland Delta", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 1", rarity: "Common", requiredShards: 10, status: "Calling out by river", type: "hadrosaur", baseMood: "🎶 [HERD CALL]", emoji: "🎶", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 21, name: "Diplodocus", zone: "Zone A: Canopy / Jungle", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Whipping long tail", type: "longneck", baseMood: "🌴 [CANOPY BROWSING]", emoji: "🌴", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 22, name: "Dryosaurus", zone: "Zone A: Canopy / Jungle", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 1", rarity: "Common", requiredShards: 10, status: "Sprinting through ferns", type: "flocky", baseMood: "👀 [VIGILANT]", emoji: "👀", moodState: "alert", trait: "Standard DNA", color: "#2ecc71" },
    { id: 23, name: "Edmontosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Common", requiredShards: 10, status: "Grazing peacefully", type: "hadrosaur", baseMood: "🌿 [CALM GRAZING]", emoji: "🌿", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 24, name: "Euoplocephalus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Swishing club tail", type: "ankylosaur", baseMood: "🛡️ [ARMOR LOCKED]", emoji: "🛡️", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 25, name: "Giganotosaurus", zone: "Zone D: Volcanic Ridge", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 5", rarity: "Apex", requiredShards: 30, status: "Resting in clearing", type: "trex", baseMood: "👑 [DOMINANT APEX]", emoji: "👑", moodState: "calm", trait: "Standard DNA", color: "#e74c3c" },
    { id: 26, name: "Kentrosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Displaying shoulder spikes", type: "stegosaur", baseMood: "🌵 [SPIKE DISPLAY]", emoji: "🌵", moodState: "alert", trait: "Standard DNA", color: "#2ecc71" },
    { id: 27, name: "Metriacanthosaurus", zone: "Zone B: Heavy Security Pen", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 3", rarity: "Rare", requiredShards: 18, status: "Stalking enclosure fence", type: "baryonyx", baseMood: "⚡ [TESTING FENCE]", emoji: "⚡", moodState: "alert", trait: "Standard DNA", color: "#e74c3c" },
    { id: 28, name: "Mamenchisaurus", zone: "Zone A: Canopy / Jungle", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Reaching highest branches", type: "longneck", baseMood: "🌿 [REACHING CANOPY]", emoji: "🌿", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 29, name: "Pachycephalosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Headbutting training post", type: "tiny_ceratopsian", baseMood: "💥 [HEADBUTTING]", emoji: "💥", moodState: "agitated", trait: "Standard DNA", color: "#2ecc71" },
    { id: 30, name: "Pentaceratops", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Displaying massive frill", type: "ceratopsian", baseMood: "🛡️ [FRILL DISPLAY]", emoji: "🛡️", moodState: "alert", trait: "Standard DNA", color: "#2ecc71" },
    { id: 31, name: "Proceratosaurus", zone: "Zone B: Heavy Security Pen", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 2", rarity: "Common", requiredShards: 10, status: "Chittering in shadows", type: "swarm", baseMood: "🌑 [SHADOW STALKING]", emoji: "🌑", moodState: "calm", trait: "Standard DNA", color: "#e74c3c" },
    { id: 32, name: "Sauropelta", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Resting armored back", type: "ankylosaur", baseMood: "🛡️ [RESTING ARMORED]", emoji: "🛡️", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 33, name: "Sinoceratops", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Grazing with herd", type: "ceratopsian", baseMood: "🌿 [HERD GRAZING]", emoji: "🌿", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 34, name: "Suchomimus", zone: "Zone E: Wetland Delta", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 22, status: "Paddling in shallows", type: "spinosaurus", baseMood: "🌊 [PADDLING]", emoji: "🌊", moodState: "calm", trait: "Standard DNA", color: "#e74c3c" },
    { id: 35, name: "Therizinosaurus", zone: "Zone A: Canopy / Jungle", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 3", rarity: "Epic", requiredShards: 22, status: "Swishing giant claws", type: "trex", baseMood: "⚔️ [CLAW SWISHING]", emoji: "⚔️", moodState: "alert", trait: "Standard DNA", color: "#2ecc71" },
    { id: 36, name: "Torosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Low-frill grazing", type: "ceratopsian", baseMood: "🌱 [BROWSING]", emoji: "🌱", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 37, name: "Troodon", zone: "Zone B: Heavy Security Pen", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 3", rarity: "Rare", requiredShards: 18, status: "Night vision active", type: "frilled_raptor", baseMood: "🌙 [NOCTURNE ACTIVE]", emoji: "🌙", moodState: "alert", trait: "Standard DNA", color: "#e74c3c" },
    { id: 38, name: "Tuojiangosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Chewing dry brush", type: "stegosaur", baseMood: "🍂 [DRY BROWSING]", emoji: "🍂", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 39, name: "Tyrannotitan", zone: "Zone D: Volcanic Ridge", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 5", rarity: "Apex", requiredShards: 30, status: "Guarding territory", type: "trex", baseMood: "🔥 [TERRITORY GUARD]", emoji: "🔥", moodState: "alert", trait: "Standard DNA", color: "#e74c3c" },
    { id: 40, name: "Utahraptor", zone: "Zone B: Heavy Security Pen", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 22, status: "Testing reinforced wire", type: "raptor", baseMood: "⚡ [WIRE TESTING]", emoji: "⚡", moodState: "agitated", trait: "Standard DNA", color: "#e74c3c" },
    { id: 41, name: "Wuerhosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Low-slung browsing", type: "stegosaur", baseMood: "🌱 [LOW BROWSING]", emoji: "🌱", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 42, name: "Zuniceratops", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 1", rarity: "Common", requiredShards: 10, status: "Junior herd grazing", type: "tiny_ceratopsian", baseMood: "🍼 [JUNIOR GRAZING]", emoji: "🍼", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 43, name: "Albertosaurus", zone: "Zone D: Volcanic Ridge", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 22, status: "Patrolling ridge line", type: "baryonyx", baseMood: "🌋 [RIDGE PATROL]", emoji: "🌋", moodState: "alert", trait: "Standard DNA", color: "#e74c3c" },
    { id: 44, name: "Amargasaurus", zone: "Zone A: Canopy / Jungle", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Showing double-spined neck", type: "longneck", baseMood: "🌴 [SPINE DISPLAY]", emoji: "🌴", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 45, name: "Archaeornithomimus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Omnivore", threat: "Level 1", rarity: "Common", requiredShards: 10, status: "Scavenging near herd", type: "flocky", baseMood: "🦴 [SCAVENGING]", emoji: "🦴", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 46, name: "Atrociraptor", zone: "Zone B: Heavy Security Pen", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 22, status: "Aggressive pacing", type: "raptor", baseMood: "😡 [HIGH AGGRESSION]", emoji: "😡", moodState: "agitated", trait: "Standard DNA", color: "#e74c3c" },
    { id: 47, name: "Cearadactylus", zone: "Zone F: Coastal Cliff Aviary", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Gliding over surf", type: "small_flyer", baseMood: "🌊 [SURF GLIDING]", emoji: "🌊", moodState: "calm", trait: "Standard DNA", color: "#f1c40f" },
    { id: 48, name: "Ceratosaurus", zone: "Zone D: Volcanic Ridge", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 3", rarity: "Rare", requiredShards: 18, status: "Sniffing sulfur vents", type: "baryonyx", baseMood: "💨 [VENT SNIFFING]", emoji: "💨", moodState: "calm", trait: "Standard DNA", color: "#e74c3c" },
    { id: 49, name: "Chasmosaurus", zone: "Zone C: Plains / Savannah", paddock: "Paddock Alpha", diet: "Herbivore", threat: "Level 2", rarity: "Rare", requiredShards: 15, status: "Resting in shade", type: "ceratopsian", baseMood: "🌳 [SHADE RESTING]", emoji: "🌳", moodState: "calm", trait: "Standard DNA", color: "#2ecc71" },
    { id: 50, name: "Concavenator", zone: "Zone D: Volcanic Ridge", paddock: "Paddock Alpha", diet: "Carnivore", threat: "Level 4", rarity: "Epic", requiredShards: 22, status: "Showing back hump", type: "baryonyx", baseMood: "🌋 [HUMP DISPLAY]", emoji: "🌋", moodState: "alert", trait: "Standard DNA", color: "#e74c3c" }
];

let genomeVault = {};
dinoDatabase.forEach(d => {
    genomeVault[d.name] = { count: 0, required: d.requiredShards, rarity: d.rarity };
});

genomeVault["Brachiosaurus"].count = 10;

const hybridRecipes = {
    "Velociraptor-Tree Frog-Basilisk Lizard": "Indoraptor",
    "Tyrannosaurus Rex-Pit Viper-Wolverine": "Tyrannolochus",
    "Spinosaurus-Cuttlefish-Electric Eel": "Spinoceratops Aquaticus",
    "Stegosaurus-Gorgonian Coral-Scorpion": "Stegoceratops Venificus",
    "Triceratops-Gorgonian Coral-Wolverine": "Peloroplites Hybrid"
};

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
let splicedCount = 0;
let hybridCount = 0;

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
    } else if(tabId === 'genetics') {
        updateWuTargetSelect();
        updateSpliceCostDisplay();
        updateLabUI();
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
    updateLabUI();

    const sectorBtnContainer = document.getElementById('sectorFilterButtons');
    sectorBtnContainer.innerHTML = '';
    sectorList.forEach(sec => {
        let sBtn = document.createElement('button');
        sBtn.className = 'sector-btn';
        sBtn.style.whiteSpace = 'nowrap';
        sBtn.innerText = sec.split(':')[0];
        sBtn.onclick = () => openSectorDetail(sec);
        sectorBtnContainer.appendChild(sBtn);
    });

    updateWuTargetSelect();
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

function updateLabUI() {
    document.getElementById('labLevelNav').innerText = labLevel;
    document.getElementById('labLevelDisplay').innerText = labLevel;
    document.getElementById('stationLabLevel').innerText = labLevel;

    let hybridCard = document.getElementById('hybridCard');
    let lockText = document.getElementById('hybridLockText');

    if (labLevel >= 3) {
        hybridCard.classList.remove('locked-feature');
        lockText.style.display = 'none';
        document.getElementById('labLevelDesc').innerHTML = `Lab Level ${labLevel}: Gene Splicing and Named Hybridization are <strong style="color:var(--neon-green);">FULLY UNLOCKED</strong>.`;
    } else {
        hybridCard.classList.add('locked-feature');
        lockText.style.display = 'block';
        lockText.innerText = `🔒 LOCKED: Requires Lab Level 3 (Current: Level ${labLevel})`;
        document.getElementById('labLevelDesc').innerHTML = `Lab Level ${labLevel}: Gene Splicing is <strong style="color:var(--neon-green);">UNLOCKED</strong>. Hybridization requires Lab Level 3.`;
    }
    updateHybridNamePreview();
}

function upgradeLabLevel() {
    if (amber < 150 || dna < 200) {
        logMessage('ERROR: Insufficient Amber (150) or DNA (200) to upgrade lab level!');
        return;
    }
    amber -= 150;
    dna -= 200;
    labLevel++;
    document.getElementById('amberCount').innerText = amber;
    document.getElementById('dnaCount').innerText = dna;
    document.getElementById('miningAmberCount').innerText = amber;
    document.getElementById('miningDnaCount').innerText = dna;
    logMessage(`FACILITY UPGRADE: Dr. Wu's Lab upgraded to Level ${labLevel}!`);
    updateLabUI();
}

function updateWuTargetSelect() {
    const wuSelect = document.getElementById('wuTargetSelect');
    if(!wuSelect) return;
    wuSelect.innerHTML = '';
    let unlocked = getUnlockedDinos();
    unlocked.forEach(d => {
        let record = genomeVault[d.name];
        let opt = document.createElement('option');
        opt.value = d.id;
        opt.innerText = `${d.id}. ${d.name} [${d.rarity}] - ${record.count}/${record.required} Shards ✅`;
        wuSelect.appendChild(opt);
    });
    updateSpliceCostDisplay();
}

function updateSpliceCostDisplay() {
    const wuSelect = document.getElementById('wuTargetSelect');
    if (!wuSelect) return;
    let targetId = parseInt(wuSelect.value);
    let dino = dinoDatabase.find(d => d.id === targetId);
    if (dino) {
        let record = genomeVault[dino.name] || { required: dino.requiredShards };
        let cost = record.required * 3;
        document.getElementById('spliceCostLabel').innerText = `Target: ${dino.name} (${dino.rarity}) // Splice Cost: ${cost} DNA strands.`;
    }
}

function updateHybridNamePreview() {
    let base = document.getElementById('hybridBase').value;
    let d1 = document.getElementById('hybridDonor1').value;
    let d2 = document.getElementById('hybridDonor2').value;
    let key = `${base}-${d1}-${d2}`;
    let assignedName = hybridRecipes[key] || `${base}-Composite Hybrid`;
    document.getElementById('hybridNamePreview').innerText = assignedName;
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

        let rarityColor = 'var(--neon-green)';
        if (d.rarity === 'Rare') rarityColor = 'var(--neon-cyan)';
        if (d.rarity === 'Epic') rarityColor = 'var(--neon-amber)';
        if (d.rarity === 'Apex') rarityColor = 'var(--neon-alert)';

        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="sector-details">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong style="color: ${isCompleted ? 'var(--neon-green)' : 'var(--text-main)'};">${d.name}</strong>
                    <span style="font-size:0.65rem; color:${rarityColor}; border:1px solid ${rarityColor}; padding:1px 4px;">${d.rarity}</span>
                </div>
                <div class="sector-row"><span>Shards Collected:</span> <strong style="color:var(--neon-cyan);">${record.count} / ${record.required}</strong></div>
                <div class="sector-row"><span>Genome Completion:</span> <strong style="color:${isCompleted ? 'var(--neon-green)' : 'var(--neon-amber)'};">${percentage}% ${isCompleted ? '✅ UNLOCKED' : '🔒 LOCKED'}</strong></div>
                <p style="font-size:0.7rem; color:var(--text-main); margin-top:2px;">Sector: ${d.zone.split(':')[0]}</p>
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
            updateWuTargetSelect();

            if (node.isRare) {
                logMessage(`🌟 RARE PAYLOAD VAULTED: +${dnaGain} DNA for ${node.dinoName} (${node.rarity})!`);
            } else {
                logMessage(`VAULTED: Extracted DNA fragment for ${node.dinoName} (+${dnaGain} 🧪).`);
            }

            if (miningNodes.length === 0) {
                spawnMiningNodes();
            }
        } else {
            drillStability -= (15 + drillLevel * 4);
            document.getElementById('drillStability').innerText = Math.max(0, drillStability) + "%";
            logMessage('DRILL OVERHEAT WARNING: Struck bare rock! Thermal core spiking.');
            if (drillStability <= 0) {
                stopMiningSession();
                logMessage('CRITICAL OVERHEAT: Extraction rig seized up! Session aborted.');
            }
        }
    };

    function spawnMiningNodes() {
        miningNodes = [];
        let nodeCount = 4 + drillLevel;
        for (let i = 0; i < nodeCount; i++) {
            let randomDino = dinoDatabase[Math.floor(Math.random() * dinoDatabase.length)];
            let isRare = randomDino.rarity === 'Epic' || randomDino.rarity === 'Apex' || Math.random() < 0.2;
            miningNodes.push({
                x: Math.random() * (canvas.width - 60) + 30,
                y: Math.random() * (canvas.height - 80) + 30,
                radius: isRare ? 14 : 10,
                isRare: isRare,
                dinoName: randomDino.name,
                rarity: randomDino.rarity,
                requiredShards: randomDino.requiredShards,
                vx: (Math.random() - 0.5) * (1.5 + drillLevel * 0.4),
                vy: (Math.random() - 0.5) * (1.5 + drillLevel * 0.4)
            });
        }
    }

    function miningLoop() {
        ctx.fillStyle = '#020408';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (miningActive) {
            miningNodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;
                if (node.x < 20 || node.x > canvas.width - 20) node.vx *= -1;
                if (node.y < 20 || node.y > canvas.height - 20) node.vy *= -1;

                ctx.fillStyle = node.isRare ? '#f1c40f' : '#ffb000';
                ctx.beginPath(); ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2); ctx.fill();
                
                ctx.fillStyle = node.isRare ? '#e74c3c' : '#1abc9c';
                ctx.beginPath(); ctx.arc(node.x, node.y, node.radius - 4, 0, Math.PI * 2); ctx.fill();

                ctx.fillStyle = '#ffffff';
                ctx.font = '8px Courier New';
                ctx.fillText(node.isRare ? `⭐ ${node.dinoName}` : node.dinoName.substring(0, 5), node.x - 15, node.y - node.radius - 4);
            });

            ctx.strokeStyle = drillStability < 40 ? '#e74c3c' : '#2ecc71';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(miningX, miningY, 15, 0, Math.PI * 2);
            ctx.moveTo(miningX - 20, miningY); ctx.lineTo(miningX + 20, miningY);
            ctx.moveTo(miningX, miningY - 20); ctx.lineTo(miningX, miningY + 20);
            ctx.stroke();
        } else {
            ctx.fillStyle = '#ffb000';
            ctx.font = '12px Courier New';
            ctx.fillText("CLICK '[ ENGAGE EXTRACTION DRILL ]' TO START TIMED SESSION", 85, 150);
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
        if (extractionTimer <= 0) {
            stopMiningSession();
            logMessage('EXTRACTION COMPLETE: Timer expired. Session successfully concluded!');
            amber += 20 * drillLevel;
            dna += 50 * drillLevel;
            document.getElementById('amberCount').innerText = amber;
            document.getElementById('dnaCount').innerText = dna;
            document.getElementById('miningAmberCount').innerText = amber;
            document.getElementById('miningDnaCount').innerText = dna;
        }
    }, 1000);

    miningNodes = [];
    let nodeCount = 4 + drillLevel;
    for (let i = 0; i < nodeCount; i++) {
        let randomDino = dinoDatabase[Math.floor(Math.random() * dinoDatabase.length)];
        let isRare = randomDino.rarity === 'Epic' || randomDino.rarity === 'Apex';
        miningNodes.push({
            x: Math.random() * 550 + 50,
            y: Math.random() * 200 + 40,
            radius: isRare ? 14 : 10,
            isRare: isRare,
            dinoName: randomDino.name,
            rarity: randomDino.rarity,
            requiredShards: randomDino.requiredShards,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2
        });
    }
    logMessage(`MINING FACILITY: Timed drill session engaged! Level ${drillLevel} rig operating under rapid heat buildup.`);
}

function stopMiningSession() {
    miningActive = false;
    if (timerInterval) clearInterval(timerInterval);
}

function coolDownDrill() {
    drillStability = 100;
    document.getElementById('drillStability').innerText = "100%";
    logMessage('Thermal Flush executed. Drill rig core temperature reset.');
}

function upgradeDrillRig() {
    let cost = drillLevel * 100;
    if (amber < cost) {
        logMessage(`ERROR: Insufficient Amber reserves (${cost} required for Level ${drillLevel + 1})!`);
        return;
    }
    amber -= cost;
    drillLevel++;
    document.getElementById('amberCount').innerText = amber;
    document.getElementById('miningAmberCount').innerText = amber;
    document.getElementById('drillLevelText').innerText = drillLevel;
    document.getElementById('drillTier').innerText = `Level ${drillLevel}`;
    document.getElementById('tierTime').innerText = (25 + drillLevel * 5) + "s";
    document.getElementById('tierPayload').innerText = `${drillLevel}.0x`;
    logMessage(`FACILITY UPGRADE: Mining rig upgraded to Level ${drillLevel}! Longer extraction timer & higher payload multipliers active.`);
}

function executeGeneSplice() {
    let targetId = parseInt(document.getElementById('wuTargetSelect').value);
    let dino = dinoDatabase.find(d => d.id === targetId);
    if (!dino) return;

    let record = genomeVault[dino.name] || { count: 0, required: dino.requiredShards };
    if (record.count < record.required) {
        logMessage(`ERROR: Specimen ${dino.name} is locked in the Genome Vault! Complete 100% genome first.`);
        return;
    }

    let dynamicCost = record.required * 3;
    if (dna < dynamicCost) {
        logMessage(`ERROR: Insufficient DNA strands for gene splicing (${dynamicCost} required)!`);
        return;
    }
    dna -= dynamicCost;
    document.getElementById('dnaCount').innerText = dna;
    document.getElementById('miningDnaCount').innerText = dna;

    let trait = document.getElementById('wuTraitSelect').value;
    dino.trait = trait;
    splicedCount++;
    document.getElementById('splicedCount').innerText = splicedCount;
    logMessage(`Dr. Wu: Successfully spliced "${trait}" into ${dino.name} [ID: ${dino.id}] for ${dynamicCost} DNA.`);
    updateWuTargetSelect();
    renderBiosphereRegistry();
}

function breedNamedHybrid() {
    if (labLevel < 3) {
        logMessage('ERROR: Hybridization chamber is locked! Upgrade Lab to Level 3 first.');
        return;
    }
    if (amber < 200 || dna < 300) {
        logMessage('ERROR: Insufficient Amber (200) or DNA (300) for named hybridization!');
        return;
    }
    amber -= 200;
    dna -= 300;
    document.getElementById('amberCount').innerText = amber;
    document.getElementById('dnaCount').innerText = dna;
    document.getElementById('miningAmberCount').innerText = amber;
    document.getElementById('miningDnaCount').innerText = dna;

    let base = document.getElementById('hybridBase').value;
    let donor1 = document.getElementById('hybridDonor1').value;
    let donor2 = document.getElementById('hybridDonor2').value;
    let key = `${base}-${donor1}-${donor2}`;
    let hybridName = hybridRecipes[key] || `${base}-Composite Hybrid`;
    let newId = dinoDatabase.length + 1;

    let customColor = '#9b59b6';
    let newHybrid = {
        id: newId,
        name: hybridName,
        zone: "Zone B: Heavy Security Pen",
        paddock: "Paddock Beta",
        diet: "Carnivore",
        threat: "Level 5",
        rarity: "Apex",
        requiredShards: 30,
        status: "Apex Named Hybrid Stalking",
        type: "trex",
        baseMood: "🧬 [NAMED APEX HYBRID]",
        emoji: "🧬",
        moodState: "alert",
        trait: `${donor1} + ${donor2}`,
        color: customColor
    };

    dinoDatabase.push(newHybrid);
    genomeVault[hybridName] = { count: 30, required: 30, rarity: "Apex" };
    hybridCount++;
    document.getElementById('hybridCount').innerText = hybridCount;
    logMessage(`SUCCESS: Dr. Wu engineered legendary named hybrid "${hybridName}" [ID: ${newId}]! Assigned to Security Pen.`);
    initApp();
}

function evaluateCompatibility(dinoA, dinoB) {
    if (dinoA.id === dinoB.id) return { status: "Self", desc: "Same specimen", color: "var(--neon-green)" };
    if (dinoA.paddock !== dinoB.paddock) return { status: "🛡️ PADDOCK BUFFERED", desc: "Separated by sub-enclosure barrier.", color: "var(--neon-green)" };
    
    if (dinoA.diet === "Carnivore" && dinoB.diet === "Carnivore") {
        if (dinoA.threat === "Level 5" || dinoB.threat === "Level 5") {
            return { status: "⚠️ CRITICAL CLASH", desc: "Apex predator territorial hostility in same paddock!", color: "var(--neon-alert)" };
        }
        return { status: "⚡ TENSE", desc: "Carnivore rivalry in shared paddock.", color: "var(--neon-amber)" };
    }
    if (dinoA.diet === "Carnivore" && dinoB.diet !== "Carnivore") {
        return { status: "❌ FATAL HAZARD", desc: "Unbuffered prey proximity in shared paddock!", color: "var(--neon-alert)" };
    }
    if (dinoB.diet === "Carnivore" && dinoA.diet !== "Carnivore") {
        return { status: "❌ FATAL HAZARD", desc: "Unbuffered prey proximity in shared paddock!", color: "var(--neon-alert)" };
    }
    return { status: "✅ HARMONIOUS", desc: "Peaceful co-grazing compatibility.", color: "var(--neon-green)" };
}

function renderBiosphereRegistry() {
    const rosterGrid = document.getElementById('masterRosterGrid');
    rosterGrid.innerHTML = '';
    
    let unlockedDinos = getUnlockedDinos();
    document.getElementById('unlockedBiosphereCount').innerText = `Discovered & Unlocked: ${unlockedDinos.length} / ${dinoDatabase.length}`;

    unlockedDinos.forEach((d) => {
        let realIdx = dinoDatabase.findIndex(item => item.id === d.id);
        let rCard = document.createElement('div');
        rCard.className = 'card';
        
        let sectorOptions = '';
        sectorList.forEach(sec => {
            let selected = (sec === d.zone) ? 'selected' : '';
            sectorOptions += `<option value="${sec}" ${selected}>${sec}</option>`;
        });

        let paddockOptions = '';
        availablePaddocks.forEach(pad => {
            let selected = (pad === d.paddock) ? 'selected' : '';
            paddockOptions += `<option value="${pad}" ${selected}>${pad}</option>`;
        });

        rCard.innerHTML = `
            <div class="sector-details">
                <strong style="color: ${d.color || (d.diet === 'Carnivore' ? 'var(--neon-alert)' : 'var(--neon-green)')};">${d.name} [ID: ${d.id}]</strong>
                <p style="font-size:0.75rem; color:var(--text-main);">Sector: <strong>${d.zone}</strong></p>
                <p style="font-size:0.75rem; color:var(--neon-amber);">Paddock: <strong>${d.paddock}</strong></p>
                <p style="font-size:0.75rem; color:var(--neon-cyan);">Trait: <strong>${d.trait || 'Standard DNA'}</strong></p>
                
                <div style="margin-top: 4px;">
                    <label style="font-size: 0.65rem; color: var(--neon-cyan);">ASSIGN SECTOR:</label>
                    <select class="sector-select" onchange="updateDinoSector(${d.id}, this.value)">
                        ${sectorOptions}
                    </select>
                </div>

                <div style="margin-top: 4px;">
                    <label style="font-size: 0.65rem; color: var(--neon-amber);">ASSIGN PADDOCK:</label>
                    <select class="sector-select" style="color: var(--neon-amber);" onchange="updateDinoPaddock(${d.id}, this.value)">
                        ${paddockOptions}
                    </select>
                </div>

                <button class="sector-btn" style="margin-top:8px;" onclick="jumpToFeed(${realIdx})">🌐 Live Optic Feed</button>
            </div>
        `;
        rosterGrid.appendChild(rCard);
    });
}

function updateDinoSector(dinoId, newSector) {
    let dino = dinoDatabase.find(d => d.id === dinoId);
    if(dino) {
        dino.zone = newSector;
        logMessage(`Transport Matrix: ${dino.name} relocated to ${newSector}.`);
        renderBiosphereRegistry();
        if(document.getElementById('parkView').classList.contains('active')) loadOpticFeed(activeFeedIndex);
    }
}

function updateDinoPaddock(dinoId, newPaddock) {
    let dino = dinoDatabase.find(d => d.id === dinoId);
    if(dino) {
        dino.paddock = newPaddock;
        logMessage(`Paddock Partition: ${dino.name} moved to ${newPaddock}.`);
        renderBiosphereRegistry();
        if(document.getElementById('parkView').classList.contains('active')) loadOpticFeed(activeFeedIndex);
    }
}

function reassignSectorFromTelemetry(newSector) {
    let dino = dinoDatabase[activeFeedIndex];
    if(dino) {
        dino.zone = newSector;
        logMessage(`Telemetry Transfer: ${dino.name} moved to ${newSector}.`);
        document.getElementById('telemetrySector').innerText = dino.zone;
        renderBiosphereRegistry();
    }
}

function reassignPaddockFromTelemetry(newPaddock) {
    let dino = dinoDatabase[activeFeedIndex];
    if(dino) {
        dino.paddock = newPaddock;
        logMessage(`Telemetry Partition: ${dino.name} moved to ${newPaddock}.`);
        document.getElementById('telemetryPaddock').innerText = dino.paddock;
        renderBiosphereRegistry();
    }
}

function createPaddock() {
    let newPadName = `Paddock ${String.fromCharCode(65 + availablePaddocks.length)}`;
    availablePaddocks.push(newPadName);
    logMessage(`New sub-enclosure ${newPadName} established in ${activeSectorFilter}.`);
    openSectorDetail(activeSectorFilter);
}

function openSectorDetail(sectorName) {
    activeSectorFilter = sectorName;
    switchTab('sectorDetailView', null);
    renderSectorCensus(sectorName);
}

function renderSectorCensus(sectorName) {
    document.getElementById('selectedSectorTitle').innerText = `Paddocks & Census // ${sectorName}`;
    let unlockedDinos = getUnlockedDinos();
    let filteredDinos = unlockedDinos.filter(d => d.zone === sectorName);
    document.getElementById('sectorPopCount').innerText = `Registered Specimens: ${filteredDinos.length}`;

    let paddocksContainer = document.getElementById('paddocksContainer');
    paddocksContainer.innerHTML = '';
    availablePaddocks.forEach(pad => {
        let padDinos = filteredDinos.filter(d => d.paddock === pad);
        let padDiv = document.createElement('div');
        padDiv.className = 'paddock-card';
        padDiv.innerHTML = `<strong style="color:var(--neon-amber);">${pad}</strong> (${padDinos.length} specimens: ${padDinos.map(d => d.name).join(', ') || 'Empty'})`;
        paddocksContainer.appendChild(padDiv);
    });

    let summaryEl = document.getElementById('sectorCompatSummary');
    if (filteredDinos.length <= 1) {
        summaryEl.innerHTML = `<span style="color: var(--neon-green);">✅ Cohabitation Status: Optimal.</span>`;
    } else {
        let hasLethalClash = false;
        for (let i = 0; i < filteredDinos.length; i++) {
            for (let j = i + 1; j < filteredDinos.length; j++) {
                let comp = evaluateCompatibility(filteredDinos[i], filteredDinos[j]);
                if (comp.status.includes("FATAL") || comp.status.includes("CRITICAL")) hasLethalClash = true;
            }
        }
        if (hasLethalClash) {
            summaryEl.innerHTML = `<span style="color: var(--neon-alert);">❌ COHABITATION HAZARD: Unbuffered predators sharing enclosures with prey! Assign separate paddocks.</span>`;
        } else {
            summaryEl.innerHTML = `<span style="color: var(--neon-green);">✅ COHABITATION STATUS: Secure. Sub-enclosure paddock barriers are effectively isolating conflicting species.</span>`;
        }
    }

    const censusGrid = document.getElementById('sectorCensusGrid');
    censusGrid.innerHTML = '';
    filteredDinos.forEach(d => {
        let globalIdx = dinoDatabase.findIndex(item => item.id === d.id);
        let sectorMates = filteredDinos.filter(m => m.id !== d.id);
        let cohabHtml = `<div style="font-size:0.7rem; margin-top:4px; border-top:1px dashed var(--panel-border); padding-top:4px;"><strong style="color:var(--neon-cyan);">Cohabitation Notes:</strong>`;
        if(sectorMates.length === 0) {
            cohabHtml += `<div style="color:var(--neon-green);">Solo occupant in sector.</div>`;
        } else {
            sectorMates.forEach(mate => {
                let c = evaluateCompatibility(d, mate);
                cohabHtml += `<div style="display:flex; justify-content:space-between; margin-top:2px;"><span>vs ${mate.name} (${mate.paddock}):</span> <span style="color:${c.color};">${c.status}</span></div>`;
            });
        }
        cohabHtml += `</div>`;

        let cCard = document.createElement('div');
        cCard.className = 'card';
        cCard.innerHTML = `
            <div class="sector-details">
                <strong style="color: ${d.color || (d.diet === 'Carnivore' ? 'var(--neon-alert)' : 'var(--neon-green)')};">${d.name} [ID: ${d.id}]</strong>
                <div class="sector-row"><span>Paddock:</span> <strong style="color: var(--neon-amber);">${d.paddock}</strong></div>
                <div class="sector-row"><span>Diet:</span> <strong style="color: var(--neon-cyan);">${d.diet}</strong></div>
                <div class="sector-row"><span>Trait:</span> <strong style="color: var(--neon-cyan);">${d.trait || 'Standard DNA'}</strong></div>
                ${cohabHtml}
                <button class="sector-btn" style="margin-top:8px;" onclick="jumpToFeed(${globalIdx})">🌐 Live Optic Feed</button>
            </div>
        `;
        censusGrid.appendChild(cCard);
    });
}

function jumpToFeed(index) {
    activeFeedIndex = index;
    switchTab('parkView', null);
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    loadOpticFeed(activeFeedIndex);
}

function boostClimateVoltage(zoneNum) {
    let el = document.getElementById(`zone${zoneNum}Voltage`);
    if(el) {
        el.innerText = "60,000V (MAX)";
        el.style.color = "var(--neon-amber)";
    }
    logMessage(`Climate Zone ${zoneNum} perimeter voltage boosted to maximum.`);
}

function triggerDinoMood(action) {
    let dino = dinoDatabase[activeFeedIndex];
    if(action === 'feed') {
        dino.moodState = 'calm';
        dino.baseMood = '🥗 [FED & CONTENT]';
        dino.emoji = '🥗';
        logMessage(`${dino.name} has been fed in ${dino.paddock}.`);
    } else if(action === 'agitate') {
        dino.moodState = 'agitated';
        dino.baseMood = '⚡ [AGITATED / THREATENING]';
        dino.emoji = '⚡';
        logMessage(`WARNING: ${dino.name} in ${dino.paddock} is agitated!`);
    }
    loadOpticFeed(activeFeedIndex);
}

function loadOpticFeed(index) {
    activeFeedIndex = index;
    let currentDino = dinoDatabase[activeFeedIndex];

    document.getElementById('activeFeedTitle').innerText = `Isla Nublar Live Optics // ${currentDino.zone} [${currentDino.paddock}] - Specimen: ${currentDino.name}`;
    document.getElementById('telemetryName').innerText = currentDino.name;
    document.getElementById('telemetrySector').innerText = currentDino.zone;
    document.getElementById('telemetryPaddock').innerText = currentDino.paddock;
    document.getElementById('telemetryDiet').innerText = currentDino.diet;
    document.getElementById('telemetryStatusTag').innerText = currentDino.baseMood;
    document.getElementById('telemetryType').innerText = currentDino.type.toUpperCase() + " ANATOMY";
    document.getElementById('telemetryThreat').innerText = currentDino.threat;
    document.getElementById('telemetryTrait').innerText = currentDino.trait || "Standard DNA";

    let selectEl = document.getElementById('telemetrySectorSelect');
    selectEl.innerHTML = '';
    sectorList.forEach(sec => {
        let opt = document.createElement('option');
        opt.value = sec;
        opt.innerText = sec;
        if(sec === currentDino.zone) opt.selected = true;
        selectEl.appendChild(opt);
    });

    let padSelectEl = document.getElementById('telemetryPaddockSelect');
    padSelectEl.innerHTML = '';
    availablePaddocks.forEach(pad => {
        let opt = document.createElement('option');
        opt.value = pad;
        opt.innerText = pad;
        if(pad === currentDino.paddock) opt.selected = true;
        padSelectEl.appendChild(opt);
    });

    const canvas = document.getElementById('uniqueOpticCanvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');

    if(animationFrameId) cancelAnimationFrame(animationFrameId);

    let entityX = 180;
    let targetX = 420;
    let legCycle = 0;

    function renderOpticFeed() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if(currentDino.zone.includes("Canopy")) {
            ctx.fillStyle = '#030c05'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#061608'; ctx.fillRect(0, 0, canvas.width, 40);
        } else if(currentDino.zone.includes("Security")) {
            ctx.fillStyle = '#111316'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#181d22'; ctx.fillRect(0, 240, canvas.width, 110);
        } else if(currentDino.zone.includes("Plains")) {
            ctx.fillStyle = '#14180a'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#1e2410'; ctx.fillRect(0, 250, canvas.width, 100);
        } else if(currentDino.zone.includes("Volcanic")) {
            ctx.fillStyle = '#180505'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else if(currentDino.zone.includes("Wetland")) {
            ctx.fillStyle = '#040b12'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#081622'; ctx.fillRect(0, 220, canvas.width, 130);
        } else if(currentDino.zone.includes("Aviary")) {
            ctx.fillStyle = '#040d16'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else if(currentDino.zone.includes("Lagoon")) {
            ctx.fillStyle = '#020c18'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else if(currentDino.zone.includes("Tundra")) {
            ctx.fillStyle = '#0c1520'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
            ctx.fillStyle = '#040804'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.strokeStyle = '#1e331e'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(0, 260); ctx.lineTo(canvas.width, 260); ctx.stroke();

        if(Math.abs(entityX - targetX) < 2) targetX = Math.random() * (canvas.width - 180) + 70;
        if(Math.abs(targetX - entityX) > 0.5) {
            entityX += (targetX > entityX) ? 1.0 : -1.0;
            legCycle += 0.2;
        }

        let skinColor = currentDino.color || (currentDino.diet === 'Carnivore' ? '#e74c3c' : '#2ecc71');
        if(currentDino.moodState === 'agitated') skinColor = '#ff3333';

        ctx.save();
        ctx.translate(entityX, 0);
        let lOffset = Math.sin(legCycle) * 4;

        ctx.fillStyle = skinColor;
        ctx.fillRect(0, 195, 80, 45);
        ctx.fillStyle = '#1e331e';
        ctx.fillRect(10, 240, 12, 25 + lOffset);
        ctx.fillRect(50, 240, 12, 25 - lOffset);

        ctx.restore();

        ctx.font = '11px Courier New';
        ctx.fillStyle = currentDino.color || (currentDino.diet === 'Carnivore' ? '#ff3333' : '#2ecc71');
        ctx.fillText(`ID: ${currentDino.id} // ${currentDino.name.toUpperCase()}`, 15, 25);
        
        ctx.fillStyle = 'rgba(0,0,0,0.85)';
        ctx.fillRect(canvas.width - 55, 12, 42, 32);
        ctx.strokeStyle = currentDino.moodState === 'agitated' ? '#e74c3c' : '#ffb000';
        ctx.strokeRect(canvas.width - 55, 12, 42, 32);
        ctx.font = '18px sans-serif';
        ctx.fillText(currentDino.emoji, canvas.width - 45, 34);

        ctx.font = '11px Courier New';
        ctx.fillStyle = 'rgba(0,0,0,0.8)';
        ctx.fillRect(12, 32, 210, 20);
        ctx.strokeStyle = currentDino.moodState === 'agitated' ? '#e74c3c' : '#ffb000';
        ctx.strokeRect(12, 32, 210, 20);
        ctx.fillStyle = '#ffb000';
        ctx.fillText(`MOOD: ${currentDino.baseMood}`, 18, 47);

        if(document.getElementById('parkView').classList.contains('active')) {
            animationFrameId = requestAnimationFrame(renderOpticFeed);
        }
    }
    renderOpticFeed();
}

window.onload = initApp;
