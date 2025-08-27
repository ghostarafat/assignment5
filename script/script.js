let heart = 0;
let copy = 0;
let coin = 100;

// Heart Function
function handleHeart() {
  heart++;
  document.getElementById("heart-count").innerText = heart;
}

// Call Function
function handleCall(button) {
  if (coin >= 20) {
    const card = button.closest(".card");
    const service = card.querySelector(".card-title").innerText;
    const number = card.querySelector(".card-number").innerText;

    alert(`Calling ${service} ${number}...`);

    coin -= 20;
    document.getElementById("coin-count").innerText = coin;

    // history add ( with styled)
    const historyDiv = document.getElementById("history-list");
    const time = new Date().toLocaleTimeString();

    const newItem = document.createElement("div");
    newItem.className =
      "flex justify-between items-center text-sm p-3 bg-[#fafafa] rounded-lg shadow";

    newItem.innerHTML = `
  <div>
    <span class="block font-medium text-base">${service}</span>
    <span class="block text-base text-gray-500">${number}</span>
  </div>
  <span class="text-gray-500">${time}</span>
`;

    historyDiv.appendChild(newItem);
  } else {
    alert("You do not have sufficient coins.");
  }
}

// Copy Function
function handleCopy(button) {
  const card = button.closest(".card");

  const number = card.querySelector(".card-number").innerText;

  navigator.clipboard.writeText(number);

  alert(`${number} Number copied!`);
  copy++;
  document.getElementById("copy-count").innerText = copy;
}

// Clear History Function
function clearHistory() {
  document.getElementById("history-list").innerHTML = "";
}
