import React from 'react';

export class Welcome extends React.Component {

    render(){

        console.log(this.props)

        return(

        <h3>Hello this is {this.props.name}. I am {this.props.age} years old.</h3>
        )
    }
}