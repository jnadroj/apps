import { useEffect, useState } from "react";

import { Task } from "../../../../../../models";
import { getTasks } from "../../../../../../services";
const useListTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (err) {
      return err;
    }
  };

  return { tasks };
};

export default useListTasks;
