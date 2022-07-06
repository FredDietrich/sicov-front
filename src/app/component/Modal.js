import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function Modal(props) {
    return (
        <Dialog open={props.open} onClose={props.handleModalClose}>
            <form onSubmit={props.handleModalSubmit}>
                <DialogTitle>{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {props.helperText}
                    </DialogContentText>
                    {props.children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleModalClose}>{props.cancel}</Button>
                    <Button type="submit">{props.accept}</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}