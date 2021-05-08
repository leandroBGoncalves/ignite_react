import { useState, useEffect } from 'react';

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';


//const abaixo passa as informações para o atributo dos componente


/*const Repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}*/
 //Repository="unform1"(atributo enviado para dentro do componente RepositoryItem)

//===nunca deixar useeffect sem o segundo parametro, para que ele não entre em loop

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/leandroBGoncalves/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(Repository => {
                    return <RepositoryItem key={Repository.name} Repository= {Repository} />

                })}
            </ul>
        </section>
    );
}