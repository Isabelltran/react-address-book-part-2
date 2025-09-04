import { useState } from "react";

function DeleteProfile({deleteContact}) {
    const [id, setId] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        await deleteContact(Number(id));
        setId("");
    }
  return (
    <><h3>Delete Profile</h3><form onSubmit={handleSubmit}>
          <label htmlFor="id">ID:</label>
          <input type="number" id="id" name="id" value={id} onChange={(e) => setId(e.target.value)} required />
         
          <button type="submit">Delete</button>
      </form></>
  )
}

export default DeleteProfile
