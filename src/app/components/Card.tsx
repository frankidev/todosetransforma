import "../assets/styles/page.card.scss";
const Card = ({name}: {name: string}) => {
    return (        
        <article className="card">
            <h3 className="h3">{name}</h3>
        </article>        
    )
}

export default Card;