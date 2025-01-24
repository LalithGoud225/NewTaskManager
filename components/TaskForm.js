export default function TaskForm({ onAdd }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      const title = e.target.task.value;
      if (!title.trim()) return;
      onAdd(title);
      e.target.reset();
    };
  
    return (
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          name="task"
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Add new task"
        />
      </form>
    );
  }