import Button from "../../../shared/Button/ui/Button.tsx";
import {SeminarType} from "../../../entities/SeminarList/api/types.ts";

interface EditButtonProps {
    item: SeminarType;
    handleEdit: (item: SeminarType) => void;
}

export const EditButton = ({item, handleEdit}: EditButtonProps) => {
    const editHandler = () => {
        handleEdit(item);
    };
    return (
        <Button
            variant="contained"
            color={"inherit"}
            onClick={editHandler}
        >Edit</Button>
    );
};