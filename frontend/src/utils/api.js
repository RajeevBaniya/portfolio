const API_URL =
  import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:3001' : '');

export const sendEmail = async (name, email, message) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
      // Long enough for a sleeping free server to wake up.
      signal: AbortSignal.timeout(90_000),
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok || !data.ok) {
      return { success: false, error: data.error || `Request failed (${response.status})` };
    }
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
