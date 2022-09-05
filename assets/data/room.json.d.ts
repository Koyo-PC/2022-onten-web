export interface Room {
  floor: number;
  building: number;
  loc: number[2];
  spread: ?boolean;
}

declare const value: Record<string, Room>;
export default value;
