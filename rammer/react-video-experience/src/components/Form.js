
import React, {useState}  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




export default function Form(props) {
  const classes = useStyles();

  const request = require('request');

const [appId, setAppId] = useState(null)
const [appSecret, setAppSecret] = useState(null)

// const generateToken = function(){

// console.log("hello")}

  const handleIdChange = function(e) {
    setAppId(e.target.value);
    console.log(appId)

 }

 const handleSecretChange = function(e) {
    setAppSecret(e.target.value);
    console.log(appSecret)
 }
 
 const generateToken = function(appId, appSecret) {
    const authOptions = {
      method: 'post',
      url: "https://api.symbl.ai/oauth2/token:generate",
      body: {
          type: "application",
          appId: appId,
          appSecret: appSecret
      },
      json: true
    };
   
    request(authOptions, (err, res, body) => {
      if (err) {
        console.error('error posting json: ', err);
        alert(err)
        throw err
      }
   
      console.log(JSON.stringify(body, null, 2));
    });
   }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Credentials 
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="appId"
            label="App ID"
            name="App ID"
            autoFocus
            onChange={handleIdChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="App Secret ID"
            label="App Secret ID"
            type="password"
            id="appSecret"
            autoComplete="current-password"
            onChange={handleSecretChange}

          />
    
          <Button
            onClick={generateToken}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="https://platform.symbl.ai/" variant="body2">
                Find or create your App IDs here!
              </Link>
              <br/>
            </Grid>
          </Grid>
          <TextField id="Token">

          </TextField>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}