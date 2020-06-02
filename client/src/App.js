import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import { TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '김은덕1',
    'age': '10대',
    'job': '중학생',
    'city': '서울'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김은덕2',
    'age': '20대',
    'job': '입사자',
    'city': '서울'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '김은덕3',
    'age': '30대',
    'job': '직장인',
    'city': '서울'
  }
];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>나이</TableCell>
              <TableCell>직업</TableCell>
              <TableCell>지역</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {
              return <Customer key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                age={c.age}
                job={c.job}
                citu={c.city}
              />
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
