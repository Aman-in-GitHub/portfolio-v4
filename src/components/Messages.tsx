import { supabase } from "@/utils/supabase";
import { useRef } from "react";
import SendIcon from "@/components/SendIcon";

async function handleMessageSubmit(name: string, message: string) {
  const { error } = await supabase.from("portfolio_messages").insert({
    name,
    message,
  });

  if (error) {
    console.error(error);
  }
}

function Messages() {
  const messageRef = useRef<HTMLInputElement>(null);

  return (
    <div className="h-96 w-full border-2 border-neutral-800 relative">
      <div className="absolute bottom-0 w-full flex">
        <input
          type="text"
          placeholder="Type something here"
          ref={messageRef}
          className="w-full bg-background border-t-2 border-neutral-800 p-4 text-body outline-none"
        />
        <button
          className="px-6 py-2 bg-purple active:opacity-80 duration-500"
          onClick={() => {
            console.log("Button Clicked");
          }}
        >
          <SendIcon className="size-8" fill="white" />
        </button>
      </div>
    </div>
  );
}

export default Messages;
