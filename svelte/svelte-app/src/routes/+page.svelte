<script>
  let name = 'SvelteKit1';
  let src = 'https://avatars.githubusercontent.com/u/1162160?v=4'
  const altText = 'Rich Harris'
  let htmlText = '<b>Strong</b> and <i>Emphasized</i> text'

  console.log('ass')
</script>

<style>
  h1 {
    color: red;
  }

  img {
    width: 100px;
    height: auto;
  }
</style>

<h1>Welcome to {name}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<img {src} alt={altText}>

<!-- если хотим вставить html в js то используем этот способ с @html-->
<p>{@html htmlText}</p>  
