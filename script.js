function createBlock() {
  const block = document.createElement("div");
  block.classList.add("block");
  block.style.height = prompt("Enter block height (in pixels):") + "px";
  document.getElementById("blocks").appendChild(block);
}

// Function to calculate trapped water
function calculateWater() {
  const blocks = document.querySelectorAll(".block");
  const heights = Array.from(blocks).map(
    (block) => parseInt(block.style.height, 10) || 0
  );

  let waterTrapped = 0;
  const n = heights.length;
  let position = 1;
  let left = 55;
  for (let i = 1; i < n - 1; i++) {
    let leftMax = heights[i];
    for (let j = 0; j < i; j++) {
      leftMax = Math.max(leftMax, heights[j]);
    }

    let rightMax = heights[i];
    for (let j = i + 1; j < n; j++) {
      rightMax = Math.max(rightMax, heights[j]);
    }

    // Create a new child element
    const newChild = document.createElement("div");
    newChild.classList.add("water");
    console.log(Math.min(leftMax, rightMax) - heights[i]);
    newChild.style.height = Math.min(leftMax, rightMax) - heights[i] + "px";
    newChild.style.bottom = heights[i] + "px";
    newChild.style.left = left + "px";
    console.log(newChild.style.height);
    // Get the container
    const container = document.getElementById("blocks");

    console.log(container.children[position]);

    // Specify the position (1-based index) where you want to insert the new child

    // Insert the new child before the element at the specified position
    container.insertBefore(newChild, container.children[position].nextSibling);
    position = position + 2;
    left = left + 50;

    console.log(Math.min(leftMax, rightMax) - heights[i]);
    waterTrapped += Math.min(leftMax, rightMax) - heights[i];
  }

  document.getElementById(
    "result"
  ).innerText = `Water trapped: ${waterTrapped} units`;
}

// Create individual blocks based on user input
for (let i = 0; i < 10; i++) {
  createBlock();
}
