import React from "react";
import Hadits from "../models/Hadits";
import Highlighter from "react-highlight-words";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface props {
    hadits: Hadits[];
    filterText: string;
}

const HaditsTable: React.FC<props> = ({ hadits, filterText }) => {
    let filterTextToSearch = filterText.length > 2 ? filterText : "";
    filterTextToSearch = filterTextToSearch.toLowerCase();
    const regexFilterText = new RegExp("\\b" + filterTextToSearch + "\\b");

    const filteredHaditsElements: JSX.Element[] = [];

    hadits.forEach((hadits: Hadits) => {
        if (
            hadits.terjemah.toLowerCase().search(regexFilterText) === -1 &&
            hadits.kandungan.toLowerCase().search(regexFilterText) === -1 &&
            hadits.ayat.toLowerCase().search(regexFilterText) === -1
        ) {
            return;
        }

        filteredHaditsElements.push(
            <Card sx={{ minWidth: 275, m: 3 }} key={hadits.id}>
                <CardContent>
                    <h3>{hadits.judul}</h3>
                    <p style={{ textAlign: "right" }}>{hadits.arab}</p>
                    <Highlighter
                        highlightClassName=""
                        searchWords={[filterTextToSearch]}
                        autoEscape={true}
                        textToHighlight={hadits.terjemah}
                        style={{ whiteSpace: "pre-line" }}
                    />

                    <h4>Kandungan:</h4>
                    <Highlighter
                        highlightClassName=""
                        searchWords={[filterTextToSearch]}
                        autoEscape={true}
                        textToHighlight={hadits.kandungan}
                        style={{ whiteSpace: "pre-line" }}
                    />

                    <h4>Ayat-ayat terkait:</h4>
                    <Highlighter
                        highlightClassName=""
                        searchWords={[filterTextToSearch]}
                        autoEscape={true}
                        textToHighlight={hadits.ayat}
                        style={{ whiteSpace: "pre-line" }}
                    />
                </CardContent>
            </Card>
        );
    });

    return (
        <div>
            <Card sx={{ minWidth: 275, m: 3 }}>
                <CardContent>
                    {filterText.length > 2
                        ? `ditemukan ${filteredHaditsElements.length} hadits tentang "${filterText}"`
                        : `${hadits.length} Hadist Arba'in`}
                </CardContent>
            </Card>

            {filteredHaditsElements}
        </div>
    );
};

export default HaditsTable;
