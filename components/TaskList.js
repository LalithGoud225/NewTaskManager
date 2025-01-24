export default function TaskList({ tasks, onDelete }) {
    return (
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center p-3 bg-white rounded shadow">
            <span>{task.title}</span>
            <button 
              onClick={() => onDelete(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }