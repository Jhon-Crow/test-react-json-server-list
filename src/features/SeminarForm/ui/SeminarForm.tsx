import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { SeminarType } from "../../../entities/SeminarList/api/types.ts";
import { updateSeminar } from "../../../entities/SeminarList/api/functions.ts";

interface SeminarFormProps {
    item: SeminarType;
    setIsOpen: (arg: boolean) => void;
    setNeedToRerender: (arg: boolean) => void;
}

export const SeminarForm = ({ item, setIsOpen, setNeedToRerender }: SeminarFormProps) => {
    const [formData, setFormData] = useState<SeminarType>({ ...item });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.title) newErrors.title = "Заголовок обязателен";
        if (formData.title.length === 0) newErrors.title = "Заголовок не может быть пустым";

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            await updateSeminar(formData);
            setIsOpen(false);
            setNeedToRerender(true);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 345, margin: 2 }}>
            <TextField
                fullWidth
                margin="normal"
                label="Заголовок"
                name="title"
                value={formData.title}
                onChange={handleChange}
                error={!!errors.title}
                helperText={errors.title}
            />
            <TextField
                fullWidth
                margin="normal"
                label="Описание"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />
            <TextField
                fullWidth
                margin="normal"
                label="Дата"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                error={!!errors.date}
                helperText={errors.date}
                slotProps={{
                    inputLabel: {
                        shrink: true,
                    },
                }}
            />
            <TextField
                fullWidth
                margin="normal"
                label="Время"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                error={!!errors.time}
                helperText={errors.time}
                slotProps={{
                    inputLabel: {
                        shrink: true,
                    },
                }}
            />
            <TextField
                fullWidth
                margin="normal"
                label="Фото"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                <Button type="submit" variant="contained" color="primary">
                    Сохранить
                </Button>
            </Box>
        </Box>
    );
};
