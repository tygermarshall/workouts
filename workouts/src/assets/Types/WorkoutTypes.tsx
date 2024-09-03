interface WorkoutData {
  workout: {
    name: string;
    days: {
      name: string;
      excerises: {
        name: string;
        sets: {
          isAmrap: boolean;
          repCount: number;
          weight: number;
          notes: string;
        }[];
      }[];
    }[];
  };
}
interface Excersise {
  name: string;
  sets: {
    isAmrap: boolean;
    repCount: number;
    weight: number;
    notes: string;
  }[];
}

export type { WorkoutData, Excersise };
