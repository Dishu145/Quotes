const quotes = [
    "Believe in yourself and all that you are.",
    "The best way to predict the future is to create it.",
    "Every moment is a fresh beginning.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Act as if what you do makes a difference. It does.",
    "It is not that I'm  so smart, But I stay with the questions much longer.",
    "Time doesn't heal emotional pain, you need to learn how to let go",
    "Tell me and I forget, teach me and I may remember, involve me and I learn.",
    "Happiness is not something ready made, It comes from your own actions.",
    "Count your age by friends, not years. Count your life by smiles, not tears."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}