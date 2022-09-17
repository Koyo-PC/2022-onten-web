export interface Circle {
  name: string;
  description?: string;
  room?: string[];
  type: "admin" | "club" | "party" | "class";
}

declare const value: Record<string, Circle>;
export default value;
