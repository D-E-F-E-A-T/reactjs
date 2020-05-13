import React, { Component } from 'react';

class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
            </div>
        );
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <p> Fale jhow, sou o {this.props.nome} </p>
                <p> {this.props.cargo} </p>
                <p> {this.props.idade} </p>
            </div>
        )
    }
}

function App(){
    return(
        <div>
            <h1> Conheça nossa equipe: </h1>
            <Equipe nome="Marcelo" cargo="Programador" idade="32" />

        </div>
    );
}

export default App;