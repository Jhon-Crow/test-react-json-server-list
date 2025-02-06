import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import {SeminarId, SeminarType} from "../../SeminarList/api/types.ts";
import {DelButton} from "../../../features/DelButton/ui/DelButton.tsx";
import {EditButton} from "../../../features/EditButton/ui/EditButton.tsx";

interface SeminarCardProps {
    item: SeminarType;
    handleDeleteClick?: (id: SeminarId) => void;
    handleEditClick?: (item: SeminarType) => void;
}

export const SeminarCard = ({item, handleDeleteClick, handleEditClick}: SeminarCardProps) => {
    return (
        <Card variant="outlined" sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={item.photo}
                alt={item.title}
            />
            <CardContent>
                {handleEditClick ? null : <Typography variant="body2" color="text.secondary">
                    {item.photo}
                </Typography>}
                <Typography variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Дата: {item.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Время: {item.time}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                    {handleEditClick && <EditButton item={item} handleEdit={handleEditClick}/>}
                    {handleDeleteClick && <DelButton handleDeleteClick={handleDeleteClick} id={item.id}/>}
                </Box>
            </CardContent>
        </Card>
    );
};
