import Grid from "@mui/material/Grid";

function FormItem(props) {

    return (
        <Grid item sx={[{padding: 1}, props.sx]}>
            {props.children}
        </Grid>
    )
    
}

export default FormItem;