const jokeDiv = document.getElementById('joke');
const jokeButton = document.getElementById('new-joke-btn');

async function getJoke() {
  jokeDiv.style.opacity = '0.5';
  jokeDiv.textContent = 'Loading...';
  jokeButton.disabled = true;
  jokeButton.style.opacity = '0.7';

  try {
    const res = await fetch(
      'https://official-joke-api.appspot.com/random_joke'
    );
    const data = await res.json();
    
    // Add a small delay for smoother transition
    setTimeout(() => {
      jokeDiv.style.opacity = '1';
      jokeDiv.innerHTML = `${data.setup}<br><strong>${data.punchline}</strong>`;
      jokeButton.disabled = false;
      jokeButton.style.opacity = '1';
    }, 300);
  } catch (err) {
    jokeDiv.textContent = 'Oops! Something went wrong.';
    jokeDiv.style.opacity = '1';
    jokeButton.disabled = false;
    jokeButton.style.opacity = '1';
  }
}

jokeButton.addEventListener('click', getJoke);

// Load a joke when the page loads
window.onload = getJoke;