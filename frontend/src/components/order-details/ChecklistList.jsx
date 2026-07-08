import ChecklistItem from "./ChecklistItem";

function ChecklistList({
  checklist,
  onToggle,
  readOnly,
}) {

  return (

    <div className="mt-5 space-y-4 px-5">

      {checklist.map(item => (

        <ChecklistItem
          key={item._id}
          item={item}
          onToggle={onToggle}
          readOnly={readOnly}
        />

      ))}

    </div>

  );

}

export default ChecklistList;