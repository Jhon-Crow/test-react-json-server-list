import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {SeminarType} from "../../SeminarList/api/types.ts";
import {DelButton} from "../../../features/DelButton/ui/DelButton.tsx";

interface SeminarCardProps {
    item: SeminarType;
}

export const SeminarCard = ({item}: SeminarCardProps) => {
    return (
        <Card variant="outlined" sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={item.photo}
                alt={item.title}
            />
            <CardContent>
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
                <DelButton/>
            </CardContent>
        </Card>
    );
};
