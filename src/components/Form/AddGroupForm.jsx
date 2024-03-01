import { Box, IconButton, Tooltip, Button } from '@mui/material'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import TextInput from './TextInput'
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import SubmitBtn from '../../components/Form/SubmitBtn'
import AddIcon from '@mui/icons-material/Add';
import MenuWrapper from '../dataView/MenuWrapper'
import { motion } from 'framer-motion';
function AddGroupForm() {
    const [showForm, setShowForm] = useState(false)
    const handleShowFormEl = (v) => {
        setShowForm(v)
    }
    const initialValues = {
        name: '',
        color_id: "",
        priority_id: ""
    }
    const colors = [
        "#5013ff",
        "#f0494f",
        "#88e310",
        "#ffbe03",
        "#edf122",
        "#00e2fb"
    ]
    const priorities = [
        "Critical",
        "Major",
        "Minor"
    ]

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
                handleShowFormEl(false)
                console.log(values)
                // do your stuff 
                resetForm();

            }}
            resetForm
        >
            {({ values, errors, isSubmitting, isValid }) => (
                <Form>
                    <Box sx={{ width: "100%", }}>
                        {
                            showForm &&
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "100%" }}
                                transition={{ transition: 1, delay: 4 }}
                            >
                                <Box sx={{
                                    width: "100%", minHeight: "60px",
                                    borderTop: "2px solid", borderLeft: "2px solid", borderRight: "2px solid",
                                    borderColor: "primary.main", borderTopLeftRadius: "15px", borderTopRightRadius: "15px",
                                    display: "flex", justifyContent: "space-around", gap: 1, alignItems: "center"
                                }}>
                                    <Box sx={{ borderRight: "1px solid", borderColor: "primary.light", width: "100%", textAlign: "center" }}>
                                        <MenuWrapper name="color_id" items={colors} tooltipLabel="Color" btnName={<FormatColorFillIcon color='inherit' />} colors={true} />
                                    </Box>
                                    <Box sx={{ width: "100%", textAlign: "center" }}>
                                        <MenuWrapper name="priority_id" items={priorities} tooltipLabel="Priority" btnName={<LowPriorityIcon />} />
                                    </Box>
                                </Box>
                            </motion.div>
                        }
                        <TextInput placeholder="+ Add Group" name="name" handleshowform={handleShowFormEl} />
                        {
                            showForm &&
                            <Box sx={{ display: "flex", width: "100%", mt: 1 }}>
                                <SubmitBtn fullWidth={true} >
                                    <AddIcon />
                                </SubmitBtn>
                            </Box>
                        }
                    </Box>
                </Form>
            )
            }
        </Formik >
    )
}

export default AddGroupForm