// ── Language Translations: The Leadership Trail™ ─────────────────────
const translations = {
  en: {
    // ── INDEX: Navigation ──────────────────────────────────────────────
    'nav-journey':      'The Journey',
    'nav-philosophy':   'Philosophy',
    'nav-forwhom':      "Who It's For",
    'nav-explore':      'Explore',
    // ── INDEX: Navigation (journey.html) ──────────────────────────────
    'nav-overview':     'Overview',
    'nav-phases':       'The Phases',
    'nav-cards':        'Leadership Distinction Cards',
    'nav-about':        'About',
    'nav-connect':      'Connect',
    // ── INDEX: Hero ───────────────────────────────────────────────────
    'hero-eyebrow':     'The Green Connection',
    'hero-title':       'Leadership Is a <em>Journey</em>,<br>Not an Event',
    'hero-sub':         'A five-phase development trail for leaders and teams who want to build culture through rhythm, not intensity.',
    'hero-btn-primary': 'Discover the Trail',
    'hero-btn-ghost':   'Explore the Journey',
    // ── INDEX: Intro ──────────────────────────────────────────────────
    'intro-label':      'What is The Leadership Trail™?',
    'intro-title':      'A structured path from <em>Basecamp</em> to Range',
    'stat-1-label':     'Development phases',
    'stat-2-label':     'Leadership Distinction Cards',
    'stat-3-label':     'Fresh Air diagnostics',
    'stat-4-label':     'Shared language',
    // ── INDEX: Phases ─────────────────────────────────────────────────
    'phases-label':     'The Five Phases',
    'phases-title':     'Your trail from <em>safety</em><br>to sustained impact',
    'phases-btn':       'Deep Dive →',
    'phase-1-desc':     'Establish psychological safety, shared language, and the trust needed to begin the journey together.',
    'phase-1-tag':      'Foundation',
    'phase-2-desc':     'Clarify direction, values, and team agreements. Learn to read the terrain ahead.',
    'phase-2-tag':      'Direction',
    'phase-3-desc':     'Build rhythm and consistency. Stabilise daily leadership habits that create cultural traction.',
    'phase-3-tag':      'Rhythm',
    'phase-4-desc':     'Reach clarity of purpose and visible impact. Lead from strength and with full presence.',
    'phase-4-tag':      'Impact',
    'phase-5-desc':     'Distribute leadership, mentor others, and expand your influence across the wider landscape.',
    'phase-5-tag':      'Legacy',
    // ── INDEX: Philosophy ─────────────────────────────────────────────
    'philosophy-label': 'Our Philosophy',
    'philosophy-title': 'Built on three <em>enduring</em> beliefs',
    'phil-1-title':     'Pulse Leadership™',
    'phil-2-title':     'The Fresh Air Effect',
    'phil-2-body':      'A ten-question cultural diagnostic that clears the fog. Teams who name their reality can navigate it. Clarity precedes change.',
    'phil-3-title':     'Questions Over Answers',
    // ── INDEX: For Whom ───────────────────────────────────────────────
    'forwhom-label':    'Who Is This For?',
    'forwhom-title':    'Designed for those ready<br>to <em>lead differently</em>',
    'audience-1-title': 'Organisations &amp; Teams',
    'audience-2-title': 'Individual Leaders',
    // ── INDEX: CTA ────────────────────────────────────────────────────
    'cta-label':        'Ready to Begin?',
    'cta-title':        'The trail starts with<br>a single step',
    'cta-btn':          'Explore the Journey →',
    // ── JOURNEY: Page hero ────────────────────────────────────────────
    'breadcrumb-journey': 'The Journey',
    'page-hero-title':  'Walk the <em>Trail</em>.<br>Lead from Within.',
    'page-hero-sub':    'Five phases. Twenty-five Leadership Distinctions. One journey toward sustainable, deeply human leadership.',
    // ── JOURNEY: Trail nav ────────────────────────────────────────────
    'tnav-1':           'Basecamp',
    'tnav-2':           'Trail Pathfinding',
    'tnav-3':           'Trail Walking',
    'tnav-4':           'The Summit',
    'tnav-5':           'The Range',
    // ── JOURNEY: Phase labels & tags ──────────────────────────────────
    'p1-label':         'Phase One',
    'p1-tag':           'Foundation',
    'p2-label':         'Phase Two',
    'p2-tag':           'Direction',
    'p3-label':         'Phase Three',
    'p3-tag':           'Rhythm',
    'p4-label':         'Phase Four',
    'p4-tag':           'Impact',
    'p5-label':         'Phase Five',
    'p5-tag':           'Legacy',
    // ── JOURNEY: Phase 1 ──────────────────────────────────────────────
    'p1-h4-1':   'What happens here?',
    'p1-body-1': 'Every great journey begins with preparation. Basecamp is where leaders and teams establish the psychological safety, shared language, and mutual trust needed to venture further. Without a solid Basecamp, everything else risks collapse.',
    'p1-body-2': 'This phase focuses on slowing down enough to go fast. It uses structured exercises, including the Team Barometer and Team Weather tools, to surface what\'s actually happening beneath the surface of team dynamics.',
    'p1-h4-2':   'Core work in this phase',
    'p1-core':   'Teams identify their real starting point. Hidden tensions are named safely. Leaders learn to listen at a different depth.',
    'p1-h4-3':   'Leadership Distinction Cards: Basecamp',
    // ── JOURNEY: Phase 2 ──────────────────────────────────────────────
    'p2-h4-1':   'What happens here?',
    'p2-body-1': 'With safety established, leaders turn toward direction. Pathfinding is about learning to read the terrain, understanding context, clarifying values, and setting agreements that will guide the team through uncertain territory.',
    'p2-body-2': 'This is where the "why" gets articulated clearly enough to be shared. Leaders who skip this phase often find their teams moving fast, but in different directions.',
    'p2-h4-2':   'Core work in this phase',
    'p2-core':   'Shared purpose is named. Team agreements are co-created, not imposed. Values become operational, translated into specific behaviours. The difference between urgency and importance gets viscerally understood.',
    'p2-h4-3':   'Leadership Distinction Cards: Pathfinding',
    // ── JOURNEY: Phase 3 ──────────────────────────────────────────────
    'p3-h4-1':   'What happens here?',
    'p3-body-1': 'Trailwalking is where Pulse Leadership™ comes alive. This phase is about stabilising the rhythm of leadership, building consistent habits and practices that create cultural traction over time.',
    'p3-body-2': 'Most development programmes stop after inspiration. Trailwalking is where the real work begins: turning insights into daily practices, and daily practices into team culture.',
    'p3-h4-2':   'Core work in this phase',
    'p3-core':   'Leaders identify their "leadership pulse", the small, consistent actions that signal what they truly value. Team rituals are designed intentionally. The Fresh Air Effect diagnostic is used here to measure cultural temperature and spot drift before it becomes direction loss.',
    'p3-h4-3':   'Leadership Distinction Cards: Trailwalking',
    // ── JOURNEY: Phase 4 ──────────────────────────────────────────────
    'p4-h4-1':   'What happens here?',
    'p4-body-1': 'Summit is the phase of clarity and visible impact. Leaders operating here have done enough inner work and team building that their leadership is now legible, teams know what to expect, and the culture has momentum of its own.',
    'p4-body-2': 'This is not the end of the journey, it is the peak of a particular cycle. What a leader sees from Summit changes what they\'re able to lead next.',
    'p4-h4-2':   'Core work in this phase',
    'p4-core':   'Presence deepens. Leaders move from solving problems to creating conditions. Feedback flows freely in all directions. The leader\'s attention shifts from their own performance to the health of the whole system they are part of.',
    'p4-h4-3':   'Leadership Distinction Cards: Summit',
    // ── JOURNEY: Phase 5 ──────────────────────────────────────────────
    'p5-h4-1':   'What happens here?',
    'p5-body-1': 'Range is where a leader\'s influence extends beyond their direct team. Leaders in Range are building pipelines, mentoring others, and contributing to the health of their wider organisation and beyond.',
    'p5-body-2': 'This phase is about legacy, not as a distant concept, but as a daily practice of investing in others with the same intentionality that was once reserved for personal development.',
    'p5-h4-2':   'Core work in this phase',
    'p5-core':   'Leadership becomes distributed. Mentoring is structured, not ad-hoc. The leader creates contexts in which the next generation of leaders can find their own trail. The question shifts from "how do I lead better?" to "how do I help others lead at all?"',
    'p5-h4-3':   'Leadership Distinction Cards: Range',
    // ── JOURNEY: Cards section ────────────────────────────────────────
    'cards-label': 'The Leadership Distinction Cards',
    'cards-title': '25 questions that change<br>how you see leadership',
    // ── JOURNEY: Fresh Air ────────────────────────────────────────────
    'fresh-label':   'Cultural Diagnostic',
    'fresh-title':   'The Fresh Air <em>Effect</em>',
    'fresh-reveals': 'What the diagnostic reveals',
    // ── JOURNEY: About ────────────────────────────────────────────────
    'about-label': 'About',
    'about-title': 'The guide behind<br>the <em>trail</em>',
    // ── JOURNEY: Walk together ────────────────────────────────────────
    'walk-label':    'The Leadership Trail™',
    'walk-headline': "Let's take a walk together.",
    'walk-cta':      'Start the conversation ↓',
    // ── JOURNEY: Contact ──────────────────────────────────────────────
    'contact-label':    "Let's Connect for a walk",
    'contact-title':    'Ready to bring the trail<br>to your team?',
    'contact-intro':    "Whether you're an organisation exploring a leadership programme...",
    'contact-send':     'Send a message',
    'contact-tgc':      'The Green Connection',
    'contact-location': 'Based in the Netherlands · Working internationally',
    'form-title':       'Start a conversation',
    'form-sub':         'Tell us a little about where you are on your trail.',
    'form-name-label':  'Your name',
    'form-email-label': 'Email address',
    'form-role-label':  'I am…',
    'form-msg-label':   "What's on your mind?",
    'form-submit':      'Send Message →',
    // ── Footer ────────────────────────────────────────────────────────
    'footer-contact': 'Contact',
    'footer-link':    'The Journey',
  },

  nl: {
    // ── INDEX: Navigation ──────────────────────────────────────────────
    'nav-journey':      'De Trektocht',
    'nav-philosophy':   'Filosofie',
    'nav-forwhom':      'Voor Wie',
    'nav-explore':      'Ontdek',
    // ── JOURNEY: Navigation ───────────────────────────────────────────
    'nav-overview':     'Overzicht',
    'nav-phases':       'De Fasen',
    'nav-cards':        'Leiderschapskaarten',
    'nav-about':        'Over',
    'nav-connect':      'Contact',
    // ── INDEX: Hero ───────────────────────────────────────────────────
    'hero-eyebrow':     'The Green Connection',
    'hero-title':       'Leiderschap is een <em>trektocht</em>,<br>Geen georganiserde reis',
    'hero-sub':         'Een trail met 5 momenten voor leiders en teams die cultuur willen opbouwen door ritme, niet door intensiteit.',
    'hero-btn-primary': 'Ontdek de Trail',
    'hero-btn-ghost':   'Verken de trektocht',
    // ── INDEX: Intro ──────────────────────────────────────────────────
    'intro-label':      'Wat is The Leadership Trail™?',
    'intro-title':      'Een <em>gestructureerde trail</em> van Basecamp naar Range',
    'stat-1-label':     'Ontwikkelingsfasen',
    'stat-2-label':     'Leadership Distinction Cards',
    'stat-3-label':     'Fresh Air diagnose',
    'stat-4-label':     'Gedeelde taal',
    // ── INDEX: Phases ─────────────────────────────────────────────────
    'phases-label':     'De Vijf Fasen',
    'phases-title':     'Jouw trail van <em>veiligheid</em><br>naar blijvende impact',
    'phases-btn':       'Meer Info →',
    'phase-1-desc':     'Vestig psychologische veiligheid, gedeelde taal en het vertrouwen dat nodig is om samen de reis te beginnen.',
    'phase-1-tag':      'Fundament',
    'phase-2-desc':     'Verduidelijk richting, waarden en teamafspraken. Leer het terrein voor je te lezen.',
    'phase-2-tag':      'Richting',
    'phase-3-desc':     'Bouw ritme en consistentie op. Stabiliseer dagelijkse leiderschapsgewoonten die culturele tractie creëren.',
    'phase-3-tag':      'Ritme',
    'phase-4-desc':     'Bereik helderheid van doel en zichtbare impact. Leid vanuit kracht en met volledige aanwezigheid.',
    'phase-4-tag':      'Impact',
    'phase-5-desc':     'Verspreide het leiderschap, begeleid anderen en vergroot je invloed over het bredere landschap.',
    'phase-5-tag':      'Erfenis',
    // ── INDEX: Philosophy ─────────────────────────────────────────────
    'philosophy-label': 'Onze Filosofie',
    'philosophy-title': 'Gebouwd op drie <em>duurzame</em> overtuigingen',
    'phil-1-title':     'Pulse Leadership™',
    'phil-2-title':     'The Fresh Air Effect',
    'phil-2-body':      'Een culturele diagnose van tien vragen die de mist opheft. Teams die hun realiteit benoemen, kunnen ermee navigeren. Helderheid gaat aan verandering vooraf.',
    'phil-3-title':     'Vragen Boven Antwoorden',
    // ── INDEX: For Whom ───────────────────────────────────────────────
    'forwhom-label':    'Voor Wie Is Dit?',
    'forwhom-title':    'Ontworpen voor wie klaar is<br>om <em>anders te leiden</em>',
    'audience-1-title': 'Organisaties &amp; Teams',
    'audience-2-title': 'Individuele Leiders',
    // ── INDEX: CTA ────────────────────────────────────────────────────
    'cta-label':        'Klaar om te Beginnen?',
    'cta-title':        'De trail begint met<br>één enkele stap',
    'cta-btn':          'Verken de Reis →',
    // ── JOURNEY: Page hero ────────────────────────────────────────────
    'breadcrumb-journey': 'De Reis',
    'page-hero-title':  'Loop de <em>Trail</em>.<br>Leid van Binnenuit.',
    'page-hero-sub':    'Vijf fasen. Vijfentwintig keer een onderscheidende keuze in Leiderschap. Één reis naar duurzaam, diep menselijk leiderschap.',
    // ── JOURNEY: Trail nav ────────────────────────────────────────────
    'tnav-1':           'Basecamp',
    'tnav-2':           'Trail Pathfinding',
    'tnav-3':           'Trail Walking',
    'tnav-4':           'The Summit',
    'tnav-5':           'The Range',
    // ── JOURNEY: Phase labels & tags ──────────────────────────────────
    'p1-label':         'Fase Één',
    'p1-tag':           'Fundament',
    'p2-label':         'Fase Twee',
    'p2-tag':           'Richting',
    'p3-label':         'Fase Drie',
    'p3-tag':           'Ritme',
    'p4-label':         'Fase Vier',
    'p4-tag':           'Impact',
    'p5-label':         'Fase Vijf',
    'p5-tag':           'Erfenis',
    // ── JOURNEY: Phase 1 ──────────────────────────────────────────────
    'p1-h4-1':   'Wat gebeurt hier?',
    'p1-body-1': 'Elke grote reis begint met voorbereiding. Basecamp is waar leiders en teams de psychologische veiligheid, gedeelde taal en onderlinge vertrouwen vestigen die nodig zijn om verder te gaan. Zonder een solide Basecamp loopt alles het risico ineen te storten.',
    'p1-body-2': 'Deze fase richt zich op genoeg vertragen om snel te kunnen gaan. Het gebruikt gestructureerde oefeningen, waaronder de Teambarometer en Teamweer tools, om zichtbaar te maken wat er werkelijk onder de oppervlakte van teamdynamiek speelt.',
    'p1-h4-2':   'Kernwerk in deze fase',
    'p1-core':   'Teams identificeren hun werkelijke startpunt. Verborgen spanningen worden veilig benoemd. Leiders leren luisteren op een ander niveau.',
    'p1-h4-3':   'Leadership Distinction Cards: Basecamp',
    // ── JOURNEY: Phase 2 ──────────────────────────────────────────────
    'p2-h4-1':   'Wat gebeurt hier?',
    'p2-body-1': 'Met veiligheid als basis richten leiders zich op richting. Pathfinding gaat over het leren lezen van het terrein, het begrijpen van context, het verduidelijken van waarden en het maken van afspraken die het team door onzeker terrein leiden.',
    'p2-body-2': 'Dit is waar het "waarom" duidelijk genoeg wordt geformuleerd om te delen. Leiders die deze fase overslaan, ontdekken vaak dat hun teams snel bewegen — maar in verschillende richtingen.',
    'p2-h4-2':   'Kernwerk in deze fase',
    'p2-core':   'Gedeeld doel wordt benoemd. Teamafspraken worden samen gecreëerd, niet opgelegd. Waarden worden operationeel — vertaald naar specifiek gedrag. Het verschil tussen urgentie en belang wordt diep gevoeld.',
    'p2-h4-3':   'Leadership Distinction Cards: Pathfinding',
    // ── JOURNEY: Phase 3 ──────────────────────────────────────────────
    'p3-h4-1':   'Wat gebeurt hier?',
    'p3-body-1': 'Trail Walking is waar Pulse Leadership™ tot leven komt. Deze fase gaat over het stabiliseren van het ritme van leiderschap — het opbouwen van consistente gewoonten en praktijken die culturele tractie creëren in de loop van de tijd.',
    'p3-body-2': 'De meeste ontwikkelingsprogramma\'s stoppen na inspiratie. Trail Walking is waar het echte werk begint: inzichten omzetten in dagelijkse praktijken, en dagelijkse praktijken in teamcultuur.',
    'p3-h4-2':   'Kernwerk in deze fase',
    'p3-core':   'Leiders identificeren hun "leiderschapspuls" — de kleine, consistente acties die signaleren wat ze echt waarderen. Teamrituelen worden bewust ontworpen. De Fresh Air Effect diagnose wordt hier gebruikt om de culturele temperatuur te meten en vanuit de meetgegevens actie te ondernemen.',
    'p3-h4-3':   'Leadership Distinction Cards: Trailwalking',
    // ── JOURNEY: Phase 4 ──────────────────────────────────────────────
    'p4-h4-1':   'Wat gebeurt hier?',
    'p4-body-1': 'Summit is de fase van helderheid en zichtbare impact. Leiders die hier actief zijn, hebben genoeg innerlijk werk en teamopbouw gedaan zodat hun leiderschap nu leesbaar is — teams weten wat ze kunnen verwachten, en de cultuur heeft een eigen momentum.',
    'p4-body-2': 'Dit is niet het einde van de reis — het is de top van een bepaalde cyclus. Wat een leider ziet van de Summit verandert wat hij of zij vervolgens kan leiden.',
    'p4-h4-2':   'Kernwerk in deze fase',
    'p4-core':   'Aanwezigheid verdiept. Leiders verschuiven van problemen oplossen naar condities creëren. Feedback stroomt vrij in alle richtingen. De aandacht van de leider verschuift van eigen prestaties naar de gezondheid van het hele systeem.',
    'p4-h4-3':   'Leadership Distinction Cards: Summit',
    // ── JOURNEY: Phase 5 ──────────────────────────────────────────────
    'p5-h4-1':   'Wat gebeurt hier?',
    'p5-body-1': 'Range is waar de invloed van een leider verder reikt dan hun directe team. Leiders in Range bouwen pijplijnen, begeleiden anderen en dragen bij aan de gezondheid van hun bredere organisatie en daarbuiten.',
    'p5-body-2': 'Deze fase gaat over erfenis — niet als een verre concept, maar als een dagelijkse praktijk van investeren in anderen met dezelfde intentionaliteit die ooit was gereserveerd voor persoonlijke ontwikkeling.',
    'p5-h4-2':   'Kernwerk in deze fase',
    'p5-core':   'Leiderschap wordt verdeeld. Mentoring is gestructureerd, niet ad-hoc. De leider creëert contexten waarin de volgende generatie leiders hun eigen pad kan vinden. De vraag verschuift van "hoe leid ik beter?" naar "hoe help ik anderen überhaupt te leiden?"',
    'p5-h4-3':   'Leadership Distinction Cards: Range',
    // ── JOURNEY: Cards section ────────────────────────────────────────
    'cards-label': 'De Leadership Distinction Cards',
    'cards-title': '25 vragen die veranderen<br>hoe je leiderschap ziet',
    // ── JOURNEY: Fresh Air ────────────────────────────────────────────
    'fresh-label':   'Culturele Diagnose',
    'fresh-title':   'The Fresh Air <em>Effect</em>',
    'fresh-reveals': 'Wat de diagnose onthult',
    // ── JOURNEY: About ────────────────────────────────────────────────
    'about-label': 'Over',
    'about-title': 'De gids achter<br>het <em>pad</em>',
    // ── JOURNEY: Walk together ────────────────────────────────────────
    'walk-label':    'The Leadership Trail™',
    'walk-headline': 'Laten we samen een stuk lopen.',
    'walk-cta':      'Start het gesprek ↓',
    // ── JOURNEY: Contact ──────────────────────────────────────────────
    'contact-label':    'Spreek af voor een wandeling',
    'contact-title':    'Klaar om de trail naar<br>jouw team te brengen?',
    'contact-intro':    'Als je als organisatie geinteresserd ben in een leiderschapsprogramma',
    'contact-send':     'Stuur een bericht',
    'contact-tgc':      'The Green Connection',
    'contact-location': 'Gevestigd in Nederland · Werkzaam internationaal',
    'form-title':       'Start een gesprek',
    'form-sub':         'Vertel mij over waar je bent op je trail.',
    'form-name-label':  'Jouw naam',
    'form-email-label': 'E-mailadres',
    'form-role-label':  'Ik ben…',
    'form-msg-label':   'Wat houdt je bezig?',
    'form-submit':      'Verstuur Bericht →',
    // ── Footer ────────────────────────────────────────────────────────
    'footer-contact': 'Contact',
    'footer-link':    'De Reis',
  }
};

// ── Language switcher logic ───────────────────────────────────────────
let currentLang = localStorage.getItem('lt-lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lt-lang', lang);

  // Update all data-i18n text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Update all data-i18n-html elements (innerHTML, e.g. with <em>, <br>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update toggle button appearance
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.querySelectorAll('span').forEach(s => s.classList.remove('lang-active'));
    btn.querySelector(`[data-lang="${lang}"]`).classList.add('lang-active');
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}

function initLangToggle() {
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', e => {
      const target = e.target.closest('[data-lang]');
      if (target) {
        applyLanguage(target.getAttribute('data-lang'));
      }
    });
  });
  applyLanguage(currentLang);
}

document.addEventListener('DOMContentLoaded', initLangToggle);
