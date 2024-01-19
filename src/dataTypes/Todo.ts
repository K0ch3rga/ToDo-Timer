type Todo = {
  id: string;
  title: string;
  description?: string;
  isComplete?: boolean;
  startTime?: Date;
  endTime?: Date;
  // tokenId: string;
};

export default Todo;
