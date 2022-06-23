import { Box } from "@mui/material";
import { createTheme } from "@mui/system";
import { DataGrid, ptBR } from "@mui/x-data-grid";
import StatusTag from "./StatusTag";

function Results() {

    const theme = createTheme({
        ptBR
    })

    const data = {
        columns: [
            { field: "vaccine", flex: 1, headerName: "Vacina" },
            { field: "criteria", flex: 0.5, headerName: "Critério" },
            { field: "status", flex: 0.5, headerName: "Status", renderCell: (params) => <StatusTag>{params.value}</StatusTag>}
        ],
        rows: [
            { id: 1, vaccine: "Covid 19", criteria: "Idade", startDate: "", endDate: "" }
        ]
    }

    return (
        <Box sx={{ height: 500, width: "100%" }}>
            <DataGrid
                {...data}
                theme={theme}
                
            />
        </Box>
    )

}

export default Results;