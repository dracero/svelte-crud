<script>
  import { idStore } from '../../stores.js';
  
  let name = "";
  let surname = "";
  let email = "";
  let id = "";

  // create a writable store
  async function handleSubmit() {
    try {
      const response = await fetch("/api/getUsers/?name="+name, {
      method: "GET",
      headers: { "Content-Type": "application/json" }      
    }); // replace with your API endpoint that searches the database
    if (response.ok) {
        const { _id: newId, name: newName, surname: newSurname, email: newEmail } = await response.json();
        name = newName;
        surname = newSurname;
        email = newEmail;
        id = newId;//this shoulf pass to erase and update
        console.log(id);

        // update the value of the store with the obtained id
        idStore.set(id);

        } else {
        console.error("Error searching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error searching data:", error.message);
    }
  }
</script>

<h1>Leer</h1>
<form on:submit|preventDefault={handleSubmit}>
  <label>
    Name: <input type="text" bind:value={name} />
  </label>
  <label>
    Surname: <input type="text" bind:value={surname} />
  </label>
  <label>
    Email: <input type="email" bind:value={email} />
  </label>
  <button type="submit">Submit</button>
</form>

 
  