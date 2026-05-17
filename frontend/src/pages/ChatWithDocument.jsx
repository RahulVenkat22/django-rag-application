import { useRef, useState } from 'react';
import './ChatWithDocument.css';

function ChatWithDocument() {
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleUploadClick = () => fileInputRef.current?.click();

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log('Selected files:', files);
    }
  };

  return (
    <div className="chat-page">
      <h1>Chat With Document</h1>
      <div className="chat-messages">
        {/* messages will render here */}
      </div>
      <div className="chat-input-bar">
        <button
          type="button"
          className="upload-btn"
          onClick={handleUploadClick}
          aria-label="Upload document"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 17.93 8.83l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
          </svg>
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
          multiple
        />
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ChatWithDocument;
