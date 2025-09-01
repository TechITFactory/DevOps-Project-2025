import React, { useState } from "react";
import axios from "axios";
import API from "../api";

export default function Chatbot() {
  const [context, setContext] = useState("This shop sells laptops and phones.");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const ask = async () => {
    const res = await axios.post(API.chatbot + "/chat", { context, question });
    setAnswer(res.data.answer);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Chatbot</h2>
      <textarea value={context} onChange={(e) => setContext(e.target.value)} />
      <input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Ask something..." />
      <button onClick={ask}>Ask</button>
      {answer && <p className="mt-2">💬 {answer}</p>}
    </div>
  );
}
