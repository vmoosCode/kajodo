import React from 'react';

import { Button } from '@mui/material';
import { useFormikContext } from 'formik';

const SubmitBtn = ({
    children,
    ...otherProps
}) => {
    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const configButton = {
        ...otherProps,
        variant: 'contained',
        color: 'primary',
        onClick: () => handleSubmit(),

    }

    return (
        <Button
            {...configButton}
            sx={{ borderRadius: "15px" }}
        >
            {children}
        </Button>
    );
};

export default SubmitBtn;
