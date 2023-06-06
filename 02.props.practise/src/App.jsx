
import "./App.css";
import Users from "./companents/Cards";

function App() {
  const data = [
    {
      id: 1,
      name: "Zarifa",
      surname: "Alieffa",
      city: "Udjar",
    },
    {
      id: 2,
      name: "Leyla",
      surname: "Alieffa",
      city: "  Ganja",
    },
    {
      id: 3,
      name: "Ulfat",
      surname: "Zakirli",
      city: "  Gadabay",
    },
    {
      id: 4,
      name: "Narmin",
      surname: "Alakbarli",
      city: "  Ganja",
    },
    {
      id: 5,
      name: "Nazim",
      surname: "Namazov",
      city: "Shamkir",
    },
  ];

  return (
    <div className="App">
      <h1>Hello</h1>
      <Users data={data}/>
    </div>
  );
}

export default App;
