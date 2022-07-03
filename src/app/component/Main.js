import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import CircularProgress from "@mui/material/CircularProgress";
import { getAllVaccines } from "../service/vaccine";
import FormItem from "./FormItem";
import Form from "./Form";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ArrowForward from '@mui/icons-material/ArrowForward';
import { getStates } from "../service/states";
import TextField from "@mui/material/TextField";
import Error from "./Error";
import { useDispatch } from "react-redux";
import { addCriteria } from "../reducer/criteriaReducer";
import { Navigate, useNavigate } from "react-router-dom";

function Main() {

    const [isLoading, setIsLoading] = useState(true);
    const [vaccine, setVaccine] = useState('');
    const [age, setAge] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [comorbidity, setComorbidity] = useState(false);
    const [riskGroup, setRiskGroup] = useState(false);
    const [error, setError] = useState('');

    const [vaccines, setVaccines] = useState([]);
    const [states, setStates] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        function fetchVaccines() {
            setIsLoading(true);
            getAllVaccines().then(resVaccines => {
                setVaccines(resVaccines);
                setIsLoading(false);
            }).catch(e => {
                console.error(e);
                setError("Não foi possível carregar as vacinas, tente novamente mais tarde.");
            });
        }
        function fetchStates() {
            setIsLoading(true);
            getStates().then(resStates => {
                setStates(resStates);
                setIsLoading(false);
            }).catch(e => {
                console.error(e);
                setError("Não foi possível carregar os estados, tente novamente mais tarde.");
            });
        }
        fetchVaccines();
        fetchStates();
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        const payload  = {
            vaccine: vaccine,
            age: age,
            state: state,
            city: city,
            comorbidity: comorbidity,
            riskGroup: riskGroup
        };
        dispatch(addCriteria(payload));
        navigate("/results");
    }

    return isLoading ? (<CircularProgress />) : (
        <div className="Main">
            <TopBar>SICOV - Busca de Vacinas</TopBar>
            <Error error={error} setError={setError} />
            <Form>
                <FormItem>
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
                            {vaccines &&
                                vaccines.map((vac, index) => <MenuItem key={index} value={vac.name}>{vac.name}</MenuItem>)
                            }
                        </Select>
                        <FormHelperText>Escolha uma vacina de interesse, ou deixe em branco para listar todas as disponíveis para você.</FormHelperText>
                    </FormControl>
                </FormItem>
                <FormItem>
                    <TextField
                        label="Idade"
                        variant="outlined"
                        fullWidth
                        autoFocus
                        required
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                </FormItem>
                <FormItem>
                    <FormControl fullWidth>
                        <InputLabel id="estado-label">Estado</InputLabel>
                        <Select
                            labelId="estado-label"
                            value={state}
                            label="Estado"
                            variant="outlined"
                            onChange={e => setState(e.target.value)}
                        >
                            <MenuItem value="">
                                <em>Todos</em>
                            </MenuItem>
                            {states &&
                                states.sort((a, b) => (a.name > b.name) ? 1 : -1).map((mState, index) => <MenuItem key={index} value={mState.key}>{mState.name}</MenuItem>)
                            }
                        </Select>
                        <FormHelperText>Escolha um estado (opcional)</FormHelperText>
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormControl fullWidth>
                        <InputLabel id="cidade-label">{state ? "Cidade" : "Selecione um estado acima primeiro..."}</InputLabel>
                        <Select
                            labelId="cidade-label"
                            disabled={!state}
                            value={city}
                            label="Cidade"
                            variant="outlined"
                            onChange={e => setCity(e.target.value)}
                        >
                            <MenuItem value="">
                                <em>Todas</em>
                            </MenuItem>
                            {state && states &&
                                states.filter(fState => fState.key === state)[0].cities.sort().map((mCity, index) => <MenuItem key={index} value={mCity}>{mCity}</MenuItem>)
                            }
                        </Select>
                        <FormHelperText>{state ? "Escolha uma cidade (opcional)" : "Escolha primeiro um estado para poder escolher a cidade!"}</FormHelperText>
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormControl>
                        <FormControlLabel control={<Checkbox />} label="Comorbidade" value={comorbidity} onChange={e => setComorbidity(e.target.value)} />
                    </FormControl>
                </FormItem>
                <FormItem>
                    <FormControl>
                        <FormControlLabel control={<Checkbox />} label="Grupo de risco" value={riskGroup} onChange={e => setRiskGroup(e.target.value)} />
                    </FormControl>
                </FormItem>
                <FormItem justifyContent="center">
                    <FormControl>
                        <Button
                            variant="contained"
                            color="success"
                            endIcon={<ArrowForward />}
                            onClick={handleSubmit}
                        >
                            Buscar
                        </Button>
                    </FormControl>
                </FormItem>
            </Form>
        </div>
    )

}

export default Main;