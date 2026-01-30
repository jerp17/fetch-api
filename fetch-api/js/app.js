const btn = document.getElementById("loadBtn");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const loadingText = document.getElementById("loading");
const errorText = document.getElementById("error");

btn.addEventListener("click", fetchQuote);

async function fetchQuote() {
  // Show loading
  loadingText.classList.remove("hidden");
  errorText.textContent = "";
  quoteText.textContent = "";
  authorText.textContent = "";

  try {
    const response = await fetch("https://dummyjson.com/quotes/random");

    // Check HTTP error
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    quoteText.textContent = `"${data.quote}"`;
    authorText.textContent = `— ${data.author}`;

  } catch (error) {
    errorText.textContent = "Something went wrong. Try again!";
    console.error(error);
  } finally {
    // Hide loading
    loadingText.classList.add("hidden");
  }
}