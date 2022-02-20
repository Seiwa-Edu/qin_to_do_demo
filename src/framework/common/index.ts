export type User = {
  displayName: string | null | undefined;
  email: string | null | undefined;
  icon?: string | null | undefined;
  id?: string | null | undefined;
};

export type Todo = {
  text: string;
  createAt: Date;
  dueDate: number;
  isComplete: boolean;
  userId: string;
};
