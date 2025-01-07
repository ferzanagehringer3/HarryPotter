<script>
    export let form;
  </script>
  
  <h1>Create new Potion</h1>
  
  <form method="POST" action="?/create">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />
    </div>
  
    <div>
      <label for="ingredients">Ingredients (comma-separated)</label>
      <input type="text" id="ingredients" name="ingredients" placeholder="Ingrediant1, Ingredient2" required />
    </div>
  
    <div>
      <label for="duration">Duration</label>
      <input type="text" id="duration" name="duration" required />
    </div>
  
    <div>
      <label for="origin">Origin</label>
      <input type="text" id="origin" name="origin" required />
    </div>
  
    <div>
      <label for="brewing_instructions">Brewing Instructions</label>
      <textarea id="brewing_instructions" name="brewing_instructions" required></textarea>
    </div>
  
    {#if form?.error}
      <p style="color: red;">{form.error}</p>
    {/if}
  
    <button type="submit">Create Potion</button>
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
  