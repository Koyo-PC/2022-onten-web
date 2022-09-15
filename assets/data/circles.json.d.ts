export interface Circle {
  name: string;
  description?: string;
  room?: string[];
}

declare const value: Record<string, Circle>;
export default value;
