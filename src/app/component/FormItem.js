import Box from "@mui/material/Box";

function FormItem(props) {

    return (
        <Box sx={[{padding: 1, display: 'flex'}, props.sx]} justifyContent={props.justifyContent}>
            {props.children}
        </Box>
    )
    
}

export default FormItem;