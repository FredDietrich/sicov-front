import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField"
import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import { CircularProgress } from "@mui/material";
import { getVaccinesByCriteria } from "../service/vacina";

function Main() {

    const [isLoading, setIsLoading] = useState(true);
    const [vaccine, setVaccine] = useState('');
    const [vaccines, setVaccines] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        async function fetchVaccines() {
            getVaccinesByCriteria({dummy: 'criteria'}).then(resVaccines => {
                setVaccines(resVaccines);
                console.log(resVaccines)
                setIsLoading(false);
            });            
        }
        fetchVaccines();
    }, [])

    return isLoading?  ( <CircularProgress /> ) : (
        <div className="Main">
            <TopBar title="SICOV - Busca de Vacinas" />
            <Grid sx={{ flexGrow: 1 }} container spacing={2} justifyContent="center" columns={{ xs: 4, sm: 4, md: 6, lg: 6 }}>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <InputLabel id="vac-label">Vacina</InputLabel>
                        <Select
                            labelId="vac-label"
                            value={vaccine}
                            label="Vacina"
                            variant="outlined"
                            onChange={e => setVaccine(e.target.value)}
                        >
                            <MenuItem value="">
                                <em>Nenhuma</em>
                            </MenuItem>
                            { vaccines &
                            vaccines.map((vac, index) => { return ( 
                                <MenuItem key={index} value={vac.name}>{vac.name}</MenuItem>
                             )})
                            }
                            
                        </Select>
                        <FormHelperText>Escolha uma vacina de interesse, ou deixe em branco para listar todas as disponíveis para você.</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Idade"
                        variant="outlined"
                        fullWidth 
                    />
                </Grid>
            </Grid>
        </div>
    )

}

export default Main;