<script>
// Animation au scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// Animation des cartes avec délai pour effet de cascade
document.querySelectorAll('.animated-card').forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});
</script>
<!-- ====================================== -->
<!-- BANNER COOKIES RGPD - Nicolas Morlot -->
<!-- ====================================== -->
<!-- ====================================== -->
<div id="cookie-banner" style="display: none; position: fixed; bottom: 0; left: 0; right: 0; background: linear-gradient(135deg, #1A202C 0%, #2C5282 100%); color: white; padding: 1.5rem; z-index: 10000; box-shadow: 0 -4px 20px rgba(0,0,0,0.3); border-top: 3px solid #8B4513;">
  <div class="container" style="max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap;">
    
    <div style="flex: 1; min-width: 300px;">
      <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; font-weight: 600;">🍪 Gestion des cookies</h3>
      <p style="margin: 0; font-size: 0.95rem; line-height: 1.4; opacity: 0.95; color: rgba(255, 255, 255, 0.95); text-shadow: 0 1px 3px rgba(0,0,0,0.3);">
        Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic. Vos données restent privées et sécurisées.
        <a href="politique-cookies.html" style="color: #E53E3E; text-decoration: underline; font-weight: 500;">En savoir plus</a>
      </p>
    </div>
    
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <button onclick="acceptAllCookies()" style="background: #E53E3E; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.95rem; transition: all 0.3s ease;">
        ✅ Accepter tout
      </button>
      <button onclick="showCookieSettings()" style="background: transparent; color: white; border: 2px solid white; padding: 0.75rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: 500; font-size: 0.95rem; transition: all 0.3s ease;">
        ⚙️ Personnaliser
      </button>
      <button onclick="refuseAllCookies()" style="background: transparent; color: white; border: 1px solid rgba(255,255,255,0.5); padding: 0.75rem 1.5rem; border-radius: 8px; cursor: pointer; font-size: 0.95rem; transition: all 0.3s ease;">
        ❌ Refuser
      </button>
    </div>
  </div>
</div>

<!-- MODAL PARAMÈTRES COOKIES -->
<div id="cookie-settings" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); z-index: 10001; padding: 2rem; backdrop-filter: blur(5px);">
  <div style="background: white; max-width: 600px; margin: 2rem auto; border-radius: 16px; padding: 2rem; max-height: 80vh; overflow-y: auto; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
    
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem;">
      <h2 style="margin: 0; color: #1A202C;">⚙️ Paramètres des cookies</h2>
      <button onclick="closeCookieSettings()" style="background: #E5E7EB; border: none; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; font-size: 1.2rem;">×</button>
    </div>
    
    <div style="margin: 1.5rem 0; padding: 1.5rem; background: #F0FDF4; border-radius: 12px; border-left: 4px solid #10B981;">
      <h3 style="display: flex; align-items: center; justify-content: space-between; margin: 0 0 0.5rem 0;">
        🔧 Cookies essentiels
        <span style="background: #10B981; color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">OBLIGATOIRE</span>
      </h3>
      <p style="margin: 0; font-size: 0.9rem; color: #374151;">Nécessaires au fonctionnement du site (navigation, sécurité, préférences cookies).</p>
    </div>
    
    <div style="margin: 1.5rem 0; padding: 1.5rem; background: #EFF6FF; border-radius: 12px; border-left: 4px solid #3B82F6;">
      <h3 style="display: flex; align-items: center; justify-content: space-between; margin: 0 0 0.5rem 0;">
        📊 Cookies analytiques
        <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
          <input type="checkbox" id="analytics-cookies" checked style="width: 18px; height: 18px;">
          <span style="font-size: 0.9rem; font-weight: 500;">Autoriser</span>
        </label>
      </h3>
      <p style="margin: 0; font-size: 0.9rem; color: #374151;">Google Analytics pour comprendre l'utilisation du site et l'améliorer (trafic, pages vues, origine visiteurs).</p>
    </div>
    
    <div style="margin: 1.5rem 0; padding: 1.5rem; background: #FEF2F2; border-radius: 12px; border-left: 4px solid #EF4444;">
      <h3 style="display: flex; align-items: center; justify-content: space-between; margin: 0 0 0.5rem 0;">
        🎯 Cookies marketing
        <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
          <input type="checkbox" id="marketing-cookies" style="width: 18px; height: 18px;">
          <span style="font-size: 0.9rem; font-weight: 500;">Autoriser</span>
        </label>
      </h3>
      <p style="margin: 0; font-size: 0.9rem; color: #374151;">Remarketing et publicités personnalisées. Non utilisé actuellement mais prévu pour l'avenir.</p>
    </div>
    
    <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem;">
      <button onclick="closeCookieSettings()" style="background: #E5E7EB; color: #374151; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: 500;">
        Annuler
      </button>
      <button onclick="saveCookieSettings()" style="background: #E53E3E; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: 600;">
        ✅ Enregistrer mes choix
      </button>
    </div>
  </div>
</div>

<script>
// ==========================================
// GESTION COOKIES RGPD - Nicolas Morlot
// ==========================================

function checkCookieConsent() {
  const consent = localStorage.getItem('nicolas-morlot-cookies');
  if (!consent) {
    // Afficher le banner après 2 secondes
    setTimeout(() => {
      document.getElementById('cookie-banner').style.display = 'block';
    }, 2000);
  } else {
    const consentData = JSON.parse(consent);
    // Vérifier si le consentement n'est pas trop ancien (6 mois max)
    const sixMonthsAgo = new Date().getTime() - (6 * 30 * 24 * 60 * 60 * 1000);
    if (consentData.timestamp > sixMonthsAgo) {
      loadServices(consentData);
    } else {
      // Consentement expiré, redemander
      localStorage.removeItem('nicolas-morlot-cookies');
      document.getElementById('cookie-banner').style.display = 'block';
    }
  }
}

function acceptAllCookies() {
  const consent = {
    essential: true,
    analytics: true,
    marketing: false,
    timestamp: new Date().getTime(),
    version: '1.0'
  };
  localStorage.setItem('nicolas-morlot-cookies', JSON.stringify(consent));
  document.getElementById('cookie-banner').style.display = 'none';
  loadServices(consent);
  
  // Feedback utilisateur
  showCookieMessage('✅ Tous les cookies ont été acceptés. Merci !');
}

function refuseAllCookies() {
  const consent = {
    essential: true,
    analytics: false,
    marketing: false,
    timestamp: new Date().getTime(),
    version: '1.0'
  };
  localStorage.setItem('nicolas-morlot-cookies', JSON.stringify(consent));
  document.getElementById('cookie-banner').style.display = 'none';
  
  // Feedback utilisateur
  showCookieMessage('❌ Seuls les cookies essentiels sont activés.');
}

function showCookieSettings() {
  document.getElementById('cookie-settings').style.display = 'block';
  
  // Pré-remplir avec les choix actuels
  const consent = localStorage.getItem('nicolas-morlot-cookies');
  if (consent) {
    const consentData = JSON.parse(consent);
    document.getElementById('analytics-cookies').checked = consentData.analytics || false;
    document.getElementById('marketing-cookies').checked = consentData.marketing || false;
  }
}

function closeCookieSettings() {
  document.getElementById('cookie-settings').style.display = 'none';
}

function saveCookieSettings() {
  const consent = {
    essential: true,
    analytics: document.getElementById('analytics-cookies').checked,
    marketing: document.getElementById('marketing-cookies').checked,
    timestamp: new Date().getTime(),
    version: '1.0'
  };
  
  localStorage.setItem('nicolas-morlot-cookies', JSON.stringify(consent));
  document.getElementById('cookie-banner').style.display = 'none';
  document.getElementById('cookie-settings').style.display = 'none';
  loadServices(consent);
  
  // Feedback utilisateur
  showCookieMessage('⚙️ Vos préférences ont été enregistrées.');
}

function loadServices(consent) {
  // Google Analytics (uniquement si autorisé)
  if (consent.analytics) {
    loadGoogleAnalytics();
  }
  
  // Services marketing (pour plus tard)
  if (consent.marketing) {
    // Facebook Pixel, Google Ads, etc.
    console.log('Services marketing autorisés');
  }
  
  console.log('Services chargés selon consentement:', consent);
}

function loadGoogleAnalytics() {
  // Remplacez 'GA_MEASUREMENT_ID' par votre vraie ID Google Analytics
  /*
  window.gtag = window.gtag || function() { (gtag.q = gtag.q || []).push(arguments); };
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID', {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure'
  });
  
  // Charger le script GA
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
  document.head.appendChild(script);
  */
  
  console.log('Google Analytics chargé (mode dev)');
}

function showCookieMessage(message) {
  // Créer une notification temporaire
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #10B981;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10002;
    font-weight: 500;
    animation: slideInRight 0.3s ease;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Supprimer après 3 secondes
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Fonction pour réouvrir les paramètres (lien footer)
function reopenCookieSettings() {
  const consent = localStorage.getItem('nicolas-morlot-cookies');
  if (consent) {
    showCookieSettings();
  } else {
    checkCookieConsent();
  }
}

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  checkCookieConsent();
});

// Style pour l'animation
const style = document.createElement('style');
style.textContent = `
@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
`;
document.head.appendChild(style);
</script>