import React, { Component } from 'react';
import Amount from './components/Amount';
import './App.css';import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

class App extends Component {
  state = {
    amounts: '',
    completed: 0
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({amounts:res}))
    .catch(err => console.log(err));
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  callApi = async () => {
    const response = await fetch('/api/amounts');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>날짜</TableCell>
              <TableCell>카테고리</TableCell>
              <TableCell>내역</TableCell>
              <TableCell>금액</TableCell>
              <TableCell>수정</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.state.amounts ?
          this.state.amounts.map(c => {
          return <Amount key={c.id} id={c.id} createdAt={c.createdAt} category={c.category} content={c.content} amount={c.amount} />
          }) :
          <TableRow>
            <TableCell colSpan="6" align="center">
              <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
            </TableCell>
          </TableRow>
          }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);