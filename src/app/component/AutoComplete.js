import { Autocomplete, createFilterOptions, TextField } from "@mui/material";

const filter = createFilterOptions();

export default function AutoComplete(props) {
    return (
    <Autocomplete
        fullWidth
        value={props.Value}
        onChange={(e, newValue) => {
            if (typeof newValue === 'string') {
                setTimeout(() => {
                    props.setOpen(true);
                    props.setModalValues({
                        name: newValue,
                        year: '',
                    });
                });
            } else if (newValue && newValue.inputValue) {
                props.setOpen(true);
                props.setModalValues({
                    title: newValue.inputValue,
                    year: '',
                });
            } else {
                props.setValue(newValue);
            }
        }}
        filterOptions={(options, params) => {
            const filtered = filter(options, params);
            if (params.inputValue !== '') {
                filtered.push({
                    inputValue: params.inputValue,
                    name: `Adicionar "${params.inputValue}"`,
                });
                console.log(filtered)
            }
            return filtered;
        }}
        id="vaccine-autocomplete"
        options={props.existingValues}
        getOptionLabel={(option) => {
            if (typeof option === 'string') {
                return option;
            }
            if (option.inputValue) {
                return option.inputValue;
            }
            return option.name;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(prps, option) => <li {...prps}>{option.name}</li>}
        sx={{ height: 500 }}
        freeSolo
        renderInput={(params) => <TextField {...params} title={params.name} label="Vacina" />}
    />
    )
}