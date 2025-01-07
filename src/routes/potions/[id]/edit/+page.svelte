<script>
    export let data;
    let potion = data.potion;
  </script>
  
  <h1>Potion Editor</h1>
  
  <form method="POST" action="?/update">
    <input type="hidden" name="id" value={potion._id} />
  
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" value={potion.name} required />
    </div>
  
    <div>
      <label for="image">Picture-URL</label>
      <input type="text" id="image" name="image" value={potion.image} />
    </div>
  
    <div>
      <label for="ingredients">Ingredients (comma-separated)</label>
      <input type="text" id="ingredients" name="ingredients" value={potion.ingredients.join(", ")} required />
    </div>
  
    <div>
      <label for="duration">Duration</label>
      <input type="text" id="duration" name="duration" value={potion.duration} required />
    </div>
  
    <div>
      <label for="origin">Origin</label>
      <input type="text" id="origin" name="origin" value={potion.origin} required />
    </div>
  
    <div>
      <label for="brewing_instructions">Brewing Instructions</label>
      <textarea id="brewing_instructions" name="brewing_instructions" required>{potion.brewing_instructions}</textarea>
    </div>
  
    <button type="submit" class="btn btn-primary">Update Potion</button>
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
  