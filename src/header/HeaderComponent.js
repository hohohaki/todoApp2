import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import avatarImg from '../img/avatar.jpg';

const HeaderComponent = () => {
    return (
        <AppBar position="relative" classes ={{root:'custom-class'}}>
            <div className="header-content">
                <div>
                    <Typography variant="h2">Todo app</Typography>
                    <Typography variant="subtitle2" align="right">by Vlad</Typography>
                </div>
                <div>
                    <Avatar src={avatarImg} classes={{root: 'avatar'}}/>
                </div>
            </div>
        </AppBar>
    );
};

export default HeaderComponent;