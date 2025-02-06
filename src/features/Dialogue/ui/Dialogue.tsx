import Button from "../../../shared/Button/ui/Button.tsx";
import Dialog from '@mui/material/Dialog';
import { useCallback, memo, JSX } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

interface ModalProps {
    header: string | JSX.Element;
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
    onAcceptCallback?: () => void;
    hideButtons?: boolean;
}

const Dialogue = memo((props: ModalProps) => {
    const { isOpen, setIsOpen, onAcceptCallback, header, hideButtons } = props;

    const closeDialogue = useCallback(() => setIsOpen(false), [setIsOpen]);

    const onClickHandler = useCallback(() => {
        if (onAcceptCallback) onAcceptCallback();
        closeDialogue();
    }, [onAcceptCallback, closeDialogue]);

    return (
        <Dialog
            onClose={closeDialogue}
            open={isOpen}
            maxWidth="xs"
            fullWidth={true}
        >
            {header && <DialogTitle fontSize="large">{header}</DialogTitle>}
            <DialogActions>
                {!hideButtons && (
                    <>
                        <Button
                            size="medium"
                            variant='contained'
                            color="success"
                            onClick={onClickHandler}
                        >
                            ok
                        </Button>
                        <Button
                            size="medium"
                            variant="outlined"
                            color="error"
                            onClick={closeDialogue}
                        >
                            cancel
                        </Button>
                    </>
                )}
            </DialogActions>
        </Dialog>
    );
});

export default Dialogue;
