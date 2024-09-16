document.getElementById("start-game").addEventListener("click", function() {
    window.location.href = "path1.html"; // First path of the game
});

// Game Logic: Decision trees

const decisions = {
    path1: {
        story: "You hear a strange sound in the basement. What do you do?",
        options: [
            { text: "Investigate the sound", path: "path2" },
            { text: "Ignore it and go to bed", path: "ending1" },
            { text: "Call a friend for help", path: "path3" },
            { text: "Lock the basement door", path: "ending2" }
        ]
    },
    path2: {
        story: "You descend into the basement. The air is cold and still. There's a shadow in the corner. What do you do?",
        options: [
            { text: "Approach the shadow", path: "ending3" },
            { text: "Turn on the light", path: "path4" },
            { text: "Run back upstairs", path: "ending4" },
            { text: "Shout to see if anyone responds", path: "path5" }
        ]
    },
    // Continue adding paths with multiple choices and ending possibilities
};

// Function to handle transitions
function loadStory(pathId) {
    const storyNode = decisions[pathId];
    document.getElementById("story").innerText = storyNode.story;
    
    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = ""; // Clear previous options
    
    storyNode.options.forEach(function(option) {
        const button = document.createElement("button");
        button.innerText = option.text;
        button.addEventListener("click", function() {
            if (option.path.includes("ending")) {
                window.location.href = option.path + ".html"; // Go to an ending
            } else {
                loadStory(option.path); // Load the next part of the story
            }
        });
        optionsElement.appendChild(button);
    });
}

// Load the first story when the page is loaded
window.onload = function() {
    const currentPath = window.location.href.split("/").pop().replace(".html", "");
    if (decisions[currentPath]) {
        loadStory(currentPath);
    }
};
