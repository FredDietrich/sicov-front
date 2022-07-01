import Close from "@mui/icons-material/Close";
import { Alert, Collapse, IconButton } from "@mui/material";

export default function Error(props) {

    return (
        <Collapse in={!!props.error}>
            <Alert severity="error" action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        props.setError("");
                    }}
                >
                    <Close fontSize="inherit" />
                </IconButton>}
            >
                {props.error}
            </Alert>
        </Collapse>
    )

}