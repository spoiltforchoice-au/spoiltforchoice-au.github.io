export interface Show {
  date: string;
  venue: string;
  city: string;
  state?: string;
  mapsLink?: string;
  ticketLink?: string;
}

export interface ShowsData {
  shows: Show[];
}
