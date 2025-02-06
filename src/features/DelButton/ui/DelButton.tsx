import Button from "../../../shared/Button/ui/Button.tsx";
import {SeminarId} from "../../../entities/SeminarList/api/types.ts";

interface DelButtonProps {
    id: SeminarId;
    handleDeleteClick: (id: SeminarId) => void;
}

export const DelButton = ({id, handleDeleteClick}: DelButtonProps) => {
    const deleteHandler = () => {
        handleDeleteClick(id);
    };
    return (
        <Button
            variant="contained"
            color={"error"}
            onClick={deleteHandler}
        >Delete</Button>
    );
};