<script>
  let name = "";
  let surname = "";
  let email = "";

  async function handleSubmit() {
    const data = { name, surname, email };
    console.log(data)
    const response = await fetch("/api/inUsers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      console.log("Data inserted successfully");
    } else {
      console.error("Error inserting data:", response.statusText);
    }
  }
</script>
<h1>Ingresar</h1>
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
