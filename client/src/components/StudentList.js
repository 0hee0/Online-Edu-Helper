import React from 'react';
import { Typography, Box, CircularProgress,
    List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar } from '@mui/material';


function StudentList(props) {
    const students = [
        { "id": 21, "name": "이도연", "attendance": true, "focus": true, "material": ["풀"] },
        { "id": 31, "name": "눈송이", "attendance": false, "focus": false, "material": ["풀"] },
    ]

    return (
        <div>
            <Box sx={{ bgcolor: 'primary.main', mx: '16px', py: '4px', borderRadius: '0.5rem' }}>
                <Typography sx={{ textAlign: 'center', px: '16px', fontWeight: 700, color: 'white' }}>검출된 학생 목록</Typography>
            </Box>
            {!props.loading ? (
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {props.student?.name && (
                (props.switchControl.attendance===true && props.student.attendance===false)
                || (props.switchControl.focus===true && props.student.focus===false)
                || (props.switchControl.material===true && props.student.material?.length > 0)) && (
                    <ListItem key={props.student.id} alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt={props.student.name} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary={props.student.name}
                        secondary={
                            <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            >
                                {props.switchControl.attendance===true &&
                                    props.student.attendance===false &&
                                    <div>❌ 미출석</div>
                                }
                                {props.switchControl.focus===true &&
                                    props.student.focus===false &&
                                    <div>📱 휴대폰 감지</div>
                                }
                                {props.switchControl.material===true &&
                                    props.student.material?.length > 0 &&
                                        <div>📌&nbsp;
                                            {props.student.material?.map((item, index) => 
                                                <strong key={index}>{item}&nbsp;</strong>
                                            )} 
                                            미지참</div>
                                }
                            </Typography>
                        }
                        />
                    </ListItem>
                )}
                {students?.map((student, index) =>
                    ((props.switchControl.attendance===true && student.attendance===false)
                        || (props.switchControl.focus===true && student.focus===false)
                        || (props.switchControl.material===true && student.material?.length > 0)) && (
                            <div key={student.id}>
                                <Divider variant="inset" zcomponent="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                    <Avatar alt={student.name} src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary={student.name}
                                    secondary={
                                        <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                        >
                                            {props.switchControl.attendance===true &&
                                                student.attendance===false &&
                                                <div>❌ 미출석</div>
                                            }
                                            {props.switchControl.focus===true &&
                                                student.focus===false &&
                                                <div>📱 휴대폰 감지</div>
                                            }
                                            {props.switchControl.material===true &&
                                                student.material?.length > 0 &&
                                                    <div>📌&nbsp;
                                                        {student.material?.map((item, index) => 
                                                            <strong key={index}>{item}&nbsp;</strong>
                                                        )} 
                                                    미지참</div>
                                            }
                                        </Typography>
                                    }
                                    />
                                </ListItem>
                            </div>
                    )
                )}
                </List>
            ) : (
                <Box>
                    <Box sx={{ pt: '4rem', pb: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CircularProgress />
                    </Box>
                    <Typography variant='body2' textAlign='center' color="gray">검출까지 10초 정도 소요됩니다.</Typography>
                </Box>
            )}                   
        </div>
    )
}

export default StudentList
