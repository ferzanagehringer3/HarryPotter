<script>
  import "./styles.css";
  let { children } = $props();
</script>

<nav class="navbar">
  <div class="logo">
    <a href="/">Magical World</a>
  </div>
  <ul class="navbar-links">
    <li><a href="/potions">Potions</a></li>
    <li><a href="/ingredients">Ingredients</a></li>
    <li><a href="/about">Über uns</a></li>
  </ul>
</nav>

<div class="content-container">
  {@render children()}
</div>

<style>
  /* Navbar Styles */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: linear-gradient(90deg, #1e272e, #2c3e50);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .logo a {
    font-family: 'Cinzel', serif;
    font-size: 1.8rem;
    font-weight: bold;
    color: #f1c40f;
    text-decoration: none;
  }

  .navbar-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
  }

  .navbar-links li {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background 0.3s, transform 0.2s;
  }

  .navbar-links li:hover {
    background: #34495e;
    transform: scale(1.1);
  }

  .navbar-links a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    transition: color 0.3s;
  }

  .navbar-links a:hover {
    color: #f1c40f;
  }

  /* Content Container */
  .content-container {
    padding: 2rem;
    background: #2c3e50;
    color: #ecf0f1;
    min-height: calc(100vh - 70px); /* Adjust for navbar height */
  }
</style>
