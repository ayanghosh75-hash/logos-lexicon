// Soft Church-Inspired Ambient Synthesizer using Web Audio API
// 100% Royalty-Free, 0KB Network Overhead, 100% Offline Compatible
// Provides peaceful piano/organ ambient chord acoustics with smooth fading and visibility pausing.

class AmbientMusicController {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private volume: number = 0.16; // Gentle background level so voice remains crystal-clear
  private chordInterval: any = null;
  private activeOscillators: OscillatorNode[] = [];
  private activeGains: GainNode[] = [];

  // Church-inspired liturgical chord progressions (frequencies in Hz)
  // Cmaj9 -> Am9 -> Fmaj7 -> Gsus4/add9
  private chords = [
    [130.81, 196.0, 246.94, 329.63], // C3, G3, B3, E4 (Peaceful Cmaj9)
    [110.0, 164.81, 196.0, 261.63],  // A2, E3, G3, C4 (Meditative Am9)
    [87.31, 130.81, 220.0, 329.63],  // F2, C3, A3, E4 (Warm Fmaj7)
    [98.0, 146.83, 220.0, 293.66],   // G2, D3, A3, D4 (Reverent Gsus4/add9)
  ];
  private currentChordIndex = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      // Auto-pause when tab is hidden to save resources
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          if (this.ctx && this.ctx.state === 'running') {
            this.ctx.suspend();
          }
        } else if (document.visibilityState === 'visible') {
          if (this.ctx && this.ctx.state === 'suspended' && this.isPlaying) {
            this.ctx.resume();
          }
        }
      });
    }
  }

  private initContext(): boolean {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return false;
      this.ctx = new AudioContextClass();

      // Master output gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    return true;
  }

  public startMusic(): void {
    if (this.isPlaying) return;
    if (!this.initContext() || !this.ctx || !this.masterGain) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;

    // Smooth fade in
    const targetVol = this.isMuted ? 0 : this.volume;
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(targetVol, this.ctx.currentTime + 1.8);

    this.playChordSequence();
    this.chordInterval = setInterval(() => {
      if (this.isPlaying) {
        this.playChordSequence();
      }
    }, 5500); // Shift chords gently every 5.5 seconds
  }

  private playChordSequence(): void {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;

    const chord = this.chords[this.currentChordIndex];
    this.currentChordIndex = (this.currentChordIndex + 1) % this.chords.length;

    // Clean up previous voice nodes
    const now = this.ctx.currentTime;
    for (const g of this.activeGains) {
      try {
        g.gain.linearRampToValueAtTime(0.0001, now + 1.5);
      } catch (e) {}
    }

    // Build soft multi-harmonic pad
    for (const freq of chord) {
      // Main warm tone (Sine)
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Subtle church organ harmonic (Triangle, low level)
      const subOsc = this.ctx.createOscillator();
      subOsc.type = 'triangle';
      subOsc.frequency.setValueAtTime(freq * 0.5, now);

      // Lowpass Filter for warm acoustic feel
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, now);

      const noteGain = this.ctx.createGain();
      noteGain.gain.setValueAtTime(0.0001, now);
      // Gentle attack
      noteGain.gain.linearRampToValueAtTime(0.22, now + 1.6);
      // Gentle decay / sustain
      noteGain.gain.exponentialRampToValueAtTime(0.12, now + 4.8);

      osc.connect(filter);
      subOsc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(now);
      subOsc.start(now);

      this.activeOscillators.push(osc, subOsc);
      this.activeGains.push(noteGain);
    }
  }

  public stopMusic(fadeSeconds: number = 1.2): void {
    if (!this.isPlaying) return;
    this.isPlaying = false;

    if (this.chordInterval) {
      clearInterval(this.chordInterval);
      this.chordInterval = null;
    }

    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.linearRampToValueAtTime(0.0001, now + fadeSeconds);

      setTimeout(() => {
        for (const osc of this.activeOscillators) {
          try {
            osc.stop();
            osc.disconnect();
          } catch (e) {}
        }
        this.activeOscillators = [];
        this.activeGains = [];
      }, fadeSeconds * 1000 + 100);
    }
  }

  public setVolume(newVolume: number): void {
    this.volume = Math.max(0, Math.min(1, newVolume));
    if (this.ctx && this.masterGain && !this.isMuted) {
      this.masterGain.gain.linearRampToValueAtTime(this.volume, this.ctx.currentTime + 0.2);
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.ctx && this.masterGain) {
      const target = this.isMuted ? 0 : this.volume;
      this.masterGain.gain.linearRampToValueAtTime(target, this.ctx.currentTime + 0.2);
    }
    return this.isMuted;
  }

  public getMutedState(): boolean {
    return this.isMuted;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

// Export singleton instance
export const ambientMusic = new AmbientMusicController();
