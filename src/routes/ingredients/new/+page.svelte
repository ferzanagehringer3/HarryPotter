
  <h1>Add a New Ingredient</h1>
  
  <form method="POST" action="?/create">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />
    </div>
  
    <div>
      <label for="origin">Origin</label>
      <input type="text" id="origin" name="origin" required />
    </div>

    <div>
      <label for="rarity">Rarity</label>
      <input type="text" id="rarity" name="rarity" required />
    </div>
  
    <button type="submit" class="btn btn-success">Create Ingredient</button>
  </form>
  
  <style>
    h1 {
      text-align: center;
      margin-bottom: 2rem;
      color: #ffd700;
      font-size: 2rem;
    }
  
    form {
      max-width: 600px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  
    label {
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: #ffffff;
    }
  
    input,
    button {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      border-radius: 5px;
      border: 1px solid #ddd;
    }
  
    button {
      background-color: #28a745;
      color: white;
      font-weight: bold;
      cursor: pointer;
      border: none;
    }
  
    button:hover {
      background-color: #218838;
    }
  
  </style>
  