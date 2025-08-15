
export const sendEmail = async (name, email, message) => {
  try {
    
    if (import.meta.env.DEV) {
      console.log('DEV MODE: Email would be sent with:', { name, email, message });
      
      return { 
        success: true, 
        messageId: 'mock-message-id-' + Date.now(),
        dev: true
      };
    }
    
    // Production mode - send real email
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullname: name,
        email,
        message,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to send email');
    }
    
    return { success: true, messageId: data.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};
