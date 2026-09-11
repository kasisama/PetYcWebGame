let ctx: AudioContext | null = null;

function audio() {
  if (typeof window === "undefined") return null;
  ctx ??= new AudioContext();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function blip(freq: number, dur = 0.09, type: OscillatorType = "triangle", gain = 0.05) {
  const c = audio();
  if (!c) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.value = gain;
  o.connect(g);
  g.connect(c.destination);
  o.start();
  g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
  o.stop(c.currentTime + dur);
}

export function sfxTap() {
  blip(540, 0.07);
}

export function sfxOk() {
  blip(660, 0.08);
  window.setTimeout(() => blip(880, 0.1), 70);
}

export function sfxNo() {
  blip(220, 0.12, "square", 0.03);
}

export function sfxHit() {
  blip(180, 0.08, "sawtooth", 0.04);
  window.setTimeout(() => blip(420, 0.06), 40);
}
