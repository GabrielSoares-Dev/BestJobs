import React from 'react';
import { CustomLoader } from './stylesui';
import { CustomOverlay } from './styles';
import { useMediaQuery } from '@mui/material';

const Spinner: React.FC = () => {
    const match = useMediaQuery('(max-width:600px)');
    return (
        <CustomOverlay>
            <CustomLoader size={match ? 45 : 75} />
        </CustomOverlay>
    )
}

export default Spinner;