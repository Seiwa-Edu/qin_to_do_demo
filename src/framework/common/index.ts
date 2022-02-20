export type User = {
  displayName: string | null | undefined;
  email: string | null | undefined;
  icon: string | null | undefined;
};

export type Todo = {
  text: string;
  createAt: Date;
  dueDate: Date;
  isComplete: boolean;
  author: string;
};
