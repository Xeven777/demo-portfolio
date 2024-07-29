import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Loader, MessageCircleIcon, SendIcon } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export function ChatBot() {
  const url = "https://anishapi.vercel.app/anish";
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! Im XEVEN. Personal chatbot for Anish👽. You can ask any question about Anish, his hobbies, life, eductaion, etc..😇 Im Happy to help you!",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });

      const data = await response.json();
      const aiMessage = { sender: "ai", text: data.answer };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 rounded-2xl shadow-xl md:bottom-6 md:right-10 right-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button size="icon" className="h-12 w-12 hover:animate-pulse rounded-2xl">
            <MessageCircleIcon className="h-6 w-6" />
            <span className="sr-only">Open chatbot</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[88vh] flex flex-col h-full">
          <DialogHeader className="text-primary-foreground h-16 bg-gradient-to-br from-primary to-primary/60 via-primary p-4 rounded-t-lg">
            <h3 className="text-lg font-medium">Chatbot</h3>
          </DialogHeader>
          <div className="p-4 space-y-4 h-full">
            <main className="flex-1 relative h-[80%] overflow-x-hidden overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 ${
                    message.sender === "user" ? "justify-end" : ""
                  }`}
                >
                  {message.sender !== "user" && (
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={""} />
                      <AvatarFallback>X</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground  rounded-tr-none hover:-translate-x-1"
                        : "bg-secondary text-foreground rounded-tl-none hover:translate-x-1"
                    } px-4 py-2 z-20 rounded-2xl shadow cursor-pointer duration-300 transition-all dark:shadow-primary/30 max-w-[75%] md:max-w-[70%]`}
                  >
                    <p>{message.text}</p>
                  </div>
                  {message.sender === "user" && (
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={""} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={""} />
                    <AvatarFallback>X</AvatarFallback>
                  </Avatar>
                  <div className="bg-secondary ml-2 text-foreground rounded-tl-none px-4 block py-2 rounded-2xl shadow dark:shadow-primary/30 max-w-[70%] animate-pulse">
                    <p className="inline-flex gap-3">
                      Loading
                      <span>
                        <Loader className="animate-spin" />
                      </span>
                    </p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
              <div className="absolute h-full z-0 w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#15398e_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </main>
            <div className="bg-muted/60 backdrop-blur-md z-10 p-4 flex gap-2">
              <Input
                type="text"
                placeholder="Type your message..."
                className="flex-1 rounded-full pr-12"
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <Button
                disabled={loading}
                size="icon"
                className="rounded-full"
                onClick={sendMessage}
              >
                {loading ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  <SendIcon className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
