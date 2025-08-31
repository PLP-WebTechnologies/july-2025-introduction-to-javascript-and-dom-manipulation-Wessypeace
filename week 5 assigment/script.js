// =============================
// Part 1: Basics
// =============================
function submitPoem() {
  let poem = document.getElementById("poemInput").value;
  let feedback = document.getElementById("feedback");

  // Conditional check
  if (poem.trim() === "") {
    feedback.textContent = "❌ Please write something before submitting.";
  } else {
    feedback.textContent = "✅ Poem submitted!";
    addPoemToList(poem);
  }
}

// =============================
// Part 2: Functions
// =============================

// Function 1: Count words
function countWords() {
  let poem = document.getElementById("poemInput").value;
  let words = poem.trim().split(/\s+/).filter(word => word !== "");
  document.getElementById("wordCount").textContent = "Word Count: " + words.length;
}

// Function 2: Format poem (capitalize first letter of each line)
function formatPoem() {
  let poem = document.getElementById("poemInput").value;
  let lines = poem.split("\n");
  let formatted = lines.map(line => line.charAt(0).toUpperCase() + line.slice(1)).join("\n");
  document.getElementById("poemInput").value = formatted;
}

// =============================
// Part 3: Loops
// =============================
function addPoemToList(poem) {
  let list = document.getElementById("poemList");

  // Loop through lines of the poem
  let li = document.createElement("li");
  let lines = poem.split("\n");

  let formattedLines = "";
  for (let i = 0; i < lines.length; i++) {
    formattedLines += lines[i] + " | ";
  }

  li.textContent = formattedLines;
  list.appendChild(li);
}

// =============================
// Part 4: DOM Manipulation
// =============================

// Example 1: Toggle poetry tip
document.getElementById("toggleTipBtn").addEventListener("click", function() {
  document.getElementById("poetryTip").classList.toggle("hidden");
});

// Example 2: Change page title dynamically on load
window.onload = function() {
  document.querySelector("h1").textContent = "My Poetry Expand 2.0 🎭";
};

// Example 3: Clear feedback when typing new text
document.getElementById("poemInput").addEventListener("input", function() {
  document.getElementById("feedback").textContent = "";
});
