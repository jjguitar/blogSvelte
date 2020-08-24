<script>
  import analyticsTracking from '../utils/analytics';
</script>
<style>
  .Header {
    background-color:rgba(255, 171, 59, 0.05);
    color: #191a22;
    padding: 1em 1em 0;
  }

  .Header-container {
    display: grid;
    grid-template-columns: minmax(auto, 1024px);
    justify-content: center;
    align-items: center;
  }

  .Header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Header h1 {
    color: #191a22;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.8px;
    cursor: pointer;
  }

  .Header h1 span {
    display: block;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: normal;
    margin: 0.3em 0 0 0;
  }

  .Header ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .Header li {
    display: inline-block;
    margin: 0 0.5em 0 0;
  }

  .Header a {
    text-decoration: none;
    font-weight: 300;
    font-size: 14px;
  }

  .Header-social img {
    width: 30px;
  }

  .Header-logo h1 {
    margin: 0;
  }

  .Header-logo {
    display: flex;
    align-items: center;
  }

  .Header-logo img {
    margin-right: 1em;
    border-radius: 5px;
  }

</style>

<header class="Header">
  <div class="Header-container">
    <div class="Header-content">
      <div class="Header-logo">
        <img src="codejjguitar-black.png" alt="logo" width="50" />
        <h1>
          Jhon Jairo Trillos
          <span>Frontend & tech lover</span>
        </h1>
      </div>
      <div class="Header-social">
        <ul>
          <li>
            <a href="https://github.com/jjguitar" target="_blank" rel="noreferrer" on:click={analyticsTracking('github')}>
              <img src="github-icon.png" alt="Github">
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/jhonjatr/" target="_blank" rel="noreferrer" on:click={analyticsTracking('facebook')}>
              <img src="facebook-icon.png" alt="Facebook" >
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/codejjguitar" target="_blank" rel="noreferrer" on:click={analyticsTracking('twitter')}>
              <img src="instagram-icon.png" alt="Instagram">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>
