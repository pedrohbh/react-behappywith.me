import React from 'react';
import Input from '../Input';
import Label from '../Label';


class NovoUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: {
                nome: ''
            },
            validacao: {
                nomeInvalido: false
            }
        };
    }

    atualizarNome(e) {
        let usuario = this.state.usuario;
        usuario.nome = e.target.value;
        this.setState({
            usuario: usuario
        });
    }


    render() {
        return (
            <div className="center">
                <form className="pure-form pure-form-stacked">
                    <Label
                        htmlFor="nome"
                        texto="Quem é você?"
                        valorInvalido={this.state.nomeInvalido}
                    />
                    <Input
                        id="nome"
                        placeholder="Digite seu nome"
                        maxLength="40"
                        readOnly={false}
                        valorInvalido={this.state.nomeInvalido}
                        defaultValue={this.state.usuario.nome}
                        onChange={this.atualizarNome.bind(this)}
                    />
                </form>
            </div>
        );
    }
}

export default NovoUsuario;