import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import Toggle from '../components/Toggle';
import StudentList from '../components/StudentList';
import MaterialCheckbox from '../components/MaterialCheckbox';

// const apiURL = "127.0.0.1:5000";
const apiURL = 'http://172.30.1.15:4040/api';

function OnlineEduHelper() {
    // attendance: face    material: book, glue, scissors, ocarina, recorder, pen, ruler    focus: (face & )phone
    const [switchControl, setSwitchControl] = useState({ "attendance": true, "focus": false, "material": false });
    const [checkedMaterial, setCheckedMaterial] = useState([]);
    // TEST
    /*
    const [students, setStudents] = useState([
        { "id": 1, "name": "김철수", "attendance": false, "focus": false, "material": ["가위", "풀"] },
        { "id": 2, "name": "이영희", "attendance": true, "focus": true, "material": ["풀"] },
        { "id": 3, "name": "눈송이", "attendance": true, "focus": true, "material": ["자"] }
    ])
    */
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudentList();    
    }, [switchControl, checkedMaterial])

    function getStudentList() {
        let data = {
            "attendance": switchControl.attendance,
            "focus": switchControl.focus,
            "material": checkedMaterial
        }
        console.log(data);

        fetch(`${apiURL}/process`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        }).then(res => {
        if (res.status !== 200) {
            throw new Error(res.statusText);
        }
        return res.json();
        }).then(data => {
            console.log("res!")
            console.log(data);
            return setStudents(data);
        })
    };

    const handleSwitchChange = (event) => {
        setSwitchControl({ ...switchControl, [event.target.name]: event.target.checked })
    }
    
    const handleCheckboxChange = (event) => {
        let array = [...checkedMaterial];
        let index = Object.values(array).indexOf(event.target.name);
        if (index===-1) {
            setCheckedMaterial([...checkedMaterial, event.target.name]);
        }
        else {
            array.splice(index, 1);
            setCheckedMaterial(array);
        }
    }

    return (
        <Container maxWidth='md' sx={{ py: '4rem' }}>
        
        <Typography variant='h3' textAlign='center' gutterBottom sx={{ fontFamily: '배달의민족 주아', fontWeight: 700 }}>Online Edu Helper Demo</Typography>
        <Typography textAlign='center' sx={{ fontFamily: 'NanumSquare' }}>온라인 학습 보조 도구 데모</Typography>
        
        {/* toggle */}        
        <Toggle switchControl={switchControl} handleSwitchChange={handleSwitchChange} />
        
        <Grid container pt={6} pb={2} spacing={2}>
            <Grid item xs={8}>
            {/* webcam */}
            <Box width='100%' sx={{ border: '1px solid black', borderRadius: '0.5rem', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={`${apiURL}/video_feed`} width="400px" /> 
            </Box>
            </Grid>
            <Grid item xs={4}>
            {/* student list */}
            <Box width='100%' sx={{ border: '1px solid black', borderRadius: '0.5rem', height: '268px', py: '16px', overflowY: 'auto' }}>
                <StudentList switchControl={switchControl} student={students} />
            </Box>
            </Grid>
        </Grid>
        {/* 준비물 checkbox */}
        {switchControl.material &&
            <MaterialCheckbox checkedMaterial={checkedMaterial} handleCheckboxChange={handleCheckboxChange} />
        }
        </Container>
    );
}

export default OnlineEduHelper;
