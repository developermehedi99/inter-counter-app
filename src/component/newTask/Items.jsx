const itemsList = [
  {
    id: 1,
    title: "tittle-1",
    checked: true,
  },

  {
    id: 2,
    title: "tittle-2",
    checked: false,
  },
  {
    id: 3,
    title: "tittle-3",
    checked: true,
  },
  {
    id: 4,
    title: "tittle-4",
    checked: false,
  },
  {
    id: 5,
    title: "tittle-5",
    checked: true,
  },
];

const Items = () => {
  return (
    <div>
      {itemsList.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Items;

export const ListItem = ({ item }) => {
  return (
    <li style={{ display: "flex", textAlign: "center" }}>
      <input type="checkbox" checked={item.checked}/>
      <p>{item.title}</p>
      <button style={{ marginLeft: "auto" }}>delete</button>
    </li>
  );
};
