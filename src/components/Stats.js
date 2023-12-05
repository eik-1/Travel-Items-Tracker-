export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((i) => i.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Great job! You are all packed! ✈️"
          : `You have ${numItems} items on you list, and you have already packed${" "}
          ${numPacked} (${percentage} %)`}
      </em>
    </footer>
  );
}
