<script>
  export let potion;
</script>

<div class="potion-card">
  <img src={potion.image || "/images/placeholder.png"} alt={potion.name} class="potion-image" />
  <div class="potion-details">
    <h3 class="potion-name">{potion.name}</h3>
    <p class="potion-duration"><strong>Duration:</strong> {potion.duration || "Keine Dauer angegeben"}</p>
    <p class="potion-origin"><strong>Origin:</strong> {potion.origin || "Keine Herkunft angegeben"}</p>
    <a href={`/potions/${potion._id}`} class="btn btn-primary">Show Details</a>
  </div>
</div>

<style>
  .potion-card {
    background-color: #1e272e; 
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

  .potion-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }

  .potion-image {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }

  .potion-details {
    margin-top: 1rem;
  }

  .potion-name {
    font-size: 1.5rem;
    font-weight: bold;
    color: silver;
    margin-bottom: 0.5rem;
  }


  .potion-duration {
    color: #40826D;
    font-weight: bold;
    margin: 0.5rem 0;
  }


  .potion-origin {
    color: #40826D; 
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .btn {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.3s;
  }

  .btn:hover {
    background: #2980b9;
  }
</style>
