import React, { useState } from 'react';
import api from '../services/api';

const PromptForm = () => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.sendPrompt(prompt);
      setPrompt('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your prompt:
        <input type="text" value={prompt} onChange={(event) => setPrompt(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PromptForm;