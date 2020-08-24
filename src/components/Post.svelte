<script>
  import readingTime from '../utils/readingTime';
  import randomEmoji from '../utils/randomEmoji';
  import FormatIsoTime from '../utils/FormatIsoTime';
  import getTags from '../utils/getTags';
  export let post;
</script>

<style>
  .Post-item {
    color: #191a22;
    position: relative;
  }
  .Post-content {
    font-size: 16px;
    font-weight: 300;
    display: grid;
    justify-content: space-between;
    grid-gap: 5px;
    grid-template-columns: 1fr;
  }
  .Post-title {
    font-size: 20px;
    margin: 0;
    padding: 0;
  }
  .Post-title p {
    color: #333;
    font-size: 13px;
    font-weight: 300;
    margin-top: 5px;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #22215b;
  }

  .Post-desc p {
    color: #333;
    font-size: 16px;
    line-height: 28px;
    margin: 0 auto;
    word-break: break-word;
  }

  .dot {
    font-weight: 700;
  }

  .Post-tags {
    font-size: 14px;
  }

  .Post-tags ul {
    display: flex;
  }
  .Post-tags li a {
    margin-right: 2em;
  }
</style>

<div class="Post-item">
  <div class="Post-content">
    <div class="Post-head">
      <div class="Post-title">
        <h2>
          <a rel="prefecth" href="blog/{post.slug}">{randomEmoji()} {post.title}</a>
        </h2>
        <p>
          <time datetime={post.createdAt}>
            🗓️ {FormatIsoTime(post.createdAt)}
          </time>
          <span class="dot">.</span>
          <span>{readingTime(post.html)}</span>
        </p>
      </div>
      <div class="Post-desc">
        <p>{post.desc}</p>
      </div>
      <div class="Post-tags">
        <!-- {getTags(post.tag)} -->
        {#if post.tag}
          <ul>
            {#each post.tag as tag}
              <li>
                <a href="blog/{post.slug}">{tag.name}</a>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  </div>
</div>
