const boardText = document.getElementById("boardText");
const filePicker = document.getElementById("filePicker");

const fallbackMessage =
  "Could not load sample.txt automatically.\n\nUse the file picker to load any .txt file.";

async function loadSampleText() {
  try {
    const response = await fetch("sample.txt", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    boardText.textContent = await response.text();
  } catch {
    boardText.textContent = fallbackMessage;
  }
}

filePicker.addEventListener("change", async (event) => {
  const [file] = event.target.files;

  if (!file) {
    return;
  }

  boardText.textContent = await file.text();
});

loadSampleText();
