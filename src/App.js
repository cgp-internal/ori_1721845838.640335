import React, { useState } from 'react';
import PromptForm from './components/PromptForm';
import api from './services/api';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const responseFromApi = await api.sendPrompt(prompt);
      setResponse(responseFromApi.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <PromptForm
        prompt={prompt}
        setPrompt={setPrompt}
        handleSubmit={handleSubmit}
      />
      {response && <p>Response from DRF backend: {response}</p>}
    </div>
  );
}

export default App;