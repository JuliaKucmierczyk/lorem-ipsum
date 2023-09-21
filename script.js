const text = [
  `Why don't scientists trust atoms? Because they make up everything!`,

  `Parallel lines have so much in common. It's a shame they'll never meet.`,

  `Why did the scarecrow win an award? Because he was outstanding in his field!`,

  `I used to play piano by ear, but now I use my hands.`,

  `How do you organize a space party? You "planet"!`,

  `Why don't skeletons fight each other? They don't have the guts!`,

  `Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!`,

  `I'm reading a book on anti-gravity. It's impossible to put down!`,

  `What did one wall say to the other wall? I'll meet you at the corner!`,

  `I used to be a baker, but I couldn't make enough dough.`,

  `Why did the bicycle fall over? Because it was two-tired!`,

  `Why did the tomato turn red? Because it saw the salad dressing!`,

  `How do you organize a space party? You "planet"!`,

  `Why did the math book look sad? Because it had too many problems.`,

  `What do you call a fish with no eyes? Fsh!`,

  `Why did the programmer go broke? Because he used up all his cache!`,

  `I told my wife she was drawing her eyebrows too high. She looked surprised!`,

  `What do you call a bear with no teeth? A gummy bear!`,

  `Why don't scientists trust atoms? Because they make up everything!`,

  `Parallel lines have so much in common. It's a shame they'll never meet.`,

  `Why did the scarecrow win an award? Because he was outstanding in his field!`,

  `I used to play piano by ear, but now I use my hands.`,

  `How do you organize a space party? You "planet"!`,

  `Why don't skeletons fight each other? They don't have the guts!`,

  `Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!`,
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value < 0 || value > text.length) {
    result.innerHTML = `<p class="result">Wrong value entered</p>`;
  } else {
    let slicedText = text.slice(0, value);
    slicedText = slicedText
      .map(function (paragraph) {
        return `<p class="result">${paragraph}</p>`;
      })
      .join("");
    result.innerHTML = slicedText;
  }
});
