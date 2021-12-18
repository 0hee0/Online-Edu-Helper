import React from 'react';
import { FormGroup, FormControlLabel, FormControl, FormLabel, Checkbox } from '@mui/material';


function MaterialCheckbox({ checkedMaterial, handleCheckboxChange }) {
    return (
        <div>
            <FormControl component="fieldset" variant="standard">
                <FormLabel component="legend">준비물 선택</FormLabel>
                <FormGroup row>
                    <FormControlLabel
                    control={
                        <Checkbox checked={checkedMaterial.book} onChange={handleCheckboxChange} name="book" />
                    }
                    label="책"
                    />
                    <FormControlLabel
                    control={
                        <Checkbox checked={checkedMaterial.pen} onChange={handleCheckboxChange} name="pen" />
                    }
                    label="필기도구"
                    />
                    <FormControlLabel
                    control={
                        <Checkbox checked={checkedMaterial.scissors} onChange={handleCheckboxChange} name="scissors" />
                    }
                    label="가위"
                    />
                    <FormControlLabel
                    control={
                        <Checkbox checked={checkedMaterial.glue} onChange={handleCheckboxChange} name="glue" />
                    }
                    label="풀"
                    />
                    <FormControlLabel
                    control={
                        <Checkbox checked={checkedMaterial.ruler} onChange={handleCheckboxChange} name="ruler" />
                    }
                    label="자"
                    />
                    <FormControlLabel
                    control={
                        <Checkbox checked={checkedMaterial.ocarina} onChange={handleCheckboxChange} name="ocarina" />
                    }
                    label="오카리나"
                    />
                    <FormControlLabel
                    control={
                        <Checkbox checked={checkedMaterial.recorder} onChange={handleCheckboxChange} name="recorder" />
                    }
                    label="리코더"
                    />
                </FormGroup>
            </FormControl>
        </div>
    )
}

export default MaterialCheckbox
