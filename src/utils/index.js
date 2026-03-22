// Utility Functions

export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

export const formatDate = (date, locale = 'en-US') => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

export const formatProgress = (current, total) => {
  return Math.round((current / total) * 100);
};

export const truncateText = (text, maxLength = 100) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone) => {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
};

export const isValidAmount = (amount) => {
  return !isNaN(amount) && amount > 0;
};

export const validateDonation = (data) => {
  const errors = {};

  if (!data.amount || !isValidAmount(data.amount)) {
    errors.amount = 'Please enter a valid amount';
  }

  if (data.email && !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email';
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  return errors;
};

const API_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';

export const api = {
  async get(endpoint) {
    const response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) throw new Error('API Error');
    return response.json();
  },

  async post(endpoint, data) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('API Error');
    return response.json();
  },

  async put(endpoint, data) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('API Error');
    return response.json();
  },

  async delete(endpoint) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('API Error');
    return response.json();
  },
};

export const storage = {
  getItem(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from storage:', error);
      return null;
    }
  },

  setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to storage:', error);
    }
  },

  removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from storage:', error);
    }
  },

  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  },
};

export const analytics = {
  trackEvent(eventName, eventData = {}) {
    try {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', eventName, eventData);
      }
      console.log(`Event tracked: ${eventName}`, eventData);
    } catch (error) {
      console.error('Analytics error:', error);
    }
  },

  trackPageView(pageName) {
    this.trackEvent('page_view', { page_title: pageName });
  },

  trackDonation(amount, tier) {
    this.trackEvent('donation', { value: amount, currency: 'USD', tier });
  },

  trackLanguageChange(language) {
    this.trackEvent('language_change', { language });
  },
};

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
};

export default {
  formatCurrency,
  formatDate,
  formatProgress,
  truncateText,
  isValidEmail,
  isValidPhone,
  isValidAmount,
  validateDonation,
  api,
  storage,
  analytics,
  debounce,
  throttle,
  sleep,
  getInitials,
};