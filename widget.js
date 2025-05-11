(function () {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './styles.css'; // Update this if hosting remotely
    document.head.appendChild(style);
  
    // Chat support icon
    const chatIcon = document.createElement('div');
    chatIcon.id = 'chat-support-icon';
    chatIcon.innerHTML = '<img src="https://img.icons8.com/ios/452/chat.png" width="50">';
    document.body.appendChild(chatIcon);
  
    // Chat popup box
    const chatPopup = document.createElement('div');
    chatPopup.id = 'chatbot-popup';
    chatPopup.innerHTML = `
      <div class="chat-header">
        <span>Assistant</span>
        <button id="close-chat">X</button>
      </div>
      <div id="chat-box"></div>
      <div class="chat-input-container">
        <input type="text" id="user-input" placeholder="Type a message..." />
        <button id="send-btn">Send</button>
      </div>
    `;
    document.body.appendChild(chatPopup);
  
    // Show/hide popup
    chatIcon.onclick = () => {
      chatPopup.style.display = chatPopup.style.display === 'block' ? 'none' : 'block';
    };
  
    document.addEventListener('click', (e) => {
      if (e.target.id === 'close-chat') chatPopup.style.display = 'none';
    });
  
    // Handle message sending
    document.addEventListener('click', (e) => {
      if (e.target.id === 'send-btn') sendMessage();
    });
  
    document.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && document.activeElement.id === 'user-input') {
        sendMessage();
      }
    });
  
    function sendMessage() {
      const input = document.getElementById('user-input');
      const msg = input.value.trim();
      if (!msg) return;
  
      const chatBox = document.getElementById('chat-box');
      const userMsg = document.createElement('div');
      userMsg.className = 'message user-message';
      userMsg.textContent = msg;
      chatBox.appendChild(userMsg);
  
      const botMsg = document.createElement('div');
      botMsg.className = 'message bot-message';
      botMsg.innerHTML = `<strong>Assistant:</strong> Thanks for your message!`;
      chatBox.appendChild(botMsg);
  
      input.value = '';
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  })();