// Natural Voice Guidance Controller using Web Speech Synthesis API
// Clean, calm, educational tone with live synchronized captions and playback controls.

export interface VoiceSettings {
  enabled: boolean;
  rate: number;   // 0.8 to 1.2 (default 0.95 for calm educational pace)
  pitch: number;  // 0.9 to 1.1 (default 1.0)
  volume: number; // 0 to 1.0 (default 1.0)
  voiceName?: string;
}

class VoiceGuidanceController {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private availableVoices: SpeechSynthesisVoice[] = [];
  private isSpeaking: boolean = false;
  private isPaused: boolean = false;
  private settings: VoiceSettings = {
    enabled: true,
    rate: 0.95,
    pitch: 1.0,
    volume: 1.0,
  };

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices(): void {
    if (!this.synth) return;
    this.availableVoices = this.synth.getVoices();
  }

  public getPreferredVoice(): SpeechSynthesisVoice | null {
    if (!this.availableVoices.length) return null;

    // Prefer high-quality, calm natural English voices
    const preferredNames = [
      'Google UK English Female',
      'Microsoft Sonia Online',
      'Microsoft Libby Online',
      'Google US English',
      'Samantha',
      'en-GB',
      'en-US',
    ];

    for (const name of preferredNames) {
      const found = this.availableVoices.find(
        (v) => v.name.includes(name) || v.lang.startsWith(name)
      );
      if (found) return found;
    }

    // Fallback to any English voice
    return this.availableVoices.find((v) => v.lang.startsWith('en')) || this.availableVoices[0];
  }

  public speak(
    text: string,
    onBoundary?: (charIndex: number, textLength: number) => void,
    onEnd?: () => void
  ): void {
    if (!this.synth || !this.settings.enabled) {
      if (onEnd) onEnd();
      return;
    }

    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = this.getPreferredVoice();
    if (voice) utterance.voice = voice;

    utterance.rate = this.settings.rate;
    utterance.pitch = this.settings.pitch;
    utterance.volume = this.settings.volume;

    utterance.onboundary = (event) => {
      if (onBoundary) {
        onBoundary(event.charIndex, text.length);
      }
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    this.currentUtterance = utterance;
    this.isSpeaking = true;
    this.isPaused = false;
    this.synth.speak(utterance);
  }

  public pause(): void {
    if (this.synth && this.isSpeaking && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
    }
  }

  public resume(): void {
    if (this.synth && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
    }
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentUtterance = null;
    }
  }

  public setEnabled(enabled: boolean): void {
    this.settings.enabled = enabled;
    if (!enabled) this.stop();
  }

  public setRate(rate: number): void {
    this.settings.rate = Math.max(0.7, Math.min(1.5, rate));
  }

  public setVolume(volume: number): void {
    this.settings.volume = Math.max(0, Math.min(1.0, volume));
  }

  public getSettings(): VoiceSettings {
    return { ...this.settings };
  }

  public getIsSpeaking(): boolean {
    return this.isSpeaking;
  }

  public getIsPaused(): boolean {
    return this.isPaused;
  }
}

export const voiceGuidance = new VoiceGuidanceController();
