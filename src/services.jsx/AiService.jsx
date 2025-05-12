

export const sendPrompt = async (e) => {
    e.preventDefault(); // Prevent form reload

    // Define the payload
    const payload = {
      model: "llama2", // The model to use
      prompt: prompt,  // User input prompt
      stream: false    // Single response (non-streaming)
    };

    try {
      // Send the request to the API
      const res = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        setResponse(data.response); // Update the response state
        setError(null); // Clear any previous errors
      } else {
        const errMessage = await res.text();
        setError(`Error: ${res.status} - ${errMessage}`);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };