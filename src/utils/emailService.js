import emailjs from '@emailjs/browser';

export const sendEmail = async (name, email, message) => {
  try {
    // For local development, show mock success
    if (import.meta.env.DEV) {
      console.log('DEV MODE: Email would be sent with:', { name, email, message });
      return { 
        success: true, 
        messageId: 'mock-message-id-' + Date.now(),
        dev: true
      };
    }
    
    // Production mode - send real email with EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return {
      success: true,
      messageId: response.status.toString(),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};