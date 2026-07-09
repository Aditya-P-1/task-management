interface FilterBarProps {
  status: string;
  priority: string;
  sortBy: string;
  order: string;
  onStatusChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
  onSortByChange: (value: string) => void;
  onOrderChange: (value: string) => void;
}

const FilterBar = ({
  status,
  priority,
  sortBy,
  order,
  onStatusChange,
  onPriorityChange,
  onSortByChange,
  onOrderChange,
}: FilterBarProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 mb-6 flex flex-wrap gap-4">

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="border rounded-lg px-3 py-2"
      >
        <option value="">All Status</option>
        <option value="TODO">TODO</option>
        <option value="IN_PROGRESS">IN PROGRESS</option>
        <option value="DONE">DONE</option>
      </select>

      <select
        value={priority}
        onChange={(e) => onPriorityChange(e.target.value)}
        className="border rounded-lg px-3 py-2"
      >
        <option value="">All Priority</option>
        <option value="LOW">LOW</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => onSortByChange(e.target.value)}
        className="border rounded-lg px-3 py-2"
      >
        <option value="">Sort By</option>
        <option value="createdAt">Created Date</option>
        <option value="dueDate">Due Date</option>
        <option value="priority">Priority</option>
      </select>

      <select
        value={order}
        onChange={(e) => onOrderChange(e.target.value)}
        className="border rounded-lg px-3 py-2"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

    </div>
  );
};

export default FilterBar;