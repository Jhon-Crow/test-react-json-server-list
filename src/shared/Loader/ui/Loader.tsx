import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface LoaderProps {
    isLoading: boolean;
}

export const Loader = ({ isLoading }: LoaderProps) => {
    if (!isLoading) return null;

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
        </Box>
    );
};
