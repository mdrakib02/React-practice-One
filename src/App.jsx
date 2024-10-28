import "./App.css";
import NavBAr from "./Components/NavBar/NavBar";
import PriceOption from "./Components/PriceOption/PriceOption";

function App() {
  return <>

<header className="Container w-10/12 mx-auto">
<NavBAr></NavBAr>
</header>
<main className="container w-10/12 mx-auto">
<PriceOption></PriceOption>
</main>

  </>;
}

export default App;
