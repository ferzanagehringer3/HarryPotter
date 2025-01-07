<script>
    import IngredientCard from "$lib/components/IngredientCard.svelte";
    export let data;
  </script>
  
  <div class="ingredients-page">
    <!-- Partikel -->
    <div class="particles">
      {#each Array(30).fill(0) as _, i}
        <div
          class="particle"
          style="--x: {Math.random() * 100}%; --y: {Math.random() * 100}%; --delay: {Math.random() * 3}s; --duration: {3 + Math.random() * 4}s;"
        ></div>
      {/each}
    </div>
  
    <!-- Überschrift -->
    <header>
      <h1 class="page-title">Your Ingredients</h1>
      <a href="/ingredients/new" class="btn-create">Add Ingredient</a>
    </header>
  
    <!-- Ingredients-Liste -->
    <div class="ingredients-list">
      {#each data.ingredients as ingredient}
        <IngredientCard {ingredient} />
      {/each}
    </div>
  </div>
  
  <style>
    .ingredients-page {
      position: relative; /* Für Partikel */
      padding: 2rem;
      background-color: #1e1e2f;
      color: #f8f9fa;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden; /* Verhindert Überlauf der Partikel */
    }
  
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
      z-index: 1; /* Über Partikeln */
    }
  
    .page-title {
      font-size: 2.5rem;
      font-weight: bold;
      color: #ffd700;
      text-align: center;
      margin-bottom: 1rem;
    }
  
    .btn-create {
      display: inline-block;
      padding: 1rem 2rem;
      background-color: #6c5ce7;
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
      border-radius: 8px;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }
  
    .btn-create:hover {
      background-color: #4834d4;
    }
  
    .ingredients-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      width: 100%;
      max-width: 1200px;
      z-index: 1; /* Über Partikeln */
    }
  
    /* Partikel */
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
  