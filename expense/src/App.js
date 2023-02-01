import Expenses from "./component/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94000,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", 
      title: "New TV", 
      amount: 799000, 
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294000,
      date: new Date(2021, 2, 28),
    },
    
  ];

  return (
    <div>
      <h2>Hello World!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
