document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('dark-overlay');
  const btn = document.getElementById('lights-btn');
  const main = document.getElementById('main-content');
  const pressMeBtn = document.getElementById('press-me-btn');
  const catIntro = document.getElementById('cat-intro');

  btn.addEventListener('click', function() {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
      main.style.display = 'block';
      showStringLights();
    }, 800);
  });

  if (pressMeBtn) {
    pressMeBtn.addEventListener('click', function() {
      catIntro.style.display = 'none';
      showCurtainScene();
    });
  }

  function showCurtainScene() {
    // Placeholder: will add curtain scene here next
    const curtainDiv = document.createElement('div');
    curtainDiv.id = 'curtain-scene';
    curtainDiv.className = 'scene';
    curtainDiv.innerHTML = `
      <div class="curtain-container">
        <div class="curtain left"></div>
        <div class="curtain right"></div>
        <div class="curtain-message">Get ready for a surprise!</div>
      </div>
    `;
    main.appendChild(curtainDiv);
    // Animate curtains after short delay
    setTimeout(() => {
      curtainDiv.querySelector('.curtain.left').classList.add('open');
      curtainDiv.querySelector('.curtain.right').classList.add('open');
    }, 200);
    // After curtain opens, show party scene
    setTimeout(() => {
      curtainDiv.style.display = 'none';
      showPartyScene();
    }, 2400);
  }

  function showPartyScene() {
    // Show the party illustration image with a fade-in effect and add party decorations
    const main = document.getElementById('main-content');
    const partyDiv = document.createElement('div');
    partyDiv.id = 'party-scene';
    partyDiv.className = 'scene';
    partyDiv.style.position = 'relative';
    partyDiv.innerHTML = `
      <div class="party-message">Happy Birthday, Shivani! 🎉</div>
      <div class="static-balloons-container">
        <img class="static-balloon sb1" src="b1.png" alt="Balloon" />
        <img class="static-balloon sb2" src="b2.png" alt="Balloon" />
        <img class="static-balloon sb3" src="b3.png" alt="Balloon" />
        <img class="static-balloon sb4" src="b4.png" alt="Balloon" />
        <img class="static-balloon sb5" src="b5.png" alt="Balloon" />
        <img class="static-balloon sb6" src="b6.png" alt="Balloon" />
        <img class="static-balloon sb7" src="b7.png" alt="Balloon" />
      </div>
      <img class="party-illustration" src="happy-birthday-illustration-cute-kawaii-kittens-happy-smiley-face-cats-happy-birthday-card-vector.jpg" alt="Party Cats and Birthday" style="opacity:0; transition: opacity 1.2s; max-width: 80vw; max-height: 40vh; border-radius: 20px; box-shadow: 0 4px 20px #ffb6b944; margin-bottom: 1em;" />
      <img class="party-cake" src="sweet-birthday-cake-with-candles.png" alt="Chocolate Cake" />
      <button id="sing-btn" style="margin-top:1.5em; font-size:1.1em; padding:0.7em 1.8em; border-radius:20px; background:#ffd700; color:#222; border:none; box-shadow:0 2px 8px #ffb6b944; cursor:pointer;">Sing Happy Birthday</button>
    `;
    main.appendChild(partyDiv);
    setTimeout(() => {
      const img = partyDiv.querySelector('.party-illustration');
      if (img) img.style.opacity = 1;
    }, 100);
    // Add event for sing button (to be implemented next)
    setTimeout(() => {
      const singBtn = document.getElementById('sing-btn');
      if (singBtn) singBtn.addEventListener('click', singBirthdaySong);
    }, 500);
  }

  function singBirthdaySong() {
    const singBtn = document.getElementById('sing-btn');
    if (singBtn) singBtn.style.display = 'none';

    // Play birthday song and sync fireworks
    const audio = new Audio('audio.mp3');
    audio.onloadedmetadata = function() {
      const songDuration = audio.duration * 1000; // Get duration in milliseconds
      audio.play();

      // Show fireworks
      const fireworksContainer = document.createElement('div');
      fireworksContainer.id = 'fireworks-container';
      document.body.appendChild(fireworksContainer);
      for (let i = 0; i < 30; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        firework.style.animationDelay = Math.random() * (audio.duration - 1) + 's';
        firework.style.backgroundColor = [
          '#ffb6b9', '#ffd700', '#E6E6FA', '#ffffff', '#ff69b4', '#7ec8e3', '#a3e635', '#fbbf24', '#f472b6', '#38bdf8'
        ][Math.floor(Math.random() * 10)];
        fireworksContainer.appendChild(firework);
      }

      // After song/animation, show slide button
      setTimeout(() => {
        if (fireworksContainer) fireworksContainer.remove();
        const slideBtn = document.createElement('button');
        slideBtn.id = 'slide-btn';
        slideBtn.innerText = 'Slide to Open Your Card';
        slideBtn.onclick = showCardScene;
        
        const partyScene = document.getElementById('party-scene');
        if (partyScene) partyScene.appendChild(slideBtn);
      }, songDuration);
    };
  }

  function showCardScene() {
    // Hide party scene
    const partyScene = document.getElementById('party-scene');
    if (partyScene) partyScene.style.display = 'none';

    // Create and show the card scene
    const cardScene = document.createElement('div');
    cardScene.id = 'card-scene';
    cardScene.className = 'scene';
    cardScene.innerHTML = `
      <div class="card-container">
        <div class="birthday-card">
          <div class="card-front">
            <div class="card-big-title">HAPPY BIRTHDAY BEAUTIFUL 🥰😍</div>
            <div class="card-small-sub">flip to read the message</div>
            <div class="card-hearts">
              <span>❤️</span><span>❤️</span><span>❤️</span>
            </div>
          </div>
          <div class="card-inside">
            <h3 class="inside-title">❤️❤️❤️❤️❤️</h3>
            <p class="inside-text">
              On your special day, I hope you're surrounded by all the joy and laughter you bring to the world. 
              You make every moment brighter just by being you. Thank you for everything. you are the bestt 🥰
            </p>
            <p class="inside-text">Wishing you a day as beautiful as you are. ❤️</p>
            <div class="inside-signature">- Rocky</div>
          </div>
        </div>
      </div>
      <button id="flip-btn" class="flip-btn">Flip Card</button>
    `;
    document.getElementById('main-content').appendChild(cardScene);

    // Flip logic
    const card = cardScene.querySelector('.birthday-card');
    const flipBtn = cardScene.querySelector('#flip-btn');
    let isOpen = true;
    setTimeout(() => {
      if (card) card.classList.add('open');
    }, 500);

    function flipCard() {
      isOpen = !isOpen;
      if (card) card.classList.toggle('open', isOpen);
      if (flipBtn) flipBtn.textContent = isOpen ? 'Flip Back' : 'Flip Card';
    }
    if (flipBtn) flipBtn.addEventListener('click', flipCard);
    if (card) card.addEventListener('click', flipCard);
  }

  function showStringLights() {
    const lights = document.getElementById('string-lights');
    lights.innerHTML = '<div class="string-wire"></div>' +
      Array.from({length: 10}).map((_, i) => `<div class="bulb"></div>`).join('');
    lights.style.display = 'block';
  }
}); 