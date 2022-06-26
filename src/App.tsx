import { useState } from "react";
import "./App.css";
import arbain from "./data/arbain-all.json";
import HaditsTable from "./components/HaditsTable";
import Hadits from "./models/Hadits";
import SearchBar from "./components/SearchBar";
import { Container } from "@mui/material";

function App() {
    const [filterText, setfilterText] = useState<string>("");

    const haditsArbain: Hadits[] = arbain;

    const handleFilterTextChange = (value: string) => {
        setfilterText(value);
    };

    return (
        <Container>
            <SearchBar
                filterText={filterText}
                onFilterTextChange={handleFilterTextChange}
            />
            <HaditsTable hadits={haditsArbain} filterText={filterText} />
        </Container>
    );
}

export default App;
