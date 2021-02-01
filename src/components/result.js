/**
 * Exibe os resultados dos repositórios do usuário e dos repositórios favoritados
 * @author Moser Diogo
 */
import React from 'react';
import Buttons from './buttons';

const Result = (props) =>  {

    const data = props.repos;
    const userData = props.userData;

    return (
        <>
            { userData &&
                <>
                    <div className="col-md-6">
                        <div className="card card-primary card-outline">
                            <div className="card-body box-profile">
                                <div className="text-center">
                                    <img src={userData.avatar_url} className="img-thumbnail" alt="Foto do usuário" width="150" height="150"/>
                                </div>
                                
                                <h3 className="profile-username text-center mt-3 mb-3">{userData.name}</h3>
                                
                                <ul className="list-group list-group-unbordered mb-3 mt-3 text-left">
                                    <li className="list-group-item">
                                        <b>Followers</b> <span className="float-right">{userData.followers}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <b>Following</b> <span className="float-right">{userData.following}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <b>Bio</b> <span className="float-right">{userData.bio}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <b>Empresa</b> <span className="float-right">{userData.company}</span>
                                    </li>
                                </ul>                            
                            </div>
                        </div>
                    </div>
                    
                    <Buttons userData={userData} />
                </>
            }

            {data &&
                <div className="">
                    <div className="order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Repositorios</span>
                            <span className="badge bg-secondary rounded-pill">{data && Object.keys(data).length}</span>
                        </h4>

                        <ul className="list-group mb-3">
                            {
                                data ? data.map(item => (
                                    <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">{item.name}</li>
                                )) : null
                            }
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}

export default Result;