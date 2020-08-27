import React from 'react'
import {createMuiTheme} from '@material-ui/core/styles'
import {red,green} from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"

export default createMuiTheme({
    palette:{
        common:{
            arcBlue:`${arcBlue}`,
            arcOrange:`${arcOrange}`
        },
        type:"light",
        primary:{
            main:`${arcBlue}`
        },
        secondary:{
            main:red[500]
        },
        success:{
            main:green[900]
        },
        typography:{
            tab:{
                fontFamily:"Raleway",
                textTransform:"none",
                fontWeight:700,
                fontSize:"1rem",
            },
          
        }
    },
    
})

// =======================================================>custom color
export const customStyles = makeStyles((theme) => ({
    successColor: {
        color: theme.palette.getContrastText(theme.palette.success.main),
        background: theme.palette.success.main,
        marginRight:'15px',
        '&:hover':{
            color: theme.palette.getContrastText(theme.palette.success.main),
            background: theme.palette.success.main,
        }
    }
    
  }))

//   =============================================================>Custom Tooltip
const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
      fontSize:'13px'
    },
  }));
  
export const CustomTooltip =(props)=> {
    const classes = useStylesBootstrap();
    return <Tooltip arrow classes={classes} {...props} />;
  }