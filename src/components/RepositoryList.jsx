import { RepositoryItem } from "./RepositoryItem";

//const abaixo passa as informações para o atributo dos componente

const Repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            //Repository="unform1"(atributo enviado para dentro do componente RepositoryItem)

            <ul>
                <RepositoryItem Repository= {Repository} />
                <RepositoryItem Repository= {Repository}/>
                <RepositoryItem Repository= {Repository}/>
                <RepositoryItem Repository= {Repository}/>
                <RepositoryItem Repository= {Repository}/>
            </ul>
        </section>
    );
}