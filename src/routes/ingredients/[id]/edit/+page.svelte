<script>
    export let data;
    let ingredient = data.ingredient;
  </script>
  
  <h1>Ingredient bearbeiten</h1>
  
  <form method="POST" action="?/update">
    <input type="hidden" name="id" value={ingredient._id} />
  
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" value={ingredient.name} required />
    </div>
  
    <div>
      <label for="origin">Herkunft</label>
      <input type="text" id="origin" name="origin" value={ingredient.origin} required />
    </div>
  
    <div>
      <label for="properties">Eigenschaften</label>
      <textarea id="properties" name="properties" required>{ingredient.properties}</textarea>
    </div>
  
    <button type="submit" class="btn btn-primary">Ingredient aktualisieren</button>
  </form>
  
  <style>
    form {
      max-width: 600px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  
    label {
      font-weight: bold;
    }
  
    input, textarea, button {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
    }
  
    button {
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  </style>
  