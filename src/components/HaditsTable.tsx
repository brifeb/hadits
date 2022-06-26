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
    const filterTextToSearch = filterText.length > 2 ? filterText : "";
    const filteredHadits: Hadits[] = [];

    hadits.forEach((hadits: Hadits) => {
        if (
            hadits.terjemah
                .toLowerCase()
                .indexOf(filterTextToSearch.toLowerCase()) === -1 &&
            hadits.kandungan
                .toLowerCase()
                .indexOf(filterTextToSearch.toLowerCase()) === -1 &&
            hadits.ayat
                .toLowerCase()
                .indexOf(filterTextToSearch.toLowerCase()) === -1
        ) {
            return;
        }
        filteredHadits.push(hadits);
    });

    return (
        <div>
            <Card sx={{ minWidth: 275, m: 3 }}>
                <CardContent>
                    {hadits.length === filteredHadits.length
                        ? `${hadits.length} Hadist Arba'in`
                        : `ditemukan ${filteredHadits.length} hadits tentang "${filterText}"`}
                </CardContent>
            </Card>

            {filteredHadits.map((hadist) => (
                <Card sx={{ minWidth: 275, m: 3 }} key={hadist.id}>
                    <CardContent>
                        <h3>{hadist.judul}</h3>
                        <p style={{ textAlign: "right" }}>{hadist.arab}</p>
                        <Highlighter
                            highlightClassName=""
                            searchWords={[filterTextToSearch]}
                            autoEscape={true}
                            textToHighlight={hadist.terjemah}
                            style={{ whiteSpace: "pre-line" }}
                        />

                        <h4>Kandungan:</h4>
                        <Highlighter
                            highlightClassName=""
                            searchWords={[filterTextToSearch]}
                            autoEscape={true}
                            textToHighlight={hadist.kandungan}
                            style={{ whiteSpace: "pre-line" }}
                        />

                        <h4>Ayat-ayat terkait:</h4>
                        <Highlighter
                            highlightClassName=""
                            searchWords={[filterTextToSearch]}
                            autoEscape={true}
                            textToHighlight={hadist.ayat}
                            style={{ whiteSpace: "pre-line" }}
                        />
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default HaditsTable;
