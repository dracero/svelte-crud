<script>
    import Leer from "../leer/+page.svelte"
    import { idStore } from '../../stores.js';
    
    let id = "";
  
    idStore.subscribe(value => {
      id = value;
    });
  
    async function handleDelete() {
      try {
        const response = await fetch('/api/delUsers/?id='+id, {
          method: "DELETE"
        }); // replace with your API endpoint that deletes the user data
        if (response.ok) {
          console.log("User data deleted successfully");
  
          // update the value of the store with an empty string to clear the value
          idStore.set("");
  
        } else {
          console.error("Error deleting user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error deleting user data:", error.message);
      }
    }
  </script>
  
  <Leer />
  
  <form on:submit|preventDefault={handleDelete}>
    <button type="submit" disabled={!id}>Delete</button>
  </form>
  
 
  

