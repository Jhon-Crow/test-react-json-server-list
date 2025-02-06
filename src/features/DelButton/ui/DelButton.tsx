import Button from "../../../shared/Button/ui/Button.tsx";

export const DelButton = () => {
    return (
        <Button
            variant="contained"
            color={"error"}
            onClick={() => console.log('click')}
        >Delete</Button>
    );
};