interface Set {
  id: number;
  isAmrap: boolean;
  repCount: number;
  weight: number;
  notes: string;
  repsActual?: number;
}

interface Exercise {
  id: number;
  name: string;
  sets: Set[];
}

interface Day {
  id: number;
  name: string;
  exercises: Exercise[];
}

interface Workout {
  name: string;
  days: Day[];
}

export type { Set, Exercise, Day, Workout };
