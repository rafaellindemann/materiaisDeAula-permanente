import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
  CardActions,
  TextField,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            MUI Demo
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: 20 }}>
        <Grid container spacing={3}>
          {/* Form Inputs */}
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: 16 }}>
              <Typography variant="h5" gutterBottom>
                Form Components
              </Typography>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Subscribe"
              />
              <FormControl component="fieldset" margin="normal">
                <RadioGroup row defaultValue="female" name="gender">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <FormControlLabel
                control={<Switch />}
                label="Enable notifications"
                margin="normal"
              />
              <Slider
                defaultValue={30}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={10}
                max={110}
                style={{ marginTop: 16 }}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select labelId="demo-simple-select-label" label="Age">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </Grid>

          {/* Cards */}
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: 16 }}>
              <Typography variant="h5" gutterBottom>
                Card Component
              </Typography>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Card Title
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    This is an example of a MUI Card component. You can place
                    any content inside a card, including text, images, and
                    actions.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>

          {/* Grid and Buttons */}
          <Grid item xs={12}>
            <Paper style={{ padding: 16 }}>
              <Typography variant="h5" gutterBottom>
                Grid and Buttons
              </Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Primary
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Secondary
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Outlined
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="text" color="primary">
                    Text
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Table */}
          <Grid item xs={12}>
            <Paper style={{ padding: 16 }}>
              <Typography variant="h5" gutterBottom>
                Table Component
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Age</TableCell>
                      <TableCell align="right">Country</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { name: 'John Doe', age: 25, country: 'USA' },
                      { name: 'Jane Smith', age: 30, country: 'UK' },
                      { name: 'Paul Walker', age: 35, country: 'Canada' },
                    ].map((row, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.age}</TableCell>
                        <TableCell align="right">{row.country}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
