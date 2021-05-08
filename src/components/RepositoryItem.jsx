//props sempre vai ser o argumento onde o React armazena todos os atributos

export function RepositoryItem(props) {
    return (
        <li>
        <strong>{props.Repository.name}</strong>
        <p>{props.Repository.description}</p>

        <a href={props.Repository.html_url}>
            Acessar repositório
        </a>
    </li>
    );
}