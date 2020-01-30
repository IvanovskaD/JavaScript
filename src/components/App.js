import React from 'react';
import {Welcome} from './Welcome';
import {Hotel} from './Hotel';
import {User} from './User';
import {FruitList} from './FruitList';

export class App extends React.Component{

  render(){

    var godiniFilip = 25;
    var godiniPero = 18;
    var hasVacancy = false;
    var adress = {
      ulica: "vodnjanska",
      broj: "12"
    }
    var user = {
      ime:"Dragana",
      prezime: "Ivanovska",
      email: "ivanovskadragana.94@gmail.com",
      image: "https://i.pinimg.com/originals/0e/1e/8a/0e1e8ace2d78fe052f607aae724720e7.jpg",
      address: adress

    }

    var fruits = ["orange", "peach", "apple", "banana", "strawberry"]

    return(
      <div>
      <h2>Welcome</h2>
      <Welcome name={"Filip"} age={godiniFilip}/>
      <Welcome name={"Filip"} age={godiniPero}/>
      <hr/>
      <Hotel imaSobi= {hasVacancy}/>
      <br/>
      <br/>
      <User korisnik={user}/>
      <hr/>
      <FruitList list={fruits}/>
      </div>
    )
  }

}