<style>
  input {
    background-color: white;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    color: rgba(0, 0, 0, 0.75);
    display: inline-block;
    font-feature-settings: "tnum";
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    outline-color: #ff792e;
  }

  ::placeholder {
    color: #d9d9d9;
    padding-left: 5px;
  }

  h4 {
    font-size: 16px;
  }

  p {
    font-weight: 300;
    color: #333;
    font-size: 15px;
    margin-bottom: 10px;
  }

  form {
    position: relative;
    width: 100%;
  }

  .btn {
    box-shadow: inset 0px 1px 0px 0px #ffab3b;
    background: linear-gradient(to bottom, #fff23e 5%, #ffd12f 100%);
    background-color: #fff23e;
    border-radius: 6px;
    border: 1px solid #ffab3b;
    display: inline-block;
    cursor: pointer;
    color: #ff792e;
    font-family: 'Arial';
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffd12f;
    width: 100%;
    outline-color: #ff792e;
  }

  .btn:hover {
    background: linear-gradient(to bottom, #ffd12f 5%, #fff23e 100%);
    background-color: #ffd12f;
  }

  .btn:active {
    position: relative;
    top: 1px;
  }

  label {
    font-size: 12px;
  }
</style>

<div class="Newsletter">
  <h4>NEWSLETTER</h4>
  <p>Recibe las últimas novedades sobre Frontend en tu mail</p>
  <form
    action="https://tinyletter.com/codejjguitar"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://tinyletter.com/codejjguitar', 'popupwindow',
    'scrollbars=yes,width=800,height=600');return true">
    <p>
      <label for="tlemail">Correo electrónico:</label>
    </p>
    <p>
      <input type="text" name="email" id="tlemail" placeholder="Tu correo electrónico" />
    </p>
    <input type="hidden" value="1" name="embed" />
    <button class="btn" type="submit" value="Subscribe" >Suscribirse</button>
    <p>No enviamos spam</p>
  </form>
</div>
