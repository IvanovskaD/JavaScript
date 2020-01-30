import React from 'react';

export class FruitList extends React.Component {

    render(){
        console.log(this.props);

        return(
            <div>
                {this.props.list.map((row,i)=>(
                    
                <li key={i}>{row}</li>
                )
                
                )}

            </div>
        )
    }
}