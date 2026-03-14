// Google Analytics Event Tracking Utilities

/**
 * Track un événement personnalisé dans Google Analytics
 * @param {string} eventName - Nom de l'événement
 * @param {object} parameters - Paramètres additionnels
 */
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
    console.log('📊 GA Event:', eventName, parameters);
  }
};

/**
 * Track l'ouverture d'un projet
 * @param {string} projectId - ID du projet (ex: 'kairos-sensemaking')
 * @param {string} projectTitle - Titre du projet
 */
export const trackProjectView = (projectId, projectTitle) => {
  trackEvent('project_view', {
    event_category: 'Projects',
    event_label: projectTitle,
    project_id: projectId,
  });
};

/**
 * Track le téléchargement du CV
 * @param {string} source - Source du clic (ex: 'hero', 'contact', 'navbar')
 */
export const trackCVDownload = (source) => {
  trackEvent('cv_download', {
    event_category: 'Engagement',
    event_label: 'CV Download',
    download_source: source,
  });
};

/**
 * Track un clic sur un réseau social
 * @param {string} platform - Plateforme (ex: 'linkedin', 'github', 'email')
 * @param {string} location - Emplacement du clic (ex: 'hero', 'contact', 'footer')
 */
export const trackSocialClick = (platform, location) => {
  trackEvent('social_click', {
    event_category: 'Social',
    event_label: platform,
    click_location: location,
  });
};

/**
 * Track le changement de langue
 * @param {string} from - Langue précédente
 * @param {string} to - Nouvelle langue
 */
export const trackLanguageChange = (from, to) => {
  trackEvent('language_change', {
    event_category: 'Settings',
    event_label: `${from} → ${to}`,
    from_language: from,
    to_language: to,
  });
};

/**
 * Track un clic sur "Me contacter"
 * @param {string} location - Emplacement du bouton
 */
export const trackContactClick = (location) => {
  trackEvent('contact_click', {
    event_category: 'Engagement',
    event_label: 'Contact Button',
    button_location: location,
  });
};

/**
 * Track l'ouverture d'une certification
 * @param {string} certId - ID de la certification
 * @param {string} certTitle - Titre de la certification
 */
export const trackCertificationView = (certId, certTitle) => {
  trackEvent('certification_view', {
    event_category: 'Certifications',
    event_label: certTitle,
    certification_id: certId,
  });
};

/**
 * Track le scroll jusqu'à une section
 * @param {string} sectionName - Nom de la section (ex: 'projects', 'expertise')
 */
export const trackSectionView = (sectionName) => {
  trackEvent('section_view', {
    event_category: 'Navigation',
    event_label: sectionName,
  });
};

/**
 * Track l'ouverture du lightbox pour un screenshot
 * @param {string} projectId - ID du projet
 * @param {number} imageIndex - Index de l'image
 */
export const trackScreenshotView = (projectId, imageIndex) => {
  trackEvent('screenshot_view', {
    event_category: 'Projects',
    event_label: `${projectId} - Image ${imageIndex + 1}`,
    project_id: projectId,
    image_index: imageIndex,
  });
};
