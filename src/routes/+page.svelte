  
  <div class="homepage">
    <!-- Schwebende Partikel -->
    <div class="particles">
      {#each Array(30).fill(0) as _, i}
        <div
          class="particle"
          style="--x: {Math.random() * 100}%; --y: {Math.random() * 100}%; --delay: {Math.random() * 3}s; --duration: {3 + Math.random() * 4}s;"
        ></div>
      {/each}
    </div>
  
    <!-- Header -->
    <header>
      <h1 class="title">Welcome to your magical collection!</h1>
      <p class="subtitle">Discover potions and ingredients for your adventures!</p>
    </header>
  
    <!-- GIF -->
    <div class="gif-container">
      <img src="/images/potion.gif" alt="Magischer Kessel" class="potion-gif" />
    </div>
  
    <!-- Buttons zu den Seiten -->
    <div class="navigation">
      <a href="/potions" class="btn">Discover Potions</a>
      <a href="/ingredients" class="btn">Discover Ingredients</a>
    </div>
  </div>
  
  <style>
    /* Allgemeine Seite */
    .homepage {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;
      background-color: #1e1e2f;
      color: #f8f9fa;
      min-height: 100vh;
      overflow: hidden;
    }
  
    /* Partikel-Container */
    .particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
    }
  
    /* Partikel */
    .particle {
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #ffd700;
      border-radius: 50%;
      animation: float var(--duration) ease-in-out infinite;
      animation-delay: var(--delay);
      top: var(--y);
      left: var(--x);
      opacity: 0.8;
    }
  
    .particle:nth-child(odd) {
      background-color: #6c5ce7;
    }
  
    /* Partikel-Animation */
    @keyframes float {
      0% {
        transform: translateY(0);
        opacity: 1;
      }
      50% {
        transform: translateY(-20px) translateX(-10px);
        opacity: 0.5;
      }
      100% {
        transform: translateY(-100vh);
        opacity: 0;
      }
    }
  
    /* Header */
    header {
      margin-bottom: 2rem;
      z-index: 1;
    }
  
    .title {
      font-size: 3rem;
      font-weight: bold;
      color: #ffd700;
      margin-bottom: 1rem;
      animation: fadeInDown 2s ease;
    }
  
    .subtitle {
      font-size: 1.5rem;
      color: #ecf0f1;
      animation: fadeInUp 2s ease;
    }
  
    /* GIF */
    .gif-container {
      margin: 2rem 0;
      animation: pulse 3s infinite;
      z-index: 1;
    }
  
    .potion-gif {
      width: 300px;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
  
    /* Buttons */
    .navigation {
      margin-top: 2rem;
      display: flex;
      gap: 1rem;
      z-index: 1;
    }
  
    .btn {
      display: inline-block;
      padding: 1rem 2rem;
      background-color: #6c5ce7;
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
      border-radius: 8px;
      text-decoration: none;
      transition: transform 0.3s ease, background-color 0.3s ease;
    }
  
    .btn:hover {
      background-color: #4834d4;
      transform: scale(1.1);
    }
  
    /* Animationen */
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }
  </style>
  