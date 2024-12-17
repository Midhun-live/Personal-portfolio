import { useState, useRef, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { FaComment, FaTimes } from "react-icons/fa";
import Image from "next/image"; // Assuming you're using Next.js
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

import { ChatOpenAI } from "@langchain/openai";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import { SystemMessage } from "@langchain/core/messages";

const ChatWidget = () => {
  const [customPrompt, setPrompt] = useState("");
  const [openAIKey, setOpenAIkey] = useState("");
  const [model, setModel] = useState<ChatOpenAI | null>(null);
  const [chain, setChain] = useState<ConversationChain | null>(null);
  const memory = new BufferMemory();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const fetchChatBotDetails = async () => {
    setOpenAIkey(process.env.NEXT_PUBLIC_OPENAI_API_KEY||"");
    setPrompt(process.env.NEXT_PUBLIC_PROMPT||"");
  };

  useEffect(() => {
    fetchChatBotDetails();
  }, []);



  useEffect(() => {
    if (openAIKey) {
      const newModel = new ChatOpenAI({
        openAIApiKey: openAIKey,
        model: "gpt-3.5-turbo",
        temperature: 0.7,
      });
      const newChain = new ConversationChain({ llm: newModel, memory: memory });
      setModel(newModel);
      setChain(newChain);
    }
  }, [openAIKey]);

  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Scroll to the bottom whenever messages change

  const toggleChat = () => {
    if (isOpen) {
      setMessages([]); // Reset messages when closing the chat
    }
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    setLoading(true);
    if (inputMessage.trim()) {
      setMessages([...messages, { role: "user", content: inputMessage }]);
      const currMessage = inputMessage;
      setInputMessage("");

      const systemMessage = new SystemMessage(customPrompt);

      try {
        if (chain) {
          const response = await chain.call({
            input: [systemMessage, currMessage],
          });

          const aiMessage = response.response;

          // Add the assistant response to the chat
          setLoading(false);
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: aiMessage },
          ]);
        }
      } catch (error) {
        console.error("Error fetching OpenAI API:", error);
        setLoading(false);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Error in getting response" },
        ]);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-6 w-full max-w-xs md:max-w-md lg:max-w-[30%]">
      {!isOpen && ( // Show the comment button only when the chat is closed
        <button
          onClick={toggleChat}
          className={`fixed bottom-4 right-6 z-10 rounded-sm bg-[#609641] p-3 text-white transition-all duration-300`}
        >
          <FaComment className="text-xl" />
        </button>
      )}
      {isOpen && ( // Chat widget
        <div className="w-full rounded-lg bg-white p-4 shadow-lg">
          <div className="mb-2 flex items-center justify-between border-b pb-2">
            <h2 className="ml-2 text-lg font-bold text-[#609641]">
              Ecofash Chatbot
            </h2>
            <button onClick={toggleChat} className="text-gray-500">
              <FaTimes className="text-xl hover:text-[#609641]" />
            </button>
          </div>
          <div
            className={`hide-scrollbar custom-scrollbar h-96 md:h-80 overflow-y-scroll`}
          >
            {/* Render messages or image here */}
            {messages.length === 0 ? ( // Check if there are no messages
              <div className="flex h-full items-center justify-center">
                <Image
                  src="/images/chatwidget/chatbot1.png" // Update with your image path
                  alt="Chat"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  } mb-2`}
                >
                  {msg.role === "assistant" && ( // Render the profile image for assistant messages
                    <div className="mr-2">
                      {" "}
                      {/* Margin to the right of the image */}
                      <Image
                        src="/images/chatwidget/chatbot.png" // Update with your profile image path
                        alt="Chatbot"
                        width={25} // Set the width of the image
                        height={25} // Set the height of the image
                        className="rounded-full" // Make the image rounded
                      />
                    </div>
                  )}
                  <div
                    className={`mb-2 max-w-[80%] break-words p-2 ${
                      msg.role === "user"
                        ? "mr-2 rounded-3xl rounded-br-sm bg-[#609641] text-white" // Three sides rounded large, one side small
                        : "rounded-3xl rounded-tl-sm bg-gray-200 text-black" // Adjust for assistant messages
                    }`}
                  >
                    <span>{msg.content}</span>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="mt-4 flex items-center">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputMessage}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="ml-2 w-full rounded border p-1 focus:outline-none focus:ring-1 focus:ring-[#609641]"
                placeholder="Type a message..."
              />
              <button
                onClick={handleSendMessage}
                className="absolute right-0 top-0 flex h-full items-center justify-center p-2"
              >
                <PaperAirplaneIcon className="h-6 w-6 text-[#609641]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
