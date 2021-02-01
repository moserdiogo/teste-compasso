/**
 * Busca de usuários usando a API do GitHub
 * @author Moser Diogo
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Result from './result';

const UserSearch = () => {

    // Definições de variáveis
    const [searchInput, setSearchInput] = useState('');
    const [userData, setUserData] = useState([]);
    const [showResult, setShowResult] = useState(false);

    // Método executado ao submeter o formulário
    const handleSubmit = e => {

        // Previne ação padrão do formulário
        e.preventDefault();

        // Esconde o resultado
        setShowResult(false);

        // Simples validação para garantir que a requisição seja feita com o nome do usuário
        if(searchInput === '') {
            alert('Informe o nome do usuário');
            return false;
        }

        // Requisição para busca de usuário da API do GitHub
        axios.get('https://api.github.com/users/' + searchInput)
          .then(function (response) {

            // Atribui o resultado da requisição a variável userData
            setUserData(response.data);

          })
          .catch(function (error) {

            alert('Usuário não encontrado, tente novamente')
          })
          .then(function () {
              
          });
    }

    // Mostra o resultado a cada vez que for feita uma requisição e a variável userData mudar de estado
    useEffect(() => {
        if(Object.keys(userData).length > 0) {
            
            // Mostra o resultado
            setShowResult(true);
        }
    }, [userData]);

    return (
        <>
        <div className="container">
            <div className="py-1 text-center">
                <img src="./images/compasso.png" alt="Compasso Uol" />
                
                <div className="row justify-content-md-center">
                    <div className="col-md-8 col-sm-12">
                        <form onSubmit={handleSubmit} name="git-search" autoComplete="on">
                            <div className="">
                                <input onChange={e => setSearchInput(e.target.value)} type="text" className="form-control" placeholder="Digite o nome do usuário"/>
                                <button className="btn btn-primary mt-2" type="submit">Buscar</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row mt-5">

                    { showResult && <Result userData={userData} /> }
                    
                </div>
                <Result/>
            </div>
        </div>
            
        </>
    )
}

export default UserSearch