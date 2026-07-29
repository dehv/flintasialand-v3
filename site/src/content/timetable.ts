export interface TimeSlot {
  time: string;
  artist: string;
  description?: string;
}

export interface StageSchedule {
  stageName: string;
  stageSlug: string;
  slots: TimeSlot[];
}

export const timetable: StageSchedule[] = [
  {
    stageName: 'Kieselwiese (Liveacts)',
    stageSlug: 'kieselwiese',
    slots: [
      { time: '14:30h', artist: 'Begrüßung flinta*sialand Team' },
      { time: '15:00h - 15:15h', artist: 'Ideer' },
      { time: '15:30h - 16:15h', artist: 'FlOuse' },
      { time: '16:45h - 17:15h', artist: 'Beste & Liv' },
      { time: '17:45h - 18:30h', artist: 'Artemis Jade' },
      { time: '19:00h - 19:45h', artist: 'Bärte mit Mädchen' },
      { time: '19:45h - 20:30h', artist: 'DDDR' },
      { time: '21:00h - 21:45h', artist: 'Tigrezz Punch' }
    ]
  },
  {
    stageName: 'Maschinerie (DJs)',
    stageSlug: 'maschinerie',
    slots: [
      { time: '14:00h - 15:00h', artist: 'lil apple' },
      { time: '15:00h - 16:30h', artist: 'canê b2b Schrotflinta' },
      { time: '16:30h - 18:15h', artist: 'shaxtar b2b kisya' },
      { time: '18:15h - 20:00h', artist: 'Floppy b2b Corti' },
      { time: '20:00h - 22:00h', artist: 'Scherwin Hosseini b2b Alias Shay' },
      { time: '22:00h - 00:00h', artist: 'makahaun' }
    ]
  }
];
