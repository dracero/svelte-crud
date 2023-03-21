<script>

let users =[];
 
 async function getUsers() {
   const response = await fetch('/api/getUsers');
   users = await response;
 }

</script>

<h1>Leer</h1>

<button on:click={getUsers}>Ver</button>

 
  