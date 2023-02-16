import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemonToDOM }) {
  const [form, setForm] = useState({
    name: '',
    hp: 0,
    frontUrl: '',
    backUrl: ''
  })

  function handleFormUpdate(e) {
    const name = e.target.name
    const value = e.target.value
    // console.log(e.target.name)
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const postBody = {
      name: form.name,
      hp: form.hp,
      sprites: {
        front: form.frontUrl,
        back: form.backUrl
      }
    }
    // console.log("post body", postBody)
    const postObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postBody)
    }
    // console.log('postOGJ', postObj)
    fetch(`http://localhost:3001/pokemon`, postObj)
      .then(r => r.json())
      .then(pokemon => {
        console.log('poke res', pokemon)
        onAddPokemonToDOM()
      })
      .catch(err => console.error('POST poke Error', err))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleFormUpdate} />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            onChange={handleFormUpdate} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFormUpdate}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleFormUpdate}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
