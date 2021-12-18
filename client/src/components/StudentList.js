import React from 'react';
import { Typography, Box, 
    List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar } from '@mui/material';


function StudentList({ switchControl, students }) {
    return (
        <div>
            <Box sx={{ bgcolor: 'primary.main', mx: '16px', py: '4px', borderRadius: '0.5rem' }}>
                <Typography sx={{ px: '16px', fontWeight: 700, color: 'white' }}>검출된 학생 목록</Typography>
            </Box>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {students.map((student, index) =>
                <>
                    <ListItem key={student.id} alignItems="flex-start">
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
                                {switchControl.attendance===true &&
                                    student.attendance===false &&
                                    <div>❌ 미출석</div>
                                }
                                {switchControl.focus===true &&
                                    student.focus===false &&
                                    <div>📱 휴대폰 감지</div>
                                }
                                {switchControl.material===true &&
                                    student.material.length > 0 &&
                                        <div>📌&nbsp;
                                            {student.material.map((item, index) => 
                                                <strong>{item}&nbsp;</strong>
                                            )} 
                                         미지참</div>
                                }
                            </Typography>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" zcomponent="li" />
                </>
                )}
            </List>
        </div>
    )
}

export default StudentList
