<script>
    export let ingredient;
  </script>
  
  <div class="ingredient-card">
    <img src={ingredient.image || "/images/placeholder_ingredient.png"} alt={ingredient.name} class="ingredient-img" />
    <h3 class="ingredient-name">
      <a href={`/ingredients/${ingredient._id}`} class="ingredient-link">{ingredient.name}</a>
    </h3>
  </div>
  
  <style>
    .ingredient-card {
      background-color: #2c3e50;
      color: #ecf0f1;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s, box-shadow 0.3s;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      text-align: center;
    }
  
    .ingredient-card:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }
  
    .ingredient-img {
      width: 100%;
      max-height: 150px;
      object-fit: cover;
      border-radius: 8px;
    }
  
    .ingredient-name {
      font-size: 1.2rem;
      font-weight: bold;
      margin-top: 1rem;
      color: #f1c40f;
    }
  
    .ingredient-link {
      text-decoration: none;
      color: inherit;
    }
  
    .ingredient-link:hover {
      text-decoration: underline;
      color: #aad4f5;
    }
  </style>
  