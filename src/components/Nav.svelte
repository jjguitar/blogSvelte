<script>
  export let segment;
</script>

<style>

  .Nav {
    border-bottom: 1px solid rgba(255, 121, 46, 0.1);
    font-weight: 300;
    background-color: rgba(255, 171, 59, 0.05);
    color: #191a22;
    padding: 0 1em;
  }

  .Nav-container {
    display: grid;
    grid-template-columns: minmax(auto, 1024px);
    justify-content: center;
    align-items: center;
  }

  .Nav-content {
    display: flex;
    justify-content: space-between;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: #ff792e;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 1em 1em 0;
    display: block;
    font-size: 14px;
    font-weight: 300;
    transition: all 0.3s ease-in-out 0s;
    color: rgba(25, 26, 34, 0.7);
  }

  a:hover {
    color: rgba(25, 26, 34, 1);
  }
</style>

<nav class="Nav">
  <div class="Nav-container">
    <div class="Nav-content">
      <div class="Nav-social">
        <ul>
          <li>
            <a
            aria-current={segment === undefined ? 'page' : undefined} href=".">
              Home
            </a>
          </li>
          <li>
            <a
            aria-current={segment === 'about' ? 'page' : undefined} href="about">
              About
            </a>
          </li>
          <li>
            <a
              aria-current={segment === 'contact' ? 'page' : undefined}
              href="contact">
              Contact
            </a>
          </li>
          <li>
            <a
              aria-current={segment === 'general' ? 'page' : undefined}
              href="general">
              General
            </a>
          </li>
          <li>
            <a
              rel="prefetch"
              aria-current={segment === 'blog' ? 'page' : undefined}
              href="blog">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</nav>
