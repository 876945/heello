const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const form = document.getElementById('accessForm');
const errorMsg = document.getElementById('errorMsg');
const subscribeCheck = document.querySelector('.subscribe-check');

// Show form if subscribed
yesBtn.addEventListener('click', () => {
    subscribeCheck.style.display = 'none';
    form.style.display = 'flex';
});

// Alert if not subscribed
noBtn.addEventListener('click', () => {
    alert("Please subscribe to the channel first!");
});

// Form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const scode = document.getElementById('scode').value.trim();
    if(scode === "SBOSS#12"){
        window.location.href = "bot.html"; // redirect if correct
    } else {
        errorMsg.style.display = 'block';
    }
});
