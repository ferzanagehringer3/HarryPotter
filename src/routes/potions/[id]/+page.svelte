<script>
  export let data;
  let potion = data.potion;
</script>

<!-- Back Button -->
<a href="/potions" class="btn btn-back">Back to Potions</a>

<h1 class="potion-title">{potion.name}</h1>

<div class="details-section">
  <div class="left-section">
    <img class="potion-img" src={potion.image} alt={potion.name} />
  </div>

  <div class="right-section">
    <p>
      <span class="info-title">Duration:</span> 
      <span class="info-value">{potion.duration}</span>
    </p>
    <p>
      <span class="info-title">Origin:</span> 
      <span class="info-value">{potion.origin}</span>
    </p>

    <p><span class="info-title">Ingredients:</span></p>
    <ul class="ingredients-list">
      {#each potion.ingredients as ingredient}
        <li class="ingredient-item">{ingredient}</li>
      {/each}
    </ul>

    <h2 class="instructions-title">Brewing Instructions</h2>
    <p class="instructions">{potion.brewing_instructions}</p>

    <!-- Buttons -->
    <div class="button-group">
      <a href={`/potions/${potion._id}/edit`} class="btn btn-edit">Edit Potion</a>
      <form method="POST" action="?/delete" class="delete-form">
        <input type="hidden" name="id" value={potion._id} />
        <button type="submit" class="btn btn-delete">Delete Potion</button>
      </form>
    </div>
  </div>
</div>

<style>

  .btn-back {
    display: inline-block;
    margin-bottom: 1.5rem;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #6c5ce7, #8e44ad);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    text-decoration: none;
    transition: transform 0.3s ease, background 0.3s ease;
  }

  .btn-back:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, #8e44ad, #6c5ce7);
  }

  .potion-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: #ffd700;
    text-shadow: 0px 0px 15px rgba(255, 215, 0, 0.8);
    margin-bottom: 2rem;
  }

  .details-section {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
    color: #ecf0f1;
  }

  .left-section {
    flex: 1;
    text-align: center;
  }

  .potion-img {
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.7);
    transition: transform 0.3s ease;
  }

  .potion-img:hover {
    transform: scale(1.05);
  }

  .right-section {
    flex: 2;
    padding: 1rem 0;
  }

  .info-title {
    display: inline-block;
    font-weight: bold;
    color: #3498db;
    font-size: 1.2rem;
  }

  .info-value {
    font-style: italic;
    font-size: 1.2rem;
    color: #f8f9fa;
  }

  .ingredients-list {
    list-style-type: none;
    padding: 0;
    margin: 1.5rem 0; /* Added more spacing */
}

.ingredient-item {
    color: #dcdde1;
    position: relative;
    padding-left: 3rem; /* Increased padding for better alignment */
    margin-bottom: 1rem; /* Added more space between items */
}

.ingredient-item::before {
    content: "✨";
    position: absolute;
    left: 0;
    font-size: 1.5rem;
    color: #ffd700; /* Gold sparkle for a magical touch */
}


  .instructions-title {
    margin-top: 2rem;
    font-size: 1.8rem;
    font-weight: bold;
    color: #9b59b6;
    text-shadow: 0 0 10px #9b59b6;
  }

  .instructions {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #ecf0f1;
  }

  .button-group {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }

  .btn {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: transform 0.3s ease, background 0.3s ease;
  }

  .btn-edit {
    background: linear-gradient(135deg, #2ecc71, #27ae60);
    color: white;
    border: none;
  }

  .btn-edit:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, #27ae60, #2ecc71);
  }

  .btn-delete {
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    color: white;
    border: none;
  }

  .btn-delete:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, #c0392b, #e74c3c);
  }
</style>
