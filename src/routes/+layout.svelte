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
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<div class="content-container">
  {@render children()}
</div>

