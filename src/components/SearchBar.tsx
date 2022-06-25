import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";

interface props {
    filterText: string;
    onFilterTextChange: Function;
}

const SearchBar: React.FC<props> = ({ filterText, onFilterTextChange }) => {
    return (
        <Container sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    label="Cari kata"
                    variant="outlined"
                    value={filterText}
                    onChange={(e) => onFilterTextChange(e.target.value)}
                />
            </Box>
        </Container>
    );
};

export default SearchBar;
