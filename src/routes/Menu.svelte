<script>
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';
    import { page } from "$app/stores"

    /**
	 * @type {any}
	 */
     export let open;
</script>
{#if $page.data.session}
{#if open}
    <div>
        <ul>
            <p transition:fly={{ y: -15, delay: 50 }}>
              <a href="/">Home</a>
            </p>
            <p transition:fly={{ y: -15, delay: 50 }}>
              <a href="/components/ingresar">Ingresar</a>
            <p transition:fly={{ y: -15, delay: 50 }}>
               <a href="/components/leer">Leer</a>
            </p>
            <p transition:fly={{ y: -15, delay: 50 }}>
              <a href="/components/modificar">Modificar</a>
            <p transition:fly={{ y: -15, delay: 50 }}>
              <a href="/components/borrar">Borrar</a>
            </p>
        </ul>    
    </div>

    <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
{/if}
<p>Session expiry: {$page.data.session?.expires}</p>
{:else}
<h1>Access Denied</h1>
<p>
  <a href="/auth/signin">
    You must be signed in to view this page
  </a>
</p>
{/if}

<style>
    :global(html) {
        background: #e7e7ec;
    }
    div {
        text-align: center;
        font-size: 1.5em;
        letter-spacing: 0.15em;
        padding: 1em;
        padding-top: 0;
        color: rgb(4, 4, 39);
    }
    p {
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
    }
    p:hover {
        text-decoration: underline;
    }
</style>