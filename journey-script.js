// Game State
let currentStage = 1;
const maxStages = 6;
let isMoving = false;

// DOM Elements
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const roomContainer = document.getElementById('roomContainer');
const stageTitle = document.getElementById('current-stage');
const publishBtn = document.getElementById('publishBtn');

// Stage Titles
const stageTitles = {
    1: "Stage 1: Brain Storming",
    2: "Stage 2: Design",
    3: "Stage 3: Choosing the Name",
    4: "Stage 4: Selecting VS Code",
    5: "Stage 5: Coding (HTML, CSS, JS)",
    6: "Stage 6: Testing"
};

// Initialize Game
function initGame() {
    createRooms();
    updateStageTitle();
    setupEventListeners();
}

// Create Rooms
function createRooms() {
    for (let i = 1; i <= maxStages; i++) {
        const room = document.createElement('div');
        room.className = 'room';
        
        // Add workstation
        const workstation = document.createElement('div');
        workstation.className = 'workstation';
        
        // Add computers
        const computer1 = document.createElement('div');
        computer1.className = 'computer';
        workstation.appendChild(computer1);
        
        const computer2 = document.createElement('div');
        computer2.className = 'computer';
        workstation.appendChild(computer2);
        
        // Add AI character in first room
        if (i === 1) {
            const ai = document.createElement('div');
            ai.className = 'ai-character';
            room.appendChild(ai);
        }
        
        room.appendChild(workstation);
        roomContainer.appendChild(room);
    }
}

// Setup Event Listeners
function setupEventListeners() {
    document.addEventListener('keydown', handleKeyPress);
    publishBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

// Handle Key Press
function handleKeyPress(e) {
    if (isMoving) return;
    
    switch(e.key) {
        case 'ArrowRight':
            if (currentStage < maxStages) {
                moveCharacters('right');
            }
            break;
        case 'ArrowLeft':
            if (currentStage > 1) {
                moveCharacters('left');
            }
            break;
    }
}

// Move Characters
function moveCharacters(direction) {
    if (isMoving) return;
    isMoving = true;
    
    // Add walking animation
    player1.classList.add('walking');
    player2.classList.add('walking');
    
    // Set character direction
    const scaleX = direction === 'right' ? 1 : -1;
    player1.style.transform = `scaleX(${scaleX})`;
    player2.style.transform = `scaleX(${scaleX})`;
    
    // Calculate new position
    const moveAmount = direction === 'right' ? -800 : 800;
    const currentPosition = parseInt(roomContainer.style.transform.replace('translateX(', '').replace('px)', '') || 0);
    const newPosition = currentPosition + moveAmount;
    
    // Update stage
    currentStage += direction === 'right' ? 1 : -1;
    
    // Move rooms
    roomContainer.style.transform = `translateX(${newPosition}px)`;
    
    // Update UI
    updateStageTitle();
    
    // Reset movement after animation
    setTimeout(() => {
        player1.classList.remove('walking');
        player2.classList.remove('walking');
        isMoving = false;
        
        // Show/hide publish button
        publishBtn.style.display = currentStage === maxStages ? 'inline-block' : 'none';
    }, 500);
}

// Update Stage Title
function updateStageTitle() {
    stageTitle.textContent = stageTitles[currentStage];
}

// Start game when page loads
window.addEventListener('load', initGame);
