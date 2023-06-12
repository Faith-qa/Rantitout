import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography, { TypographyClasses } from '@mui/material/Typography';
import { createTheme, SxProps, Theme, ThemeProvider } from '@mui/material/styles';

import { useLogin } from '../hooks/useLogin';
import { useNavigate, } from 'react-router-dom'
import { CommonProps } from '@mui/material/OverridableComponent';
import { SystemProps } from '@mui/system';
import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';
import Home from './Home';
function Copyright(props: JSX.IntrinsicAttributes & { component: React.ElementType<any>; } & SystemProps<Theme> & { align?: "right" | "left" | "center" | "inherit" | "justify" | undefined; children?: React.ReactNode; classes?: Partial<TypographyClasses> | undefined; gutterBottom?: boolean | undefined; noWrap?: boolean | undefined; paragraph?: boolean | undefined; sx?: SxProps<Theme> | undefined; variant?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | undefined; variantMapping?: Partial<Record<"button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline", string>> | undefined; } & CommonProps & Omit<any, keyof CommonProps | ("border" | "borderTop" | "borderRight" | "borderBottom" | "borderLeft" | "borderColor" | "borderRadius" | "display" | "displayPrint" | "overflow" | "textOverflow" | "visibility" | "whiteSpace" | "flexBasis" | "flexDirection" | "flexWrap" | "justifyContent" | "alignItems" | "alignContent" | "order" | "flex" | "flexGrow" | "flexShrink" | "alignSelf" | "justifyItems" | "justifySelf" | "gap" | "columnGap" | "rowGap" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "bgcolor" | "color" | "zIndex" | "position" | "top" | "right" | "bottom" | "left" | "boxShadow" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "boxSizing" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginX" | "marginY" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingX" | "paddingY" | "typography" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textTransform") | "children" | "sx" | "align" | "variant" | "gutterBottom" | "noWrap" | "paragraph" | "variantMapping">) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        RantitOut
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
    const {login, error, } = useLogin()
   // const navigate = useNavigate()
   const [isLoggedIn, setIsLoggedIn] = useState(false);



  const handleSubmit = async(event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const email = data.get('email')
    const password = data.get('password')
    try{
        await login(email, password)
        setIsLoggedIn(true);

        
      }catch(err){
        console.log(error)
      }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Welcome to Rant It Out
            </Typography>
            {isLoggedIn ? <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/*<Link href="#" variant="body2">
                    Forgot password?
          </Link>*/}
                </Grid>
                <Grid item>
                 {/* <Link to="/signup" >
                    {"Don't have an account? Sign Up"}
        </Link>*/}
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} component={'symbol'} />
            </Box> : < Home/>}
          </Box> 
            
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}