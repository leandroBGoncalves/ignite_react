//props sempre vai ser o argumento onde o React armazena todos os atributos

export function RepositoryItem(props) {
    return (
        <li>
        <strong>{props.Repository.name ?? 'Default'}</strong>
        <p>{props.Repository.description}</p>

        <a href={props.Repository.link}>
            Acessar repositório
        </a>
    </li>
    );
}