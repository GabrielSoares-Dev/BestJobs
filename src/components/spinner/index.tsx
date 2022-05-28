import React from 'react';
import { CustomLoader } from './stylesui';
import { CustomOverlay } from './styles';

const Spinner: React.FC = () => {

    return (
        <CustomOverlay>
            <CustomLoader size={75} />
        </CustomOverlay>
    )
}

export default Spinner;