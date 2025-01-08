<script>
  export let data;
  let ingredient = data.ingredient;
  let usedInPotions = data.usedInPotions;
</script>

<!-- Back Button -->
<a href="/ingredients" class="btn btn-back">Back to Ingredients</a>

<h1 class="detail-title">{ingredient.name}</h1>

<div class="details-section">
  <div class="left-section">
    <img class="ingredient-img" src={ingredient.image || "/images/placeholder_ingredient.png"} alt="{ingredient.name}" />
  </div>

  <div class="right-section">
    <p><span class="info-title">Origin:</span> <span class="info-value">{ingredient.origin}</span></p>
    <p><span class="info-title">Rarity:</span> <span class="info-value">{ingredient.rarity}</span></p>

    <h2 class="used-in-title">Used in Potions</h2>
    <ul class="used-in-list">
      {#each usedInPotions as potion}
        <li class="used-in-item">
          <a href={`/potions/${potion._id}`} class="potion-link">{potion.name}</a>
        </li>
      {/each}
    </ul>

    <!-- Action Buttons -->
    <div class="button-group">
      <a href={`/ingredients/${ingredient._id}/edit`} class="btn btn-edit">Update Ingredient</a>
      <form method="POST" action="?/delete" class="delete-form">
        <input type="hidden" name="id" value={ingredient._id} />
        <button type="submit" class="btn btn-delete">Delete Ingredient</button>
      </form>
    </div>
  </div>
</div>

<style>

  .ingredient-img {
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }

  .right-section {
    flex: 2;
  }

  .info-title {
    font-weight: bold;
    color: #6c5ce7; 
    font-size: 1.2rem;
  }

  .info-value {
    color: #ffffff;
    font-style: italic;
    font-size: 1.1rem;
  }

  .used-in-title {
    margin-top: 2rem;
    font-size: 1.8rem;
    font-weight: bold;
    color: #3498db;
  }

  .used-in-list {
    list-style-type: none;
    padding: 0;
    margin: 1.5rem 0;
  }

  .used-in-item {
    margin-bottom: 1rem;
    position: relative;
    padding-left: 2rem;
    font-size: 1.1rem;
    color: #dcdde1;
    padding-left: 3rem;
  }

  .used-in-item::before {
    content: '✨';
    position: absolute;
    left: 0;
    font-size: 1.5rem;
    color: #ffd700;
  }

  .potion-link {
    color: #ffd700;
    text-decoration: none;
  }

  .potion-link:hover {
    color: #e67e22;
    text-decoration: underline;
  }

  
</style>
