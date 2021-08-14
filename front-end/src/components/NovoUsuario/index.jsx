import React from 'react';
import Label from '../Label';


class NovoUsuario extends React.Component {
    render() {
        return (
            <div className="center">
                <form className="pure-form pure-form-stacked">
                    <Label htmlFor="nome" texto="Quem é você?" valorInvalido />
                </form>
            </div>
        );
    }
}

export default NovoUsuario;