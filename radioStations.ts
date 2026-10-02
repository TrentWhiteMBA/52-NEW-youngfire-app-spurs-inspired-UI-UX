export interface RadioStation {
  id: string;
  name: string;
  genre: string;
  streamUrl: string;
  accentColor: string;
  location?: string;
  description?: string;
  logo?: string;
}

export const GOSPEL_STATIONS: RadioStation[] = [
  {
    id: 'worship-lift',
    name: 'YoungFire Contemporary Worship (Worship Lift)',
    genre: 'Contemporary Praise & Worship',
    streamUrl: 'https://listen.181fm.com/181-power_128k.mp3',
    accentColor: '#F59E0B',
    location: 'San Antonio, TX',
    description: 'Non-stop holy encounter, contemporary worship, and young adult kingdom anthems.'
  },
  {
    id: 'praise-hiphop',
    name: 'Gospel Praise & Holy Hip Hop',
    genre: 'Holy Hip-Hop & Urban Praise',
    streamUrl: 'https://radio.gotright.net/radio/8000/radio.mp3',
    accentColor: '#EA580C',
    location: 'San Antonio, TX',
    description: 'High-energy kingdom hip-hop, sacred 808s, and holy rap declaring Christ Jesus.'
  },
  {
    id: 'sovereign-gospel',
    name: 'Sovereign Gospel Radio',
    genre: 'Traditional & Modern Gospel',
    streamUrl: 'https://online.goradio.com.ng/listen/gr/radio.mp3',
    accentColor: '#D97706',
    location: 'Texas Sanctuary Network',
    description: 'Authentic gospel praise, church choir anthems, and powerhouse worship voices.'
  },
  {
    id: 'ambient-prayer',
    name: 'Ambient Prayer & Intercession',
    genre: 'Instrumental Soaking & Warfare',
    streamUrl: 'https://s3.radio.co/s97f38db97/listen',
    accentColor: '#FBBF24',
    location: 'Intercession Altar',
    description: 'Calming prophetic pads, violin, and soaking prayer chords for deep communion.'
  },
  {
    id: 'hymns-ages',
    name: 'Hymns of the Ages',
    genre: 'Sacred Hymnology & Choral',
    streamUrl: 'https://0nlineradio.stream39.radiohost.de/0r-gospel',
    accentColor: '#FFFFFF',
    location: 'Historic Sanctuary Stream',
    description: 'Timeless doctrinal hymns, rich orchestral brass, and sacred choral devotionals.'
  },
  {
    id: 'apostolic-word',
    name: 'Apostolic Word & Preaching Network',
    genre: 'Expository Preaching & Teachings',
    streamUrl: 'https://de2.streamingpulse.com/ssl/LinkFM',
    accentColor: '#E2E8F0',
    location: 'Joshua House Broadcast',
    description: 'Biblical truth, sermons, and apostolic discipleship exhortation.'
  },
  {
    id: 'instrumental-devotional',
    name: 'Afro & Global Gospel Praise',
    genre: 'Acoustic & Piano Worship',
    streamUrl: 'https://a10.asurahosting.com:7120/radio.mp3',
    accentColor: '#F59E0B',
    location: 'Sanctuary Study Room',
    description: 'Peaceful acoustic piano and string arrangements designed for scripture study.'
  },
  {
    id: 'urban-classics',
    name: 'Urban Gospel Classics',
    genre: '90s & 2000s Gospel Anthems',
    streamUrl: 'https://a6.asurahosting.com:8880/radio.mp3',
    accentColor: '#D97706',
    location: 'Sanctuary Vault',
    description: 'Classic quartet, golden era gospel harmonies, and legendary testimonies.'
  }
];
