import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function VaccineModal(props) {
    return (
        <Dialog open={props.open} onClose={props.handleModalClose}>
            <form onSubmit={props.handleModalSubmit}>
                <DialogTitle>Adicionar nova vacina</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Não encontrou a vacina que precisa na lista? Insira uma nova agora mesmo!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleModalClose}>Cancelar</Button>
                    <Button type="submit">Adicionar</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}