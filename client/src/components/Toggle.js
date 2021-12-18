import React from 'react';
import { Stack, Tooltip, FormGroup, FormControlLabel, Switch } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Toggle({ switchControl, handleSwitchChange }) {
    return (
        <div>
            <Stack direction='row' justifyContent='space-between' alignItems='center' pt={8}>
                <FormGroup row>
                <Tooltip title="얼굴을 인식합니다.">
                    <FormControlLabel 
                    control={<Switch checked={switchControl.attendance} onChange={handleSwitchChange} name="attendance" />} 
                    label="출석" 
                    />
                </Tooltip>
                <Tooltip title="준비물을 인식하며, 하단에서 종류 선택이 가능합니다.">
                    <FormControlLabel 
                    control={<Switch checked={switchControl.material} onChange={handleSwitchChange} name="material" />} 
                    label="준비물" 
                    />
                </Tooltip>
                <Tooltip title="휴대폰을 인식합니다.">
                    <FormControlLabel 
                    control={<Switch checked={switchControl.focus} onChange={handleSwitchChange} name="focus" />} 
                    label="집중" 
                    />
                </Tooltip>
                </FormGroup>

                <Tooltip title="스위치를 키면 인식을 하고, 인식되지 않는 학생이 우측에 표시됩니다. 스위치는 여러 개를 한꺼번에 킬 수 있습니다.">
                <HelpOutlineIcon />
                </Tooltip>
            </Stack> 
        </div>
    )
}

export default Toggle
