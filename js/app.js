/**
 * DeutschAudio Portal - Core Application Controller
 * Handles Audio Playback, Mobile-Optimized Responsive Touch UI,
 * Fallbacks (TTS/WebAudio), Search & Filter, and Bilingual Translation.
 * 
 * Developed by Sahli Reda
 */

// Bilingual Translation Dictionary
const I18N = {
  de: {
    appTitle: "DeutschAudio",
    portal: "Portal",
    appSubtitle: "by Sahli Reda · Spektrum Deutsch A1+ (12 Kapitel)",
    searchPlaceholder: "Suche nach Track (z. B. '02', 'Begrüßung', 'Einkaufen')...",
    selectLevel: "Sprachniveau auswählen",
    cefr: "Gemeinsamer Europäischer Referenzrahmen (GER)",
    allCategories: "Alle Kategorien",
    dialogues: "💬 Dialoge",
    phonetics: "🗣️ Phonetik",
    listening: "🎧 Hörtexte",
    exercises: "📝 Übungen",
    vocabulary: "📖 Wortschatz",
    openPdf: "📖 Lehrbuch (PDF)",
    openPdfDesc: "Spektrum Deutsch A1+ Lehrbuch (PDF) öffnen",
    allParts: "Alle Teile",
    bookSection: "Buchteil:",
    expandAll: "Alle ausklappen",
    collapseAll: "Alle einklappen",
    playAll: "Alle 12 Kapitel abspielen",
    playChapter: "Kapitel abspielen",
    audios: "Audios",
    chapter: "Kapitel",
    selectTrackPrompt: "Wähle einen Track...",
    readyToPlay: "Bereit zum Abspielen",
    ttsActive: "Sprachausgabe (TTS) aktiv",
    transcript: "Transkript",
    speed: "Tempo",
    volume: "Lautstärke",
    comingSoon: "In Vorbereitung",
    comingSoonTitle: "Inhalte für dieses Niveau folgen in Kürze",
    comingSoonDesc: "Derzeit steht Ihnen das vollständige Lehrwerk Spektrum Deutsch A1+ mit allen 12 Kapiteln (Teil 1 & Teil 2) zur Verfügung. Weitere Niveaus können zukünftig über js/data.js ergänzt werden.",
    backToA1: "← Zurück zu A1 (12 Kapitel)",
    germanOnly: "🇩🇪 Deutsch",
    englishOnly: "🇬🇧 English",
    bilingual: "📖 Zweisprachig (DE / EN)",
    close: "Schließen",
    tip: "💡 Tipp: Lesen Sie den Dialog laut mit, um Ihre Aussprache zu schulen.",
    shortcuts: "Tastatur-Kürzel",
    playPause: "Play / Pause",
    skip10: "+/- 10 Sekunden",
    volUpDown: "Lautstärke +/-",
    mute: "Stummschalten",
    track: "Track",
    searchResultsFor: "Gefunden: <strong>{count}</strong> Audio-Tracks für Suche: <em>\"{query}\"</em>",
    clearSearch: "Suche aufheben",
    copySuccess: "Pfad in Zwischenablage kopiert:",
    toastSpeed: "Wiedergabegeschwindigkeit:",
    toastRepeatOne: "Wiederholung: Aktueller Track",
    toastRepeatAll: "Wiederholung: Alle Tracks",
    toastRepeatOff: "Wiederholung: Aus",
    toastShuffleOn: "Zufallswiedergabe: Aktiv",
    toastShuffleOff: "Zufallswiedergabe: Deaktiviert",
    toastEndReached: "Ende der Titelliste erreicht",
    toastSkipBack: "-10s zurück",
    toastSkipFwd: "+10s vor"
  },
  en: {
    appTitle: "DeutschAudio",
    portal: "Portal",
    appSubtitle: "by Sahli Reda · Spektrum Deutsch A1+ (12 Chapters)",
    searchPlaceholder: "Search audio tracks (e.g. '02', 'Greetings', 'Shopping')...",
    selectLevel: "Select Proficiency Level",
    cefr: "Common European Framework of Reference (CEFR)",
    allCategories: "All Categories",
    dialogues: "💬 Dialogues",
    phonetics: "🗣️ Phonetics",
    listening: "🎧 Listening Texts",
    exercises: "📝 Exercises",
    vocabulary: "📖 Vocabulary",
    openPdf: "📖 Coursebook (PDF)",
    openPdfDesc: "Open Spektrum Deutsch A1+ Coursebook (PDF)",
    allParts: "All Parts",
    bookSection: "Book Section:",
    expandAll: "Expand All",
    collapseAll: "Collapse All",
    playAll: "Play All 12 Chapters",
    playChapter: "Play Chapter",
    audios: "Audios",
    chapter: "Chapter",
    selectTrackPrompt: "Select a track...",
    readyToPlay: "Ready to play",
    ttsActive: "Speech Synthesis (TTS) active",
    transcript: "Transcript",
    speed: "Speed",
    volume: "Volume",
    comingSoon: "Coming Soon",
    comingSoonTitle: "Content for this level will be added soon",
    comingSoonDesc: "Currently, the complete Spektrum Deutsch A1+ coursebook with all 12 chapters (Part 1 & Part 2) is active. Additional levels can be added in future updates via js/data.js.",
    backToA1: "← Back to A1 (12 Chapters)",
    germanOnly: "🇩🇪 German",
    englishOnly: "🇬🇧 English",
    bilingual: "📖 Bilingual (DE / EN)",
    close: "Close",
    tip: "💡 Tip: Read the dialogue aloud to practice your German pronunciation.",
    shortcuts: "Keyboard Shortcuts",
    playPause: "Play / Pause",
    skip10: "+/- 10 Seconds",
    volUpDown: "Volume +/-",
    mute: "Mute",
    track: "Track",
    searchResultsFor: "Found: <strong>{count}</strong> audio tracks for search: <em>\"{query}\"</em>",
    clearSearch: "Clear search",
    copySuccess: "Path copied to clipboard:",
    toastSpeed: "Playback speed:",
    toastRepeatOne: "Repeat: Current Track",
    toastRepeatAll: "Repeat: All Tracks",
    toastRepeatOff: "Repeat: Off",
    toastShuffleOn: "Shuffle: Active",
    toastShuffleOff: "Shuffle: Off",
    toastEndReached: "End of playlist reached",
    toastSkipBack: "-10s back",
    toastSkipFwd: "+10s forward"
  }
};

// Application State
const state = {
  currentLanguage: localStorage.getItem("deutsch_portal_lang") || "de",
  transcriptViewMode: "bilingual", // 'bilingual' | 'de' | 'en'

  currentLevelId: "A1",
  currentSectionId: "all",
  activeFilterType: "all",
  searchQuery: "",
  
  // Audio Playback State
  currentTrackObj: null, // { track, chapter, section, book, level }
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 0.85,
  isMuted: false,
  playbackRate: 1.0,
  repeatMode: "off", // 'off' | 'all' | 'one'
  isShuffle: false,
  
  // Fallback Simulation State
  isSimulatedAudio: false,
  simulationInterval: null,
  activeSpeechUtterance: null,
  
  // UI State
  expandedChapters: new Set(["a1-k1", "a1-k2"]), // Default expanded
  activeTranscriptTrack: null,
  toastTimeout: null,
  isSeeking: false
};

// Helper for i18n lookup
function t(key, vars = {}) {
  const dict = I18N[state.currentLanguage] || I18N.de;
  let str = dict[key] || I18N.de[key] || key;
  for (const [vKey, val] of Object.entries(vars)) {
    str = str.replace(new RegExp(`\\{${vKey}\\}`, 'g'), val);
  }
  return str;
}

// DOM Cache
const dom = {};

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  initDomReferences();
  initTheme();
  initLanguage();
  initAudioElement();
  setupEventListeners();
  renderLevelTabs();
  renderContent();
  setupKeyboardShortcuts();
  
  // Set default initial track (A1 Track 02) in standby mode
  const initialTrack = findTrackById("a1-k1-02");
  if (initialTrack) {
    loadTrack(initialTrack, false);
  }
});

/**
 * Cache frequently used DOM elements (Desktop + Mobile)
 */
function initDomReferences() {
  dom.audio = document.getElementById("main-audio");
  dom.levelTabsContainer = document.getElementById("level-tabs-container");
  dom.textbookContainer = document.getElementById("textbook-container");
  dom.chaptersContainer = document.getElementById("chapters-container");
  dom.searchInput = document.getElementById("search-input");
  dom.clearSearchBtn = document.getElementById("clear-search-btn");
  dom.searchStatus = document.getElementById("search-status");
  dom.themeToggleBtn = document.getElementById("theme-toggle-btn");
  dom.themeIconLight = document.getElementById("theme-icon-light");
  dom.themeIconDark = document.getElementById("theme-icon-dark");
  
  // Language button
  dom.langToggleBtn = document.getElementById("lang-toggle-btn");
  dom.langFlag = document.getElementById("lang-flag");
  dom.langCode = document.getElementById("lang-code");

  // Desktop Bottom Player Elements
  dom.bottomPlayer = document.getElementById("bottom-player");
  dom.playerTrackTitle = document.getElementById("player-track-title");
  dom.playerTrackMeta = document.getElementById("player-track-meta");
  dom.playerLevelBadge = document.getElementById("player-level-badge");
  dom.playerEqualizer = document.getElementById("player-equalizer");
  dom.playPauseBtn = document.getElementById("play-pause-btn");
  dom.playIcon = document.getElementById("play-icon");
  dom.pauseIcon = document.getElementById("pause-icon");
  dom.prevBtn = document.getElementById("prev-track-btn");
  dom.nextBtn = document.getElementById("next-track-btn");
  dom.skipBackBtn = document.getElementById("skip-back-btn");
  dom.skipFwdBtn = document.getElementById("skip-fwd-btn");
  dom.progressBar = document.getElementById("audio-progress");
  dom.currentTimeDisplay = document.getElementById("current-time-display");
  dom.durationDisplay = document.getElementById("duration-display");
  dom.volumeBar = document.getElementById("volume-slider");
  dom.muteBtn = document.getElementById("mute-btn");
  dom.volumeIconHigh = document.getElementById("vol-icon-high");
  dom.volumeIconMuted = document.getElementById("vol-icon-muted");
  dom.speedBtn = document.getElementById("speed-btn");
  dom.repeatBtn = document.getElementById("repeat-btn");
  dom.shuffleBtn = document.getElementById("shuffle-btn");
  dom.showTranscriptBtn = document.getElementById("show-transcript-btn");
  dom.ttsModeIndicator = document.getElementById("tts-mode-indicator");

  // Mobile Bottom Player Elements
  dom.playerTrackTitleMobile = document.getElementById("player-track-title-mobile");
  dom.playerTrackMetaMobile = document.getElementById("player-track-meta-mobile");
  dom.playerLevelBadgeMobile = document.getElementById("player-level-badge-mobile");
  dom.playerEqualizerMobile = document.getElementById("player-equalizer-mobile");
  dom.playIconMobile = document.getElementById("play-icon-mobile");
  dom.pauseIconMobile = document.getElementById("pause-icon-mobile");
  dom.mobileTimeDisplay = document.getElementById("mobile-time-display");
  dom.speedBtnMobile = document.getElementById("speed-btn-mobile");
  dom.shuffleBtnMobile = document.getElementById("shuffle-btn-mobile");
  dom.repeatBtnMobile = document.getElementById("repeat-btn-mobile");

  // Modals & PDF
  dom.transcriptModal = document.getElementById("transcript-modal");
  dom.pdfModal = document.getElementById("pdf-modal");
  dom.pdfIframe = document.getElementById("pdf-iframe");
  dom.pdfExternalLink = document.getElementById("pdf-external-link");
  dom.pdfModalTitle = document.getElementById("pdf-modal-title");
  dom.pdfModalSub = document.getElementById("pdf-modal-sub");
  dom.pdfFileInput = document.getElementById("pdf-file-input");
  dom.navPdfBtn = document.getElementById("nav-pdf-btn");
  dom.navPdfLabel = document.getElementById("nav-pdf-label");
  dom.toast = document.getElementById("app-toast");
  dom.toastMessage = document.getElementById("toast-message");
}

/**
 * Language Switcher
 */
function initLanguage() {
  updateLanguageButton();
  updateStaticUiTranslations();
}

function toggleLanguage() {
  state.currentLanguage = state.currentLanguage === "de" ? "en" : "de";
  localStorage.setItem("deutsch_portal_lang", state.currentLanguage);
  
  updateLanguageButton();
  updateStaticUiTranslations();
  renderLevelTabs();
  renderContent();

  if (state.currentTrackObj) {
    updatePlayerMetaText();
  }

  showToast(state.currentLanguage === "en" ? "Language switched to English" : "Sprache auf Deutsch umgestellt", 1500);
}

function updateLanguageButton() {
  if (dom.langFlag && dom.langCode) {
    if (state.currentLanguage === "en") {
      dom.langFlag.textContent = "🇩🇪";
      dom.langCode.textContent = "DE";
    } else {
      dom.langFlag.textContent = "🇬🇧";
      dom.langCode.textContent = "EN";
    }
  }
}

function updateStaticUiTranslations() {
  const isEn = state.currentLanguage === "en";

  const appSub = document.getElementById("app-subtitle-text");
  if (appSub) {
    appSub.innerHTML = `by <a href="https://www.linkedin.com/in/sahli-reda-b93807268/" target="_blank" rel="noopener noreferrer" class="font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline transition-colors">Sahli Reda</a> · Spektrum A1+ (${isEn ? '12 Chapters' : '12 Kapitel'})`;
  }

  const levelHeader = document.getElementById("level-section-header");
  if (levelHeader) levelHeader.textContent = t("selectLevel");

  const cefrText = document.getElementById("cefr-badge-text");
  if (cefrText) cefrText.textContent = t("cefr");

  if (dom.searchInput) {
    dom.searchInput.placeholder = t("searchPlaceholder");
  }

  // Update filter buttons
  document.querySelectorAll("[data-i18n-filter]").forEach(btn => {
    const key = btn.getAttribute("data-i18n-filter");
    if (key && I18N[state.currentLanguage][key]) {
      btn.textContent = I18N[state.currentLanguage][key];
    }
  });

  const transcriptBtnText = document.getElementById("transcript-btn-label");
  if (transcriptBtnText) transcriptBtnText.textContent = t("transcript");

  if (dom.navPdfLabel) {
    dom.navPdfLabel.textContent = isEn ? "Coursebook PDF" : "Lehrbuch PDF";
  }
}

/**
 * Dark / Light theme detection & toggle
 */
function initTheme() {
  const savedTheme = localStorage.getItem("deutsch_portal_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  updateThemeIcons();
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("deutsch_portal_theme", isDark ? "dark" : "light");
  updateThemeIcons();
}

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains("dark");
  if (dom.themeIconLight && dom.themeIconDark) {
    if (isDark) {
      dom.themeIconLight.classList.remove("hidden");
      dom.themeIconDark.classList.add("hidden");
    } else {
      dom.themeIconLight.classList.add("hidden");
      dom.themeIconDark.classList.remove("hidden");
    }
  }
}

/**
 * Native Audio Element & Event Setup
 */
function initAudioElement() {
  if (!dom.audio) return;

  dom.audio.volume = state.volume;

  dom.audio.addEventListener("loadedmetadata", () => {
    state.duration = dom.audio.duration || state.currentTrackObj?.track.seconds || 0;
    updateDurationUI();
    stopSimulation();
    state.isSimulatedAudio = false;
    dom.ttsModeIndicator?.classList.add("hidden");
  });

  dom.audio.addEventListener("timeupdate", () => {
    if (!state.isSimulatedAudio) {
      state.currentTime = dom.audio.currentTime;
      updateProgressUI();
    }
  });

  dom.audio.addEventListener("ended", () => {
    handleTrackEnded();
  });

  dom.audio.addEventListener("error", () => {
    handleAudioLoadError();
  });

  dom.audio.addEventListener("play", () => {
    state.isPlaying = true;
    updatePlayPauseStateUI(true);
  });

  dom.audio.addEventListener("pause", () => {
    state.isPlaying = false;
    updatePlayPauseStateUI(false);
  });
}

/**
 * Graceful handling when a local .mp3 file is not found
 */
function handleAudioLoadError() {
  state.isSimulatedAudio = true;
  dom.ttsModeIndicator?.classList.remove("hidden");
  
  const msg = state.currentLanguage === "en"
    ? `Notice: '${state.currentTrackObj?.track.audioSrc}' not found. German speech output (TTS) active!`
    : `Hinweis: MP3 '${state.currentTrackObj?.track.audioSrc}' nicht gefunden. Sprachausgabe (TTS) aktiv!`;

  showToast(msg, 3500);

  if (state.isPlaying) {
    startFallbackPlayback();
  }
}

/**
 * Starts SpeechSynthesis German preview for interactive test
 */
function startFallbackPlayback() {
  stopSimulation();
  state.isPlaying = true;
  updatePlayPauseStateUI(true);

  const track = state.currentTrackObj?.track;
  const transcript = track?.transcript || `${track?.title}. Lektion Deutsch als Fremdsprache.`;

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(transcript);
    utterance.lang = "de-DE";
    utterance.rate = state.playbackRate;
    
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang.startsWith("de") || v.lang.includes("DE"));
    if (deVoice) utterance.voice = deVoice;

    utterance.onend = () => {
      handleTrackEnded();
    };

    state.activeSpeechUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  const totalSeconds = track?.seconds || 60;
  state.duration = totalSeconds;
  updateDurationUI();

  const stepMs = 250;
  state.simulationInterval = setInterval(() => {
    state.currentTime += (stepMs / 1000) * state.playbackRate;
    if (state.currentTime >= state.duration) {
      clearInterval(state.simulationInterval);
      state.currentTime = state.duration;
      updateProgressUI();
      handleTrackEnded();
    } else {
      updateProgressUI();
    }
  }, stepMs);
}

function stopSimulation() {
  if (state.simulationInterval) {
    clearInterval(state.simulationInterval);
    state.simulationInterval = null;
  }
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function handleTrackEnded() {
  if (state.repeatMode === "one") {
    seekTo(0);
    play();
  } else {
    playNextTrack(true);
  }
}

/**
 * Main Track Loader
 */
function loadTrack(trackObj, autoPlay = true) {
  if (!trackObj) return;

  state.currentTrackObj = trackObj;
  state.currentTime = 0;
  state.duration = trackObj.track.seconds || 60;
  state.isSimulatedAudio = false;
  stopSimulation();

  updatePlayerMetaText();
  updateDurationUI();
  updateProgressUI();
  updateActiveTrackHighlight();

  try {
    dom.audio.src = trackObj.track.audioSrc;
    dom.audio.playbackRate = state.playbackRate;
    dom.audio.load();
    dom.ttsModeIndicator?.classList.add("hidden");

    if (autoPlay) {
      const playPromise = dom.audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          handleAudioLoadError();
        });
      }
    } else {
      state.isPlaying = false;
      updatePlayPauseStateUI(false);
    }
  } catch (err) {
    handleAudioLoadError();
  }
}

function updatePlayerMetaText() {
  if (!state.currentTrackObj) return;
  const isEn = state.currentLanguage === "en";
  const { track, chapter, level } = state.currentTrackObj;

  const titleText = isEn ? (track.titleEn || track.title) : track.title;
  const chapterTitleShort = isEn ? (chapter.titleEn || chapter.title).split(":")[0] : chapter.title.split(":")[0];
  const contextText = isEn ? (track.contextEn || track.context) : track.context;
  const metaText = `${chapterTitleShort} · ${contextText}`;

  // Desktop
  if (dom.playerTrackTitle) dom.playerTrackTitle.textContent = titleText;
  if (dom.playerTrackMeta) dom.playerTrackMeta.textContent = metaText;
  if (dom.playerLevelBadge) {
    dom.playerLevelBadge.textContent = level.code;
    dom.playerLevelBadge.className = `px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold ${level.colorClass} text-white shadow-sm`;
  }

  // Mobile
  if (dom.playerTrackTitleMobile) dom.playerTrackTitleMobile.textContent = titleText;
  if (dom.playerTrackMetaMobile) dom.playerTrackMetaMobile.textContent = metaText;
  if (dom.playerLevelBadgeMobile) {
    dom.playerLevelBadgeMobile.textContent = level.code;
    dom.playerLevelBadgeMobile.className = `px-1.5 py-0.2 rounded text-[9px] font-bold ${level.colorClass} text-white shadow-sm`;
  }
}

/**
 * Playback Control Functions
 */
function play() {
  if (!state.currentTrackObj) {
    const first = findTrackById("a1-k1-02");
    if (first) loadTrack(first, true);
    return;
  }

  state.isPlaying = true;
  updatePlayPauseStateUI(true);

  if (state.isSimulatedAudio) {
    startFallbackPlayback();
    return;
  }

  const promise = dom.audio.play();
  if (promise !== undefined) {
    promise.catch(() => {
      handleAudioLoadError();
    });
  }
}

function pause() {
  state.isPlaying = false;
  updatePlayPauseStateUI(false);

  if (state.isSimulatedAudio) {
    stopSimulation();
  } else {
    dom.audio.pause();
  }
}

function togglePlayPause() {
  if (state.isPlaying) {
    pause();
  } else {
    play();
  }
}

function seekTo(seconds) {
  state.currentTime = Math.max(0, Math.min(seconds, state.duration));
  
  if (!state.isSimulatedAudio && dom.audio) {
    dom.audio.currentTime = state.currentTime;
  }
  updateProgressUI();
}

function skipTime(delta) {
  seekTo(state.currentTime + delta);
}

function setPlaybackSpeed(rate) {
  state.playbackRate = rate;
  if (dom.audio) {
    dom.audio.playbackRate = rate;
  }
  if (dom.speedBtn) dom.speedBtn.textContent = `${rate}x`;
  if (dom.speedBtnMobile) dom.speedBtnMobile.textContent = `${rate}x`;
  showToast(`${t("toastSpeed")} ${rate}x`, 1500);
}

function cyclePlaybackSpeed() {
  const speeds = [0.75, 1.0, 1.25, 1.5, 2.0];
  const idx = speeds.indexOf(state.playbackRate);
  const nextSpeed = speeds[(idx + 1) % speeds.length];
  setPlaybackSpeed(nextSpeed);
}

function setVolume(val) {
  state.volume = val;
  state.isMuted = val === 0;
  if (dom.audio) {
    dom.audio.volume = val;
    dom.audio.muted = state.isMuted;
  }
  if (dom.volumeBar) dom.volumeBar.value = val;
  updateVolumeIcons();
}

function toggleMute() {
  state.isMuted = !state.isMuted;
  if (dom.audio) {
    dom.audio.muted = state.isMuted;
  }
  if (dom.volumeBar) dom.volumeBar.value = state.isMuted ? 0 : state.volume;
  updateVolumeIcons();
}

function updateVolumeIcons() {
  if (state.isMuted || state.volume === 0) {
    dom.volumeIconHigh?.classList.add("hidden");
    dom.volumeIconMuted?.classList.remove("hidden");
  } else {
    dom.volumeIconHigh?.classList.remove("hidden");
    dom.volumeIconMuted?.classList.add("hidden");
  }
}

function toggleRepeat() {
  const modes = ["off", "all", "one"];
  const next = modes[(modes.indexOf(state.repeatMode) + 1) % modes.length];
  state.repeatMode = next;
  
  const repeatBtns = [dom.repeatBtn, dom.repeatBtnMobile].filter(Boolean);

  if (next === "one") {
    repeatBtns.forEach(btn => {
      btn.classList.add("text-indigo-600", "dark:text-indigo-400", "font-bold");
      btn.innerHTML = `
        <svg class="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span class="text-[8px] absolute -top-1 -right-1 bg-indigo-600 text-white rounded-full w-3.5 h-3.5 flex items-center justify-center font-mono">1</span>
      `;
    });
    showToast(t("toastRepeatOne"), 1500);
  } else if (next === "all") {
    repeatBtns.forEach(btn => {
      btn.classList.add("text-indigo-600", "dark:text-indigo-400", "font-bold");
      btn.innerHTML = `
        <svg class="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      `;
    });
    showToast(t("toastRepeatAll"), 1500);
  } else {
    repeatBtns.forEach(btn => {
      btn.classList.remove("text-indigo-600", "dark:text-indigo-400", "font-bold");
      btn.innerHTML = `
        <svg class="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      `;
    });
    showToast(t("toastRepeatOff"), 1500);
  }
}

function toggleShuffle() {
  state.isShuffle = !state.isShuffle;
  const shuffleBtns = [dom.shuffleBtn, dom.shuffleBtnMobile].filter(Boolean);

  if (state.isShuffle) {
    shuffleBtns.forEach(btn => btn.classList.add("text-indigo-600", "dark:text-indigo-400", "font-bold"));
    showToast(t("toastShuffleOn"), 1500);
  } else {
    shuffleBtns.forEach(btn => btn.classList.remove("text-indigo-600", "dark:text-indigo-400", "font-bold"));
    showToast(t("toastShuffleOff"), 1500);
  }
}

/**
 * Next & Previous Track Navigation
 */
function playNextTrack(fromAutoEnd = false) {
  const allTracks = getAllTracks();
  if (!allTracks.length) return;

  const currentIdx = allTracks.findIndex(t => t.track.id === state.currentTrackObj?.track.id);

  if (state.isShuffle) {
    const randomIdx = Math.floor(Math.random() * allTracks.length);
    loadTrack(allTracks[randomIdx], true);
    return;
  }

  if (currentIdx !== -1 && currentIdx < allTracks.length - 1) {
    loadTrack(allTracks[currentIdx + 1], true);
  } else if (state.repeatMode === "all" || fromAutoEnd) {
    loadTrack(allTracks[0], true);
  } else {
    showToast(t("toastEndReached"), 2000);
  }
}

function playPrevTrack() {
  if (state.currentTime > 3) {
    seekTo(0);
    return;
  }

  const allTracks = getAllTracks();
  if (!allTracks.length) return;

  const currentIdx = allTracks.findIndex(t => t.track.id === state.currentTrackObj?.track.id);
  if (currentIdx > 0) {
    loadTrack(allTracks[currentIdx - 1], true);
  } else {
    seekTo(0);
  }
}

/**
 * UI State Synchronization (Desktop + Mobile)
 */
function updatePlayPauseStateUI(isPlaying) {
  if (isPlaying) {
    dom.playIcon?.classList.add("hidden");
    dom.pauseIcon?.classList.remove("hidden");
    dom.playIconMobile?.classList.add("hidden");
    dom.pauseIconMobile?.classList.remove("hidden");
    dom.playerEqualizer?.classList.remove("equalizer-paused");
    dom.playerEqualizerMobile?.classList.remove("equalizer-paused");
  } else {
    dom.playIcon?.classList.remove("hidden");
    dom.pauseIcon?.classList.add("hidden");
    dom.playIconMobile?.classList.remove("hidden");
    dom.pauseIconMobile?.classList.add("hidden");
    dom.playerEqualizer?.classList.add("equalizer-paused");
    dom.playerEqualizerMobile?.classList.add("equalizer-paused");
  }
  updateActiveTrackHighlight();
}

function updateProgressUI() {
  if (!state.isSeeking && dom.progressBar) {
    const percent = state.duration > 0 ? (state.currentTime / state.duration) * 100 : 0;
    dom.progressBar.value = percent;
  }
  const currTimeStr = formatTime(state.currentTime);
  if (dom.currentTimeDisplay) dom.currentTimeDisplay.textContent = currTimeStr;
  if (dom.mobileTimeDisplay) {
    dom.mobileTimeDisplay.textContent = `${currTimeStr} / ${formatTime(state.duration)}`;
  }
}

function updateDurationUI() {
  const durTimeStr = formatTime(state.duration);
  const currTimeStr = formatTime(state.currentTime);
  if (dom.durationDisplay) dom.durationDisplay.textContent = durTimeStr;
  if (dom.currentTimeDisplay) dom.currentTimeDisplay.textContent = currTimeStr;
  if (dom.mobileTimeDisplay) {
    dom.mobileTimeDisplay.textContent = `${currTimeStr} / ${durTimeStr}`;
  }
}

function updateActiveTrackHighlight() {
  document.querySelectorAll(".track-row").forEach(el => {
    const trackId = el.getAttribute("data-track-id");
    const isThisActive = state.currentTrackObj && state.currentTrackObj.track.id === trackId;
    
    const playBtn = el.querySelector(".track-play-btn");
    const playIcon = el.querySelector(".row-play-icon");
    const pauseIcon = el.querySelector(".row-pause-icon");
    const equalizer = el.querySelector(".row-equalizer");

    if (isThisActive) {
      el.classList.add("bg-indigo-50/80", "dark:bg-indigo-950/40", "border-indigo-300", "dark:border-indigo-700/60", "shadow-sm");
      el.classList.remove("border-transparent");
      
      if (equalizer) equalizer.classList.remove("hidden");
      if (playBtn) playBtn.classList.add("bg-indigo-600", "text-white");

      if (state.isPlaying) {
        if (playIcon) playIcon.classList.add("hidden");
        if (pauseIcon) pauseIcon.classList.remove("hidden");
        if (equalizer) equalizer.classList.remove("equalizer-paused");
      } else {
        if (playIcon) playIcon.classList.remove("hidden");
        if (pauseIcon) pauseIcon.classList.add("hidden");
        if (equalizer) equalizer.classList.add("equalizer-paused");
      }
    } else {
      el.classList.remove("bg-indigo-50/80", "dark:bg-indigo-950/40", "border-indigo-300", "dark:border-indigo-700/60", "shadow-sm");
      el.classList.add("border-transparent");
      
      if (equalizer) equalizer.classList.add("hidden");
      if (playBtn) playBtn.classList.remove("bg-indigo-600", "text-white");
      if (playIcon) playIcon.classList.remove("hidden");
      if (pauseIcon) pauseIcon.classList.add("hidden");
    }
  });
}

function formatTime(secs) {
  if (isNaN(secs) || secs < 0) return "00:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

/**
 * Render Level Selector Tabs (Mobile & Desktop)
 */
function renderLevelTabs() {
  if (!dom.levelTabsContainer) return;

  const isEn = state.currentLanguage === "en";

  dom.levelTabsContainer.innerHTML = DEUTSCH_PORTAL_DATA.levels.map(lvl => {
    const isActive = lvl.id === state.currentLevelId;
    
    let trackCount = 0;
    if (lvl.textbooks && lvl.textbooks.length > 0) {
      lvl.textbooks.forEach(b => b.sections.forEach(s => s.chapters.forEach(c => trackCount += c.tracks.length)));
    }

    const badgeLabel = lvl.isUpcoming 
      ? t("comingSoon") 
      : `${trackCount} ${t("audios")} · 12 ${t("chapter")}`;

    const levelName = isEn ? (lvl.nameEn || lvl.name) : lvl.name;
    const levelSubtitle = levelName.split("·")[1]?.trim() || levelName;

    return `
      <button 
        onclick="switchLevel('${lvl.id}')"
        class="relative flex-1 p-2.5 sm:p-3 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between active:scale-[0.98]
          ${isActive 
            ? 'bg-white dark:bg-slate-800 border-indigo-500/80 shadow-md ring-2 ring-indigo-500/20' 
            : 'bg-slate-50/70 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800/80 text-slate-600 dark:text-slate-400'
          }"
      >
        <div class="flex items-center justify-between mb-1 gap-1">
          <span class="text-lg sm:text-xl font-extrabold tracking-tight ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-800 dark:text-slate-200'}">
            ${lvl.code}
          </span>
          <span class="text-[9px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold truncate max-w-[120px] ${lvl.isUpcoming ? 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400' : lvl.lightColorClass}">
            ${badgeLabel}
          </span>
        </div>
        <p class="text-[11px] sm:text-xs font-semibold truncate ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}">
          ${levelSubtitle}
        </p>
      </button>
    `;
  }).join("");
}

function switchLevel(levelId) {
  state.currentLevelId = levelId;
  state.currentSectionId = "all";
  state.searchQuery = "";
  if (dom.searchInput) dom.searchInput.value = "";
  
  const level = DEUTSCH_PORTAL_DATA.levels.find(l => l.id === levelId);
  if (level && level.textbooks && level.textbooks[0]?.sections[0]?.chapters[0]) {
    state.expandedChapters.clear();
    state.expandedChapters.add(level.textbooks[0].sections[0].chapters[0].id);
  }

  renderLevelTabs();
  renderContent();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Main Content Renderer (Textbook, Sections & Chapters Accordion OR Upcoming Placeholder)
 */
function renderContent() {
  const level = DEUTSCH_PORTAL_DATA.levels.find(l => l.id === state.currentLevelId);
  if (!level) return;

  if (level.isUpcoming || !level.textbooks || level.textbooks.length === 0) {
    renderUpcomingLevelView(level);
    return;
  }

  const currentBook = level.textbooks[0];
  renderTextbookHeader(level, currentBook);
  renderChaptersAccordion(level, currentBook);
  updateActiveTrackHighlight();
}

/**
 * Render Friendly Upcoming Placeholder for A2, B1, B2
 */
function renderUpcomingLevelView(level) {
  if (dom.textbookContainer) {
    dom.textbookContainer.innerHTML = `
      <div class="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-12 text-center shadow-sm mb-12">
        <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${level.colorClass} text-white font-extrabold text-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/10">
          ${level.code}
        </div>
        <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mb-3">
          ${t("comingSoon")}
        </span>
        <h2 class="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
          ${t("comingSoonTitle")} (${level.code})
        </h2>
        <p class="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-xs sm:text-base leading-relaxed mb-6">
          ${t("comingSoonDesc")}
        </p>
        <button 
          onclick="switchLevel('A1')"
          class="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
        >
          ${t("backToA1")}
        </button>
      </div>
    `;
  }
  if (dom.chaptersContainer) {
    dom.chaptersContainer.innerHTML = "";
  }
}

/**
 * Render Textbook Header & Section Tabs (Teil 1, Teil 2)
 */
function renderTextbookHeader(level, book) {
  if (!dom.textbookContainer) return;

  const isEn = state.currentLanguage === "en";
  const bookTitle = isEn ? (book.titleEn || book.title) : book.title;
  const bookSubtitle = isEn ? (book.subtitleEn || book.subtitle) : book.subtitle;
  const levelDesc = isEn ? (level.descriptionEn || level.description) : level.description;
  const bookEdition = isEn ? (book.editionEn || book.edition) : book.edition;
  const badgeText = isEn ? (level.badgeEn || level.badge) : level.badge;

  dom.textbookContainer.innerHTML = `
    <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r ${book.coverBg} p-5 sm:p-8 text-white shadow-xl mb-6 sm:mb-8">
      <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wide uppercase bg-white/20 backdrop-blur-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              ${badgeText}
            </span>
            <span class="text-[11px] sm:text-xs text-white/80 font-medium">${bookEdition}</span>
          </div>
          <h2 class="text-xl sm:text-3xl font-extrabold tracking-tight">${bookTitle}</h2>
          <p class="text-white/85 text-xs sm:text-base mt-1 max-w-xl">${bookSubtitle} — ${levelDesc}</p>
        </div>

        <div class="flex flex-wrap items-center gap-2.5">
          <button 
            onclick="playFirstTrackOfLevel('${level.id}')"
            class="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white text-slate-900 hover:bg-slate-100 shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <svg class="w-4 h-4 fill-current text-indigo-600" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            ${t("playAll")}
          </button>

          <button 
            onclick="openPdfModal()"
            class="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
            title="${t('openPdfDesc')}"
          >
            <svg class="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>${t('openPdf')}</span>
          </button>
        </div>
      </div>

      <!-- Section Filter Pills (Teil 1, Teil 2, Alle) -->
      <div class="relative z-10 mt-5 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-2 overflow-x-auto scrollbar-none w-full sm:w-auto pb-1 sm:pb-0">
          <span class="text-[11px] font-semibold text-white/80 uppercase tracking-wider flex-shrink-0">${t("bookSection")}</span>
          <div class="inline-flex rounded-lg bg-black/20 p-1 backdrop-blur-sm flex-shrink-0">
            <button 
              onclick="filterSection('all')"
              class="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-semibold transition-all ${state.currentSectionId === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-white/90 hover:text-white'}"
            >
              ${t("allParts")}
            </button>
            ${book.sections.map(sec => {
              const secTitle = isEn ? (sec.titleEn || sec.title).split(":")[0] : sec.title.split(":")[0];
              return `
                <button 
                  onclick="filterSection('${sec.id}')"
                  class="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-semibold transition-all ${state.currentSectionId === sec.id ? 'bg-white text-slate-900 shadow-sm' : 'text-white/90 hover:text-white'}"
                >
                  ${secTitle}
                </button>
              `;
            }).join("")}
          </div>
        </div>

        <div class="flex items-center gap-2 text-xs">
          <button 
            onclick="toggleAllAccordions(true)"
            class="text-[11px] sm:text-xs text-white/90 hover:text-white font-medium underline-offset-4 hover:underline"
          >
            ${t("expandAll")}
          </button>
          <span class="text-white/40">•</span>
          <button 
            onclick="toggleAllAccordions(false)"
            class="text-[11px] sm:text-xs text-white/90 hover:text-white font-medium underline-offset-4 hover:underline"
          >
            ${t("collapseAll")}
          </button>
        </div>
      </div>
    </div>
  `;
}

function filterSection(sectionId) {
  state.currentSectionId = sectionId;
  const level = DEUTSCH_PORTAL_DATA.levels.find(l => l.id === state.currentLevelId);
  if (level && level.textbooks) {
    renderTextbookHeader(level, level.textbooks[0]);
    renderChaptersAccordion(level, level.textbooks[0]);
  }
}

function toggleAllAccordions(expand) {
  const level = DEUTSCH_PORTAL_DATA.levels.find(l => l.id === state.currentLevelId);
  if (!level || !level.textbooks) return;

  if (expand) {
    level.textbooks[0].sections.forEach(s => s.chapters.forEach(c => state.expandedChapters.add(c.id)));
  } else {
    state.expandedChapters.clear();
  }
  renderChaptersAccordion(level, level.textbooks[0]);
}

/**
 * Render Chapters & Audio Tracks
 */
function renderChaptersAccordion(level, book) {
  if (!dom.chaptersContainer) return;

  const isEn = state.currentLanguage === "en";

  const sectionsToRender = state.currentSectionId === "all"
    ? book.sections
    : book.sections.filter(s => s.id === state.currentSectionId);

  const query = state.searchQuery.toLowerCase().trim();
  const filterTag = state.activeFilterType;

  let totalVisibleTracks = 0;

  const html = sectionsToRender.map(section => {
    const sectionTitle = isEn ? (section.titleEn || section.title) : section.title;
    const sectionSubtitle = isEn ? (section.subtitleEn || section.subtitle) : section.subtitle;

    const chaptersHtml = section.chapters.map(chapter => {
      const filteredTracks = chapter.tracks.filter(t => {
        const matchesQuery = !query || 
          t.title.toLowerCase().includes(query) ||
          (t.titleEn && t.titleEn.toLowerCase().includes(query)) ||
          t.trackNum.toLowerCase().includes(query) ||
          t.context.toLowerCase().includes(query) ||
          (t.transcript && t.transcript.toLowerCase().includes(query)) ||
          (t.transcriptEn && t.transcriptEn.toLowerCase().includes(query));

        const matchesTag = filterTag === "all" || t.type.toLowerCase() === filterTag.toLowerCase();

        return matchesQuery && matchesTag;
      });

      totalVisibleTracks += filteredTracks.length;

      if (query && filteredTracks.length === 0) {
        return "";
      }

      const isExpanded = query ? true : state.expandedChapters.has(chapter.id);
      
      const totalSecs = chapter.tracks.reduce((acc, t) => acc + (t.seconds || 0), 0);
      const totalTimeFormatted = formatTime(totalSecs);

      const chapterTitle = isEn ? (chapter.titleEn || chapter.title) : chapter.title;
      const chapterTheme = isEn ? (chapter.themeEn || chapter.theme) : chapter.theme;

      return `
        <div class="mb-3 sm:mb-4 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xs overflow-hidden transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-600">
          <!-- Accordion Header -->
          <div 
            onclick="toggleAccordion('${chapter.id}')"
            class="flex items-center justify-between p-3.5 sm:p-5 cursor-pointer select-none bg-slate-50/50 dark:bg-slate-800 hover:bg-slate-100/70 dark:hover:bg-slate-700/50 transition-colors"
          >
            <div class="flex items-center gap-2.5 sm:gap-3.5 pr-1 min-w-0">
              <div class="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-extrabold flex items-center justify-center text-xs sm:text-sm border border-indigo-100 dark:border-indigo-800/50">
                K${chapter.number}
              </div>
              <div class="min-w-0">
                <h3 class="text-sm sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                  ${chapterTitle}
                </h3>
                <p class="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                  ${chapterTheme}
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <span class="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                ${filteredTracks.length} ${t("audios")} · ${totalTimeFormatted}
              </span>

              <button 
                onclick="event.stopPropagation(); playChapterTracks('${chapter.id}')"
                class="p-1.5 sm:p-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-colors active:scale-95"
                title="${t("playChapter")}"
              >
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>

              <svg 
                class="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <!-- Accordion Content / Tracks Table -->
          <div class="accordion-content ${isExpanded ? 'expanded' : ''}">
            <div class="accordion-inner border-t border-slate-100 dark:border-slate-700/60 divide-y divide-slate-100 dark:divide-slate-700/40">
              ${filteredTracks.length === 0 
                ? `<div class="p-5 text-center text-xs text-slate-400">Keine Tracks gefunden.</div>`
                : filteredTracks.map(track => renderTrackRow(track, chapter, section, book, level)).join("")
              }
            </div>
          </div>
        </div>
      `;
    }).join("");

    return `
      <div class="mb-5 sm:mb-6">
        <div class="flex items-center gap-2 mb-2.5 px-0.5">
          <span class="h-2 w-2 rounded-full bg-indigo-500"></span>
          <h3 class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">${sectionTitle}</h3>
          <span class="text-[11px] sm:text-xs text-slate-400 font-medium truncate">— ${sectionSubtitle}</span>
        </div>
        ${chaptersHtml}
      </div>
    `;
  }).join("");

  dom.chaptersContainer.innerHTML = html;

  if (query) {
    dom.searchStatus.innerHTML = `
      <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 rounded-xl text-xs text-indigo-800 dark:text-indigo-300 flex items-center justify-between">
        <span>${t("searchResultsFor", { count: totalVisibleTracks, query: escapeHtml(state.searchQuery) })}</span>
        <button onclick="clearSearch()" class="font-bold underline hover:opacity-80">${t("clearSearch")}</button>
      </div>
    `;
  } else {
    dom.searchStatus.innerHTML = "";
  }
}

/**
 * Individual Audio Track Row (Optimized Touch Target)
 */
function renderTrackRow(track, chapter, section, book, level) {
  const isEn = state.currentLanguage === "en";

  const typeColors = {
    Dialog: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
    Phonetik: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800",
    Hörtext: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
    Übung: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
    Wortschatz: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800"
  };
  const typeBadgeClass = typeColors[track.type] || "bg-slate-100 text-slate-700 border-slate-200";

  const trackTitle = isEn ? (track.titleEn || track.title) : track.title;
  const trackSub = isEn ? (track.title !== track.titleEn ? track.title : "") : (track.titleEn || "");
  const trackContext = isEn ? (track.contextEn || track.context) : track.context;

  return `
    <div 
      class="track-row group flex items-center justify-between p-3 sm:p-4 hover:bg-slate-50 dark:hover:bg-slate-700/30 active:bg-slate-100 dark:active:bg-slate-700/50 transition-all border-l-4 border-transparent cursor-pointer select-none"
      data-track-id="${track.id}"
      onclick="handleTrackRowClick('${track.id}')"
    >
      <div class="flex items-center gap-2.5 sm:gap-4 min-w-0 pr-2">
        <!-- Touch Play / Pause Icon Button -->
        <button 
          class="track-play-btn w-10 h-10 sm:w-11 sm:h-11 rounded-full flex-shrink-0 flex items-center justify-center bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-xs active:scale-90"
          onclick="event.stopPropagation(); handleTrackPlayButtonClick('${track.id}')"
          title="Play Track"
        >
          <svg class="row-play-icon w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <svg class="row-pause-icon w-4 h-4 fill-current hidden" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        </button>

        <span class="font-mono text-xs sm:text-sm font-bold text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors w-7 sm:w-9">
          ${track.trackNum}
        </span>

        <div class="min-w-0">
          <div class="flex items-center gap-1.5">
            <h4 class="text-xs sm:text-base font-semibold text-slate-900 dark:text-white truncate">
              ${trackTitle}
            </h4>
            <div class="row-equalizer hidden items-center gap-0.5 text-indigo-600 dark:text-indigo-400">
              <span class="equalizer-bar"></span>
              <span class="equalizer-bar"></span>
              <span class="equalizer-bar"></span>
            </div>
          </div>
          <p class="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
            ${trackContext} ${trackSub ? `<span class="opacity-75 italic">(${trackSub})</span>` : ''}
          </p>
        </div>
      </div>

      <div class="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
        <span class="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold border ${typeBadgeClass}">
          ${track.type}
        </span>

        <span class="font-mono text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">
          ${track.duration}
        </span>

        <!-- Touch-Friendly Transcript Button -->
        <button 
          onclick="event.stopPropagation(); openTranscriptModal('${track.id}')"
          class="p-2 rounded-lg text-slate-400 hover:text-indigo-600 active:bg-slate-200 dark:active:bg-slate-700 transition-colors active:scale-90"
          title="${t("transcript")}"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </button>

        <button 
          onclick="event.stopPropagation(); copyTrackPath('${track.audioSrc}')"
          class="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors hidden sm:block"
          title="Copy MP3 path"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
        </button>
      </div>
    </div>
  `;
}

function handleTrackRowClick(trackId) {
  if (state.currentTrackObj && state.currentTrackObj.track.id === trackId) {
    togglePlayPause();
  } else {
    const trackObj = findTrackById(trackId);
    if (trackObj) {
      loadTrack(trackObj, false); // Standby mode: does NOT autoplay!
      updateActiveTrackHighlight();
      showToast(state.currentLanguage === "en" ? `Selected: ${trackObj.track.titleEn || trackObj.track.title}` : `Ausgewählt: ${trackObj.track.title}`, 1200);
    }
  }
}

function handleTrackPlayButtonClick(trackId) {
  if (state.currentTrackObj && state.currentTrackObj.track.id === trackId) {
    togglePlayPause();
  } else {
    const trackObj = findTrackById(trackId);
    if (trackObj) {
      loadTrack(trackObj, true); // User explicitly clicked Play button
    }
  }
}

function toggleAccordion(chapterId) {
  if (state.expandedChapters.has(chapterId)) {
    state.expandedChapters.delete(chapterId);
  } else {
    state.expandedChapters.add(chapterId);
  }
  const level = DEUTSCH_PORTAL_DATA.levels.find(l => l.id === state.currentLevelId);
  if (level && level.textbooks) {
    renderChaptersAccordion(level, level.textbooks[0]);
  }
}

function playChapterTracks(chapterId) {
  const level = DEUTSCH_PORTAL_DATA.levels.find(l => l.id === state.currentLevelId);
  if (!level || !level.textbooks) return;

  for (const section of level.textbooks[0].sections) {
    const chapter = section.chapters.find(c => c.id === chapterId);
    if (chapter && chapter.tracks.length > 0) {
      const trackObj = findTrackById(chapter.tracks[0].id);
      if (trackObj) {
        state.expandedChapters.add(chapterId);
        renderChaptersAccordion(level, level.textbooks[0]);
        loadTrack(trackObj, true);
      }
      break;
    }
  }
}

function playFirstTrackOfLevel(levelId) {
  const level = DEUTSCH_PORTAL_DATA.levels.find(l => l.id === levelId);
  if (level && level.textbooks && level.textbooks[0]?.sections[0]?.chapters[0]?.tracks[0]) {
    const trackObj = findTrackById(level.textbooks[0].sections[0].chapters[0].tracks[0].id);
    if (trackObj) {
      loadTrack(trackObj, true);
    }
  }
}

/**
 * Filter & Search Handlers
 */
function handleSearchInput(val) {
  state.searchQuery = val;
  if (val.trim()) {
    dom.clearSearchBtn?.classList.remove("hidden");
  } else {
    dom.clearSearchBtn?.classList.add("hidden");
  }
  const level = DEUTSCH_PORTAL_DATA.levels.find(l => l.id === state.currentLevelId);
  if (level && level.textbooks) {
    renderChaptersAccordion(level, level.textbooks[0]);
  }
}

function clearSearch() {
  state.searchQuery = "";
  if (dom.searchInput) dom.searchInput.value = "";
  dom.clearSearchBtn?.classList.add("hidden");
  const level = DEUTSCH_PORTAL_DATA.levels.find(l => l.id === state.currentLevelId);
  if (level && level.textbooks) {
    renderChaptersAccordion(level, level.textbooks[0]);
  }
}

function setFilterType(type) {
  state.activeFilterType = type;
  document.querySelectorAll(".filter-chip").forEach(chip => {
    if (chip.getAttribute("data-type") === type) {
      chip.classList.add("bg-indigo-600", "text-white");
      chip.classList.remove("bg-slate-100", "dark:bg-slate-800", "text-slate-600", "dark:text-slate-300");
    } else {
      chip.classList.remove("bg-indigo-600", "text-white");
      chip.classList.add("bg-slate-100", "dark:bg-slate-800", "text-slate-600", "dark:text-slate-300");
    }
  });

  const level = DEUTSCH_PORTAL_DATA.levels.find(l => l.id === state.currentLevelId);
  if (level && level.textbooks) {
    renderChaptersAccordion(level, level.textbooks[0]);
  }
}

/**
 * Bilingual Transcript Modal
 */
function openTranscriptModal(trackId) {
  const trackObj = findTrackById(trackId);
  if (!trackObj) return;

  state.activeTranscriptTrack = trackObj;
  renderTranscriptModalContent();
  dom.transcriptModal.classList.remove("hidden");
}

function setTranscriptTab(mode) {
  state.transcriptViewMode = mode;
  renderTranscriptModalContent();
}

function renderTranscriptModalContent() {
  const trackObj = state.activeTranscriptTrack;
  if (!trackObj) return;

  const isEn = state.currentLanguage === "en";
  const { track, chapter, level } = trackObj;

  const modalTitle = document.getElementById("transcript-modal-title");
  const modalMeta = document.getElementById("transcript-modal-meta");
  const modalBody = document.getElementById("transcript-modal-body");

  const titleText = isEn ? (track.titleEn || track.title) : track.title;
  const chapterText = isEn ? (chapter.titleEn || chapter.title) : chapter.title;
  const contextText = isEn ? (track.contextEn || track.context) : track.context;

  modalTitle.textContent = titleText;
  modalMeta.textContent = `${level.code} · ${chapterText} · ${contextText}`;

  const deLines = (track.transcript || "").split("\n");
  const enLines = (track.transcriptEn || "").split("\n");

  let contentHtml = "";

  if (state.transcriptViewMode === "bilingual") {
    contentHtml = `
      <div class="space-y-3 sm:space-y-4">
        ${deLines.map((line, idx) => {
          const enLine = enLines[idx] || "";
          return `
            <div class="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <p class="font-medium text-slate-900 dark:text-white text-xs sm:text-base leading-relaxed mb-1">
                🇩🇪 ${escapeHtml(line)}
              </p>
              ${enLine ? `
                <p class="text-[11px] sm:text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed font-sans">
                  🇬🇧 ${escapeHtml(enLine)}
                </p>
              ` : ''}
            </div>
          `;
        }).join("")}
      </div>
    `;
  } else if (state.transcriptViewMode === "de") {
    contentHtml = `
      <div class="space-y-2.5">
        ${deLines.map(line => `
          <p class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-100 text-xs sm:text-base leading-relaxed">
            ${escapeHtml(line)}
          </p>
        `).join("")}
      </div>
    `;
  } else {
    contentHtml = `
      <div class="space-y-2.5">
        ${enLines.map(line => `
          <p class="p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-200 text-xs sm:text-base leading-relaxed">
            ${escapeHtml(line)}
          </p>
        `).join("")}
      </div>
    `;
  }

  modalBody.innerHTML = contentHtml;

  const tabs = ["bilingual", "de", "en"];
  tabs.forEach(tMode => {
    const tabEl = document.getElementById(`tab-transcript-${tMode}`);
    if (tabEl) {
      if (tMode === state.transcriptViewMode) {
        tabEl.className = "px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-bold bg-indigo-600 text-white shadow-xs transition-all";
      } else {
        tabEl.className = "px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all";
      }
    }
  });

  const tipText = document.getElementById("transcript-tip-text");
  if (tipText) tipText.textContent = t("tip");

  const closeBtnText = document.getElementById("transcript-close-btn");
  if (closeBtnText) closeBtnText.textContent = t("close");
}

function closeTranscriptModal() {
  dom.transcriptModal.classList.add("hidden");
  document.body.style.overflow = "";
}

/**
 * Coursebook PDF Reader Modal Controller
 */
function openPdfModal(customUrl, title) {
  const isEn = state.currentLanguage === "en";
  const level = DEUTSCH_PORTAL_DATA.levels.find(l => l.id === state.currentLevelId) || DEUTSCH_PORTAL_DATA.levels[0];
  const book = level.textbooks && level.textbooks[0];

  const defaultPdf = book?.pdfUrl || "books/A1/Spektrum%20Deutsch%20A1%20Kurs-%20und%20Arbeitsbuch.pdf";
  const targetUrl = customUrl || defaultPdf;
  const bookName = title || (isEn ? (book?.pdfTitleEn || "Spektrum Deutsch A1+ Coursebook (PDF)") : (book?.pdfTitle || "Spektrum Deutsch A1+ Lehrbuch (PDF)"));

  if (dom.pdfIframe) {
    dom.pdfIframe.src = targetUrl;
  }
  if (dom.pdfExternalLink) {
    dom.pdfExternalLink.href = targetUrl;
  }
  if (dom.pdfModalTitle) {
    dom.pdfModalTitle.textContent = bookName;
  }
  if (dom.pdfModalSub) {
    dom.pdfModalSub.textContent = isEn 
      ? "Integrated Course- and Exercise Book DaF · Spektrum Deutsch A1+" 
      : "Integriertes Kurs- und Arbeitsbuch DaF · Spektrum Deutsch A1+";
  }

  if (dom.pdfModal) {
    dom.pdfModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closePdfModal() {
  if (dom.pdfModal) {
    dom.pdfModal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function copyTrackPath(path) {
  navigator.clipboard.writeText(path).then(() => {
    showToast(`${t("copySuccess")} ${path}`, 2500);
  }).catch(() => {
    showToast(`Path: ${path}`, 2500);
  });
}

function showToast(message, duration = 3000) {
  if (state.toastTimeout) clearTimeout(state.toastTimeout);
  
  dom.toastMessage.textContent = message;
  dom.toast.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
  dom.toast.classList.add("opacity-100", "translate-y-0");

  state.toastTimeout = setTimeout(() => {
    dom.toast.classList.remove("opacity-100", "translate-y-0");
    dom.toast.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
  }, duration);
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Global Keyboard Shortcuts
 */
function setupKeyboardShortcuts() {
  window.addEventListener("keydown", (e) => {
    if (document.activeElement === dom.searchInput) {
      if (e.key === "Escape") {
        clearSearch();
        dom.searchInput.blur();
      }
      return;
    }

    if (e.code === "Space") {
      e.preventDefault();
      togglePlayPause();
    } else if (e.code === "ArrowLeft") {
      e.preventDefault();
      skipTime(-10);
      showToast(t("toastSkipBack"), 1000);
    } else if (e.code === "ArrowRight") {
      e.preventDefault();
      skipTime(10);
      showToast(t("toastSkipFwd"), 1000);
    } else if (e.code === "ArrowUp") {
      e.preventDefault();
      setVolume(Math.min(1, state.volume + 0.1));
    } else if (e.code === "ArrowDown") {
      e.preventDefault();
      setVolume(Math.max(0, state.volume - 0.1));
    } else if (e.key.toLowerCase() === "m") {
      toggleMute();
    } else if (e.key === "/" || (e.ctrlKey && e.key.toLowerCase() === "k")) {
      e.preventDefault();
      dom.searchInput?.focus();
    } else if (e.key === "Escape") {
      closeTranscriptModal();
      closePdfModal();
    }
  });
}

/**
 * Event Listeners Registration
 */
function setupEventListeners() {
  dom.themeToggleBtn?.addEventListener("click", toggleTheme);
  dom.langToggleBtn?.addEventListener("click", toggleLanguage);

  dom.playPauseBtn?.addEventListener("click", togglePlayPause);
  dom.prevBtn?.addEventListener("click", playPrevTrack);
  dom.nextBtn?.addEventListener("click", () => playNextTrack(false));
  dom.skipBackBtn?.addEventListener("click", () => skipTime(-10));
  dom.skipFwdBtn?.addEventListener("click", () => skipTime(10));

  dom.progressBar?.addEventListener("mousedown", () => { state.isSeeking = true; });
  dom.progressBar?.addEventListener("touchstart", () => { state.isSeeking = true; }, { passive: true });
  window.addEventListener("mouseup", () => { state.isSeeking = false; });
  window.addEventListener("touchend", () => { state.isSeeking = false; });

  dom.progressBar?.addEventListener("input", (e) => {
    const percent = parseFloat(e.target.value);
    const targetSeconds = (percent / 100) * state.duration;
    dom.currentTimeDisplay.textContent = formatTime(targetSeconds);
    if (dom.mobileTimeDisplay) {
      dom.mobileTimeDisplay.textContent = `${formatTime(targetSeconds)} / ${formatTime(state.duration)}`;
    }
  });

  dom.progressBar?.addEventListener("change", (e) => {
    const percent = parseFloat(e.target.value);
    const targetSeconds = (percent / 100) * state.duration;
    seekTo(targetSeconds);
    state.isSeeking = false;
  });

  dom.volumeBar?.addEventListener("input", (e) => {
    setVolume(parseFloat(e.target.value));
  });

  dom.muteBtn?.addEventListener("click", toggleMute);
  dom.speedBtn?.addEventListener("click", cyclePlaybackSpeed);
  dom.repeatBtn?.addEventListener("click", toggleRepeat);
  dom.shuffleBtn?.addEventListener("click", toggleShuffle);

  dom.searchInput?.addEventListener("input", (e) => {
    handleSearchInput(e.target.value);
  });

  dom.clearSearchBtn?.addEventListener("click", clearSearch);

  dom.showTranscriptBtn?.addEventListener("click", () => {
    if (state.currentTrackObj) {
      openTranscriptModal(state.currentTrackObj.track.id);
    }
  });

  // PDF Event Listeners
  dom.navPdfBtn?.addEventListener("click", () => openPdfModal());

  dom.pdfFileInput?.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      openPdfModal(fileUrl, file.name);
      showToast(state.currentLanguage === "en" ? `Loaded: ${file.name}` : `Geladen: ${file.name}`, 2000);
    }
  });

  dom.pdfModal?.addEventListener("click", (e) => {
    if (e.target === dom.pdfModal) {
      closePdfModal();
    }
  });
}

// Global Window Exports
window.openPdfModal = openPdfModal;
window.closePdfModal = closePdfModal;
window.handleTrackRowClick = handleTrackRowClick;
window.handleTrackPlayButtonClick = handleTrackPlayButtonClick;
window.openTranscriptModal = openTranscriptModal;
window.closeTranscriptModal = closeTranscriptModal;
window.setTranscriptTab = setTranscriptTab;
window.switchLevel = switchLevel;
window.filterSection = filterSection;
window.filterTrackType = filterTrackType;
window.toggleAccordion = toggleAccordion;
window.toggleAllAccordions = toggleAllAccordions;
window.playChapterTracks = playChapterTracks;
window.playFirstTrackOfLevel = playFirstTrackOfLevel;
window.clearSearch = clearSearch;
window.copyTrackPath = copyTrackPath;
window.togglePlayPause = togglePlayPause;
window.playPrevTrack = playPrevTrack;
window.playNextTrack = playNextTrack;
window.skipTime = skipTime;
window.cyclePlaybackSpeed = cyclePlaybackSpeed;
window.toggleRepeat = toggleRepeat;
window.toggleShuffle = toggleShuffle;
