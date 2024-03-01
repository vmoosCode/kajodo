import React, { useEffect } from "react";
import { Box, OutlinedInput, Typography } from "@mui/material";
import { useField, useFormikContext } from "formik";
const TextInput = ({
    name,
    dependantvalue,
    label,
    andorment,
    handleshowform,
    ...otherProps
}) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    useEffect(() => {
        if (
            dependantvalue
            // dependantvalue !== "" ||
            // dependantvalue !== undefined ||
            // dependantvalue !== null
        ) {
            setFieldValue(name, dependantvalue);
        }
    }, [name, dependantvalue, setFieldValue]);

    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        autoComplete: 'off',
        variant: "outlined",


    };

    if (meta && meta.touched && meta.error) {
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }

    return (
        <Box sx={{}}>
            {(label !== "" || label !== undefined) && (
                <Typography variant="label" color="inherit">
                    {label}
                </Typography>
            )}

            <OutlinedInput
                onFocus={() => handleshowform(true)}

                {...configTextfield}

            />
        </Box>
    );
};

export default TextInput;