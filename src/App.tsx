import { useState } from "react";
import "./App.css";
import arbain from "./data/arbain-all.json";
import HaditsTable from "./components/HaditsTable";
import Hadits from "./models/Hadits";
import SearchBar from "./components/SearchBar";

function App() {
    const [filterText, setfilterText] = useState<string>("");

    const haditsArbain: Hadits[] = arbain;

    const handleFilterTextChange = (value:string) => {
      setfilterText(value)
    }

    return (
        <div className="App">
            <SearchBar
                filterText={filterText}
                onFilterTextChange={handleFilterTextChange}
            />
            <HaditsTable hadits={haditsArbain} filterText={filterText} />
        </div>
    );
}

export default App;
