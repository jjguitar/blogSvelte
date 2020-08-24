<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
  import Post from '../components/Post.svelte';
	export let posts;
</script>

<style>
  .Post {
    display: grid;
    justify-content: space-between;
    grid-gap: 15px;
    grid-template-columns: 1fr;
  }
</style>

<svelte:head>
  <title>Jhon Jairo Trillos</title>
  <meta name="description" content="Blog de codejjguitar live" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@codejjguitar" />
  <meta name="twitter:creator" content="@codejjguitar" />
  <meta name="twitter:title" content="Jhoncito el pillo" />
  <meta name="twitter:description" content="Blog de codejjguitar live" />
  <meta name="twitter:image" content="https://arepa.s3.amazonaws.com/blogpost-cover.png" />

  <meta name="og:url" content="https://codejjguitar.live" />
  <meta name="og:site_name" content="Jhoncito el pillo" />
  <meta name="og:locale" content="es_ES" />
  <meta name="og:title" content="Jhoncito el pillo" />
  <meta name="og:description" content="Blog de codejjguitar live" />
  <meta name="og:type" content="article" />
  <meta name="og:image" content="https://arepa.s3.amazonaws.com/blogpost-cover.png" />
  <meta name="fb:app_ide" content="" />
  
</svelte:head>

<div class="Home">
  <div class="Post">
    {#each posts as post}
      <Post {post} />
    {/each}
  </div>
</div>
