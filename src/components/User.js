import React from 'react';

export class User extends React.Component{

    render(){
        console.log(this.props);
        return(
                <div>
               <div id="name">
                    <h3>{this.props.korisnik.ime}</h3>
                </div> 

                <div id="prezime">
                   <h3>{this.props.korisnik.prezime}</h3>
                </div> 

                <div id="email">
                   <p>{this.props.korisnik.email}</p>
                </div> 

                <div id="email">
                   <img src= {this.props.korisnik.image}/>
                </div> 

                
                <div id="adresa">
                   <p>{this.props.korisnik.address.ulica}</p>
                   <p>{this.props.korisnik.address.broj}</p>
                </div> 

            </div>
        )
    }
} 