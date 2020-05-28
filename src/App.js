import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

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

class App extends Component{
  render() {
    return (
      <div>
        {customers.map(c => {
          return <Customer
          id={c.id}
          image={c.image}
          name={c.name}
          age={c.age}
          job={c.job}
          citu={c.city}
          />
        })}
      </div>
    );
  }
}

export default App;
