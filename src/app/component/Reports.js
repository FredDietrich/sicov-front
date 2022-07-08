import { Box } from "@mui/system";
import { PieChart } from "react-minimal-pie-chart";
import TopBar from "./TopBar";

export default function Reports() {
    return (
        <div className="Reports">
            <TopBar>Função em desenvolvimento!</TopBar>
            <Box sx={{width: '30%'}}>
                <PieChart
                    data={[
                        { title: 'Aptas', value: 30, color: '#42a832' },
                        { title: 'Não aptas', value: 70, color: '#a83232' }
                    ]}
                />
            </Box>
        </div>
    )
}