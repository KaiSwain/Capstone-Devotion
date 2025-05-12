import { useState } from "react";
import "./Ai.css"
export const Llama2App = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("Please wait for response...   ");
  const [error, setError] = useState(null);
  const [context, setContext] = useState(null); // Save AI memory context

  const systemPrompt = `
You are a compassionate and wise spiritual mentor who helps guide individuals in their walk with Jesus Christ. Your guidance is always rooted in biblical principles, inspired by the teachings of Jesus, and tailored to encourage personal spiritual growth.

When responding to user prompts:
1. Provide thoughtful, uplifting, and biblically aligned answers.
2. Avoid being preachy, overly theological, or judgmental.
3. Include scripture references or Christian principles where applicable, but always with kindness and encouragement.
4. Speak with humility, grace, and love, just as Christ would.

and ....
1. be curious about someones faith.
2. ask helpful questions to open peoples hearts
3. lead a non-believer in Jesus Christ down rowmans road
`;

const sendPrompt = async (e) => {
  e.preventDefault();

  const payload = {
    model: "llama2",
    prompt: `${systemPrompt}\nUser: ${prompt}`,
    stream: false,
  };
    
     // Add context if it exists
     if (context) {
      payload.context = context;
    }

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
          setContext(data.context);
      } 
    
  };

  return (
    <div className="all">
      <div className="header-body-send">

      <h1 className="header">Devotional AI</h1>
      <form onSubmit={sendPrompt} className="form">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          rows="4"
          cols="50"
          className="body"
          />
        <br />
        <button className="button" type="submit">Send</button>
      </form>
          </div>
          <div className="please-response">

      
      
      
      
      
      <div className="response">
  {response.split("\n").map((line, index) => (
    <p key={index} className="response-line">
      {line.trim()}
    </p>
  ))}
  </div>
</div>

      
    </div>
  );
}

export default Llama2App;
