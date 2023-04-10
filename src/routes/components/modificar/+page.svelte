<script>
    import Leer from "../leer/+page.svelte"
    import { idStore } from '../../stores.js';
    
    let name = "";
    let surname = "";
    let email = "";
    let id = "";

    idStore.subscribe((/** @type {string} */ value) => {
		id = value;
	});
    async function handleUpdate() {
    try {
      const response = await fetch("/api/uptUsers/?id="+id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, surname, email })
      }); // replace with your API endpoint that updates the user data
      if (response.ok) {
        console.log("User data updated successfully");

        // reset the form fields
        name = "";
        surname = "";
        email = "";
        // update the value of the store with an empty string to clear the value
        idStore.set("");

      } else {
        console.error("Error updating user data:", response.statusText);
      }
    } catch (error) {
      // @ts-ignore
      console.error("Error updating user data:", error.message);
    }
   }
    
  </script>

  <Leer />

  <form on:submit|preventDefault={handleUpdate}>
    <label>
      Name: <input type="text" disabled={!id} bind:value={name} />
    </label>
    <label>
      Surname: <input type="text" disabled={!id} bind:value={surname} />
    </label>
    <label>
      Email: <input type="email" disabled={!id} bind:value={email} />
    </label>
    <button type="submit" disabled={!id}>Update</button>
  </form>
 
  