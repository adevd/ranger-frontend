import { useState, useRef, useEffect } from "react";
import "./ChatBox.css";

type ChatMessage = {
  text: string;
  from: string;
  position: { x: number; y: number };
};

type ChatBoxProps = {
  playerPosition: { x: number; y: number };
  inputMode: "chat" | "game";
};

export default function ChatBox({ playerPosition, inputMode }: ChatBoxProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({
      top: logRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    if (inputMode === "chat") {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [inputMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages((prev) => [
        ...prev,
        { text: input.trim(), from: "You", position: playerPosition },
      ]);
      setInput("");
    }
  };

  return (
    <div className="chatbox">
      <div className="chat-log" ref={logRef}>
        {[...messages].reverse().map((msg, i) => (
          <div key={i} className="chat-message">
            <strong>{msg.from}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="chat-input"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Say something..."
        />
      </form>
    </div>
  );
}
