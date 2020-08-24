<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
  import Post from '../../components/Post.svelte';
  export let posts;
</script>

<style>
  .Post {
    display: grid;
    justify-content: space-between;
    grid-gap: 30px;
    grid-template-columns: 1fr;
  }
</style>

<svelte:head>
  <title>General</title>
</svelte:head>

<div class="General">
  <h1>General</h1>
  <div class="Post">
    {#each posts as post}
      {#if post.tag}
        {#each post.tag as tag}
          {#if tag.name  == 'general'}
          <Post {post} />
          {/if}
          {:else}
            <p>Sin resultados</p>
        {/each}
      {/if}
    {/each}
  </div>
</div>