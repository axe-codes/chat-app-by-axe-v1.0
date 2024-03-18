const Message = () => {
  return (
    <div className="chat mt-1 chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="user avatar"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">
        Hi there what's up
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:12
      </div>
    </div>
  );
};

export default Message;
