export const matchData = {
  date: '24/01/2026',
  stadium: 'Etihad Stadium',
  homeTeam: {
    name: 'Manchester City',
    shortName: 'Man City',
    badge: 'mancity',
    score: 2,
  },
  awayTeam: {
    name: 'Wolverhampton Wanderers',
    shortName: 'Wolves',
    badge: 'wolves',
    score: 0,
  },
  scorers: [
    { name: 'Omar Marmoush', minute: 5 },
    { name: 'Antoine Semenyo', minute: 46 },
  ],
};

export const actionFilters = [
  'Goals',
  'Shots',
  'Shots On Target',
  'Skills',
  'Saves/ Blocks',
  'Near Misses',
  'Mid Range Shots',
  'Long Range Shots',
  'Direct Freekicks',
  'Corners',
  'Crosses',
  'Offside',
];

export const statsData = [
  { label: 'Possession', home: 64, away: 36, unit: '%' },
  { label: 'Total Shots', home: 18, away: 7 },
  { label: 'Shots On Target', home: 8, away: 2 },
  { label: 'Corners', home: 7, away: 3 },
  { label: 'Fouls', home: 9, away: 12 },
  { label: 'Yellow Cards', home: 1, away: 3 },
  { label: 'Offsides', home: 2, away: 1 },
  { label: 'Passes', home: 542, away: 298 },
  { label: 'Pass Accuracy', home: 89, away: 76, unit: '%' },
];

export const timelineEvents = [
  { minute: 1, type: 'kickoff', description: 'Kick Off' },
  { minute: 5, type: 'goal', team: 'home', player: 'Omar Marmoush', description: 'Goal! Marmoush finishes a quick counter-attack.' },
  { minute: 12, type: 'yellow', team: 'away', player: 'Mario Lemina', description: 'Yellow card for a late challenge.' },
  { minute: 23, type: 'shot', team: 'home', player: 'Phil Foden', description: 'Shot saved by the goalkeeper.' },
  { minute: 34, type: 'corner', team: 'home', description: 'Corner kick for Manchester City.' },
  { minute: 45, type: 'halftime', description: 'Half Time' },
  { minute: 46, type: 'goal', team: 'home', player: 'Antoine Semenyo', description: 'Goal! Semenyo heads in from a cross.' },
  { minute: 55, type: 'yellow', team: 'away', player: 'Toti Gomes', description: 'Yellow card for holding.' },
  { minute: 62, type: 'sub', team: 'home', playerIn: 'Jack Grealish', playerOut: 'Antoine Semenyo', description: 'Substitution for Manchester City.' },
  { minute: 71, type: 'shot', team: 'away', player: 'Matheus Cunha', description: 'Long range shot goes wide.' },
  { minute: 78, type: 'save', team: 'home', player: 'Ederson', description: 'Great save by Ederson.' },
  { minute: 85, type: 'yellow', team: 'away', player: 'Craig Dawson', description: 'Yellow card for time wasting.' },
  { minute: 90, type: 'fulltime', description: 'Full Time - Manchester City 2-0 Wolverhampton Wanderers' },
];

export const lineupData = {
  home: {
    formation: '4-3-3',
    players: [
      { number: 31, name: 'Ederson', position: 'GK' },
      { number: 2, name: 'Kyle Walker', position: 'RB' },
      { number: 3, name: 'Ruben Dias', position: 'CB' },
      { number: 25, name: 'Manuel Akanji', position: 'CB' },
      { number: 6, name: 'Nathan Aké', position: 'LB' },
      { number: 17, name: 'Kevin De Bruyne', position: 'CM' },
      { number: 20, name: 'Bernardo Silva', position: 'CM' },
      { number: 8, name: 'Mateo Kovacic', position: 'CM' },
      { number: 47, name: 'Phil Foden', position: 'RW' },
      { number: 7, name: 'Omar Marmoush', position: 'ST' },
      { number: 19, name: 'Antoine Semenyo', position: 'LW' },
    ],
  },
  away: {
    formation: '3-4-3',
    players: [
      { number: 1, name: 'José Sá', position: 'GK' },
      { number: 15, name: 'Craig Dawson', position: 'CB' },
      { number: 4, name: 'Santiago Bueno', position: 'CB' },
      { number: 23, name: 'Toti Gomes', position: 'CB' },
      { number: 2, name: 'Matt Doherty', position: 'RWB' },
      { number: 28, name: 'João Gomes', position: 'CM' },
      { number: 5, name: 'Mario Lemina', position: 'CM' },
      { number: 3, name: 'Rayan Aït-Nouri', position: 'LWB' },
      { number: 10, name: 'Matheus Cunha', position: 'RW' },
      { number: 29, name: 'Jorgen Strand Larsen', position: 'ST' },
      { number: 7, name: 'Pedro Neto', position: 'LW' },
    ],
  },
};

export const playerStats = [
  { name: 'Omar Marmoush', team: 'home', goals: 1, assists: 0, shots: 4, passes: 32, rating: 8.5 },
  { name: 'Antoine Semenyo', team: 'home', goals: 1, assists: 0, shots: 3, passes: 28, rating: 7.8 },
  { name: 'Kevin De Bruyne', team: 'home', goals: 0, assists: 1, shots: 2, passes: 78, rating: 8.2 },
  { name: 'Phil Foden', team: 'home', goals: 0, assists: 1, shots: 3, passes: 54, rating: 7.6 },
  { name: 'Bernardo Silva', team: 'home', goals: 0, assists: 0, shots: 1, passes: 67, rating: 7.4 },
  { name: 'Matheus Cunha', team: 'away', goals: 0, assists: 0, shots: 3, passes: 35, rating: 6.8 },
  { name: 'Mario Lemina', team: 'away', goals: 0, assists: 0, shots: 0, passes: 41, rating: 5.9 },
  { name: 'Jorgen Strand Larsen', team: 'away', goals: 0, assists: 0, shots: 2, passes: 18, rating: 5.7 },
];

export const recentMatches = [
  {
    homeTeam: { name: 'Crystal Palace', badge: 'palace' },
    awayTeam: { name: 'Wolverhampton Wanderers', badge: 'wolves' },
    homeScore: 1,
    awayScore: 0,
    date: '22/02/2026',
  },
  {
    homeTeam: { name: 'Wolverhampton Wanderers', badge: 'wolves' },
    awayTeam: { name: 'Arsenal', badge: 'arsenal' },
    homeScore: 2,
    awayScore: 2,
    date: '18/02/2026',
  },
];
