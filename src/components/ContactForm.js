'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm({ language }) {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    // Validation basique
    if (!formData.from_name || !formData.from_email || !formData.message) {
      setStatus('error');
      setErrorMessage(language === 'fr' ? 'Veuillez remplir tous les champs obligatoires.' : 'Please fill in all required fields.');
      return;
    }

    try {
      // Envoyer l'email via EmailJS
      const result = await emailjs.send(
        'service_dwbkj3p', // Service ID
        'template_mo1f4i7', // Template ID
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject || (language === 'fr' ? 'Nouveau contact' : 'New contact'),
          message: formData.message,
          to_email: 'bounafode@gmail.com',
        },
        'KApUoD5FlT5vx-6-Y' // Public Key
      );

      if (result.status === 200) {
        setStatus('success');
        // Réinitialiser le formulaire
        setFormData({
          from_name: '',
          from_email: '',
          subject: '',
          message: '',
        });
        // Track l'événement dans Google Analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: 'Contact Form Submission',
          });
        }
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage(language === 'fr'
        ? 'Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.'
        : 'An error occurred. Please try again or contact me directly via email.');
    }
  };

  const translations = {
    fr: {
      title: 'Envoyez-moi un message',
      name: 'Nom',
      namePlaceholder: 'Votre nom',
      email: 'Email',
      emailPlaceholder: 'votre.email@example.com',
      subject: 'Sujet',
      subjectPlaceholder: 'Objet de votre message (optionnel)',
      message: 'Message',
      messagePlaceholder: 'Votre message...',
      send: 'Envoyer',
      sending: 'Envoi en cours...',
      successTitle: 'Message envoyé !',
      successMessage: 'Merci pour votre message. Je vous répondrai dans les plus brefs délais.',
      errorTitle: 'Erreur',
      required: 'Champs obligatoires',
    },
    en: {
      title: 'Send me a message',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your.email@example.com',
      subject: 'Subject',
      subjectPlaceholder: 'Subject of your message (optional)',
      message: 'Message',
      messagePlaceholder: 'Your message...',
      send: 'Send',
      sending: 'Sending...',
      successTitle: 'Message sent!',
      successMessage: 'Thank you for your message. I will reply as soon as possible.',
      errorTitle: 'Error',
      required: 'Required fields',
    },
  };

  const t = translations[language] || translations.fr;

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        {t.title}
      </h3>

      {status === 'success' ? (
        <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/30 text-center animate-fade-in">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-green-400 mb-2">{t.successTitle}</h4>
          <p className="text-dark-300">{t.successMessage}</p>
          <button
            onClick={() => setStatus('')}
            className="mt-6 px-6 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-400 rounded-lg transition-all duration-300"
          >
            {language === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
          </button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Nom */}
          <div>
            <label htmlFor="from_name" className="block text-sm font-medium text-dark-300 mb-2">
              {t.name} <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder={t.namePlaceholder}
              required
              className="w-full px-4 py-3 bg-dark-900/50 border border-primary-500/20 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="from_email" className="block text-sm font-medium text-dark-300 mb-2">
              {t.email} <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder={t.emailPlaceholder}
              required
              className="w-full px-4 py-3 bg-dark-900/50 border border-primary-500/20 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 transition-all duration-300"
            />
          </div>

          {/* Sujet */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-dark-300 mb-2">
              {t.subject}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={t.subjectPlaceholder}
              className="w-full px-4 py-3 bg-dark-900/50 border border-primary-500/20 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
              {t.message} <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.messagePlaceholder}
              required
              rows={6}
              className="w-full px-4 py-3 bg-dark-900/50 border border-primary-500/20 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 transition-all duration-300 resize-none"
            />
          </div>

          {/* Message d'erreur */}
          {status === 'error' && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm animate-fade-in">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{errorMessage}</span>
              </div>
            </div>
          )}

          {/* Bouton Submit */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 disabled:from-primary-600/50 disabled:to-purple-600/50 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-xl shadow-primary-500/20 flex items-center justify-center gap-2"
          >
            {status === 'sending' ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t.sending}
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.send}
              </>
            )}
          </button>

          <p className="text-center text-xs text-dark-500">
            <span className="text-red-400">*</span> {t.required}
          </p>
        </form>
      )}
    </div>
  );
}
