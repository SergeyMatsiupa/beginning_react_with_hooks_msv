import logo from './logo.svg';
import './App.css';
import Products from './Products';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Rating from './Rating';
import JumbotronComponent from './Jumbotron';
import UserForm from './UserForm';
import GitHub from './GitHub';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName:'Greg',
  lastName:'Lim',
  imageUrl:'https://picsum.photos/200/300'
};

function ProductsL() {
  const products = ["Learning React","Pro React","Beginning React"];
  const listProducts = products.map((product) =>
  <li key={product.toString()}>{product}</li>
  );
  return (
    <div>
      <ul>{listProducts}</ul>
    </div>
  );
}



// function App() {
//   return (
//     <div>
//       <h1>
//         Learn React Hooks
//       </h1>
//       <Products/>
//       <h3>
//         Hello, {formatName(user)}
//       </h3>
//       <img src={user.imageUrl}></img>
//       <ProductsL/>
//     </div>
//   );
// }

class App extends Component {
  render() {
    const isValid = true;
    return (
      <div>
        <GitHub />
        <UserForm />
        <JumbotronComponent />
        <hr />
        <ProductsL />
        <Button variant="danger">Default</Button>
        <Button variant="primary" disabled >Default</Button>
        <div>
          <Button variant="danger" disabled={!isValid} >isValid?</Button>
        </div>
        <hr/>
        <Rating rating="4"/>
        <hr />
        <Products />

      </div>
    );
    }
  }

export default App;
