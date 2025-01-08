<script>
    import IngredientCard from "$lib/components/IngredientCard.svelte";
    export let data;
  </script>
  
  <div class="ingredients-page">

    <div class="particles">
      {#each Array(30).fill(0) as _, i}
        <div
          class="particle"
          style="--x: {Math.random() * 100}%; --y: {Math.random() * 100}%; --delay: {Math.random() * 3}s; --duration: {3 + Math.random() * 4}s;"
        ></div>
      {/each}
    </div>
  

    <header>
      <h1 class="page-title">Your Ingredients</h1>
      <a href="/ingredients/new" class="btn-create">Add Ingredient</a>
    </header>
  

    <div class="ingredients-list">
      {#each data.ingredients as ingredient}
        <IngredientCard {ingredient} />
      {/each}
    </div>
  </div>
  
  <style>
    .ingredients-page {
      position: relative; 
      padding: 2rem;
      background-color: #1e1e2f;
      color: #f8f9fa;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
    }
  

  
    .page-title {
      font-size: 2.5rem;
      font-weight: bold;
      color: #ffd700;
      text-align: center;
      margin-bottom: 1rem;
    }
  
    
    .ingredients-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      width: 100%;
      max-width: 1200px;
      z-index: 1;
    }
  
 
    .particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
    }
  
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
  </style>
  