<script>
  let backgroundImage = "/images/magic-scroll.png";
  let centralGif = "/images/sparkle.gif";
</script>

<div class="about-container">

  <div class="sparkles">
    {#each Array(50).fill(0) as _, i}
      <div
        class="sparkle"
        style="--x: {Math.random() * 100}%; --y: {Math.random() * 100}%; --duration: {2 + Math.random() * 3}s; --delay: {Math.random() * 5}s;"
      ></div>
    {/each}
  </div>


  <div class="gif-container">
    <img src={centralGif} alt="Potion Animation" class="potion-gif" />
  </div>


  <div class="text-overlay">
    <h1 class="title">About the ZHAW Witch</h1>
    <p class="description">
      Brewing potions isn't just magic - it's a passion (and occasionally a bit of chaos). 
      From deciphering the secrets of mystical ingredients to crafting concoctions that would make even Snape proud, 
      You can explore the enchanting world of potions..
    </p>
    <p class="description">
      Knowledge is the real magic - whether it’s discovering the perfect recipe for Felix Felicis 
      or learning what not to mix (looking at you, exploding cauldrons).
    </p>
  </div>
</div>

<style>

  .about-container {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url('/images/magic-scroll.png') no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    overflow: hidden;
  }


  .sparkles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 1;
  }

  .sparkle {
    position: absolute;
    top: var(--y);
    left: var(--x);
    width: 10px;
    height: 10px;
    background-color: transparent;
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    animation: sparkle var(--duration) ease-in-out infinite;
    animation-delay: var(--delay);
    opacity: 0;
    box-shadow: 0 0 5px #ffd700, 0 0 10px #ffd700;
  }

  .sparkle:nth-child(odd) {
    background-color: #6c5ce7;
    box-shadow: 0 0 5px #6c5ce7, 0 0 10px #6c5ce7;
  }

  @keyframes sparkle {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
      transform: scale(1.5);
    }
    100% {
      opacity: 0;
      transform: scale(0.5);
    }
  }

  .gif-container {
    position: relative;
    z-index: 2;
    margin-bottom: 2rem;
  }

  .potion-gif {
    width: 300px;
    height: auto;
    animation: pulse 3s infinite;
  }

  .text-overlay {
    position: relative;
    text-align: center;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  }

  .title {
    font-size: 3rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 1rem;
    text-shadow: 0 0 15px #ffd700;
  }

  .description {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 1rem;
    color: #f1f1f1;
    text-shadow: 0 0 10px #000;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
