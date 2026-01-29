// 1st Project
// ==============================
// 1. Select elements from HTML
// ==============================
const result = document.getElementById("NewAge"); // where result will be shown
const form = document.getElementById("MyForm"); // form element

// Hide result at start
result.style.display = "none";

// Show form initially
form.style.display = "inline-block";

// ==============================
// 2. Form submit event
// ==============================
form.addEventListener("submit", function (e) {
  // Stop page reload
  e.preventDefault();

  // Get age input value
  const ageValue = document.getElementById("ageValue").value;

  // Just for checking in console
  console.log("your age is " + ageValue);

  // Variable to store result category
  let newValue;

  // ==============================
  // 3. Age condition logic
  // ==============================
  if (ageValue <= 8) {
    newValue = "child";
  } else if (ageValue <= 18) {
    newValue = "teenager";
  } else if (ageValue <= 35) {
    newValue = "adult";
  } else {
    newValue = "senior";
  }

  // ==============================
  // 4. Show result & hide form
  // ==============================
  result.style.display = "inline-flex";
  form.style.display = "none";

  // Display result text
  result.innerHTML = newValue;
});
// ==============================
// 1️⃣ Select the form
// ==============================
const profileForm = document.getElementById("profileForm");

// ==============================
// 2️⃣ Form submit event
// ==============================
profileForm.addEventListener("submit", function (e) {
  e.preventDefault(); // ❌ page reload বন্ধ

  // Image input
  const imageInput = document.getElementById("image");
  const imageFile = imageInput.files[0];

  // Normal inputs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  // ==============================
  // 3️⃣ Validation
  // ==============================
  if (!name || !email || !age || !gender || !imageFile) {
    alert("Please fill all fields and select image");
    return; // ⛔ এখানেই থেমে যাবে
  }

  // ==============================
  // 4️⃣ Image → base64 using FileReader
  // ==============================
  const reader = new FileReader();

  reader.onload = function () {
    // Create profile object
    const profileData = {
      name: name,
      email: email,
      age: age,
      gender: gender,
      image: reader.result, // ✅ base64 image
    };

    // Get old profiles
    const profiles = getProfiles();

    // Add new profile
    profiles.push(profileData);

    // Save back to localStorage
    localStorage.setItem("profileDataBox", JSON.stringify(profiles));

    // Show cards
    renderProfiles();

    // Reset form
    profileForm.reset();
  };

  // 🔥 This line converts image to base64
  reader.readAsDataURL(imageFile);
});

// ==============================
// 5️⃣ Get profiles from localStorage
// ==============================
function getProfiles() {
  return JSON.parse(localStorage.getItem("profileDataBox")) || [];
}

// ==============================
// 6️⃣ Render profile cards with delete
// ==============================
function renderProfiles() {
  const profileRow = document.querySelector(".profileRow");
  const profiles = getProfiles();

  // Clear old cards
  profileRow.innerHTML = "";

  // Loop profiles array
  profiles.forEach((profile, index) => {
    // Create card container
    const card = document.createElement("div");
    card.className = "profileCard card mt-4 shadow";
    card.innerHTML = `
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5>Profile ${index + 1}</h5>
        <span class="removedBtn" style="cursor:pointer; color:red;">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5m1.447 11v-6m5 6v-6"/></svg>
        </span>
      </div>
      <div class="card-body">
        <img src="${profile.image}" class="rounded-circle mb-3" width="120" height="120">
        <p><strong>Name:</strong> ${profile.name}</p>
        <p><strong>Email:</strong> ${profile.email}</p>
        <p><strong>DOB:</strong> ${profile.age}</p>
        <p><strong>Gender:</strong> ${profile.gender}</p>
      </div>
    `;

    // Append card to container
    profileRow.appendChild(card);

    // Add delete event
    const deleteBtn = card.querySelector(".removedBtn");
    deleteBtn.addEventListener("click", function () {
      profiles.splice(index, 1); // remove from array
      localStorage.setItem("profileDataBox", JSON.stringify(profiles)); // save again
      renderProfiles(); // re-render cards
    });
  });
}

// ==============================
// 7️⃣ Load profiles on page refresh
// ==============================
window.addEventListener("load", renderProfiles);

// quantity increase decrease button logic

// ==============================
// 1️⃣ Select elements
// ==============================
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const countVal = document.getElementById("countVal");
// ==============================
// 2️⃣ Initial value
// ==============================
let count = 0;
// ==============================
// 3️⃣ Increase button
// ==============================
plusBtn.addEventListener("click", () => {
  count++;
  console.log(countVal);
  if (count <= 10) {
    countVal.innerHTML = count;
    minusBtn.classList.remove("disabled");
  }
  if (count > 8) {
    countVal.style.color = "green";
  }
  if (count >= 10) {
    plusBtn.classList.add("disabled");
  }
});
// ==============================
// 4️⃣ Decrease button
// ==============================
minusBtn.addEventListener("click", () => {
  count--;
  console.log(countVal);
  if (count < 0) {
    count = 0;
    minusBtn.classList.add("disabled");
  }
  if (count <= 10) {
    plusBtn.classList.remove("disabled");
  }
  countVal.innerHTML = count;
});
// ==============================
// 5️⃣ Reset button
// ==============================
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  count = 0;
  countVal.innerHTML = count;
});
// quantity increase decrease button logic end

// product color Select and color change

// 1. Make sure these names match exactly what you use below
const secondsContainer = document.querySelector(".seconds");
const minutesContainer = document.querySelector(".minutes");
const minuteText = document.querySelector(".minute");
const hourText = document.querySelector(".hour");
const clockBtn = document.querySelector(".clockBtn");
let customDialClockOuter = document.querySelector(".customDialClockOuter");
clockBtn.addEventListener("click", (e) => {
  // This stops the click from "bubbling" up to the body
  e.stopPropagation();

  customDialClockOuter.classList.add("active");
});

document.body.addEventListener("click", (e) => {
  customDialClockOuter.classList.remove("active");
});
// 1. Create the spikes for both dials
for (let s = 0; s < 60; s++) {
  let mSpikeEl = document.createElement("i");
  let sSpikeEl = document.createElement("i");

  mSpikeEl.className = "spike";
  sSpikeEl.className = "spike";

  mSpikeEl.style.setProperty("--rotate", `${6 * s}deg`);
  sSpikeEl.style.setProperty("--rotate", `${6 * s}deg`);

  mSpikeEl.setAttribute("data-i", s);
  sSpikeEl.setAttribute("data-i", s);

  secondsContainer.append(sSpikeEl);
  minutesContainer.append(mSpikeEl);
}

function getTime() {
  const date = new Date();
  const s = date.getSeconds();
  const m = date.getMinutes();
  const h = date.getHours();

  // Display time in the center
  hourText.textContent = h.toString().padStart(2, "0");
  minuteText.textContent = m.toString().padStart(2, "0");

  // Handle the transition jump at 0 seconds
  if (s === 0) {
    secondsContainer.classList.add("stop-anim");
  } else {
    secondsContainer.classList.remove("stop-anim");
  }

  // Handle the transition jump at 0 minutes
  if (m === 0) {
    minutesContainer.classList.add("stop-anim");
  } else {
    minutesContainer.classList.remove("stop-anim");
  }

  // Update rotation variables (6 degrees per unit)
  secondsContainer.style.setProperty("--dRotate", `${6 * s}deg`);
  minutesContainer.style.setProperty("--dRotate", `${6 * m}deg`);
}

// Start the clock
setInterval(getTime, 1000);
getTime();
