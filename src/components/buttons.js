/**
 * Definição das ações dos botões de busca de repositórios
 * @author Moser Diogo
 */
import { React, useState } from 'react';
import axios from 'axios';
import Result from './result';

const Buttons = (props) => {

    const { userData } = props;
    const [repos, setRepos] = useState([]);
    const [showResult, setShowResult] = useState(false);

    //  Chamada a API do Github que busca os repositórios do usuário
    const handleRepos = () => {

        axios.get('https://api.github.com/users/' + userData.login + '/repos')
            .then(function (response) {
              
                setRepos(response.data);

                // Mostra o resultado
                setShowResult(true);
            })
        .catch(function (error) {

        })
        .then(function () {

        });
    }

    // Chamada a API do Github que busca os repositórios favoritados
    const handleStarred = () => {

        axios.get('https://api.github.com/users/' + userData.login + '/starred')
            .then(function (response) {
              
                setRepos(response.data);
                setShowResult(true);
            })
        .catch(function (error) {
            
        })
        .then(function () {

        });
    }

    return (
        
        <div className="col-md-6">
            <div className="row ">
                <div className="col-md-6 mt-1">
                    <button onClick={handleRepos} className="btn btn-primary btn-block"><b>Repositórios</b></button>
                </div>
                <div className="col-md-6 mt-1">
                    <button onClick={handleStarred} className="btn btn-primary btn-block"><b>Favoritados</b></button>
                </div>
            </div>

            <div className="mt-5">

                {/* Renderidação condicional dos resultados */}
                { showResult && <Result repos={repos} /> }
            </div>
        </div>
    )
}

export default Buttons;