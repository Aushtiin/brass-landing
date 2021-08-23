import BuiltFor from "./components/BuiltFor/BuiltFor";
import ChooseBetter from "./components/ChooseBetter/ChooseBetter";
import Fees from "./components/Fees/Fees";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeModule from "./components/HomeModule/HomeModule";


function App() {
  return (
    <div className="App">
      <Header />
      <HomeModule />
      <BuiltFor />
      <ChooseBetter />
      <Fees />
      <Footer />
    </div>
  );
}

export default App;
