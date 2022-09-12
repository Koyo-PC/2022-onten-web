export interface Circle {
  name: string;
  description: string | undefined;
}

declare const value: Record<string, Circle>;
export default value;
