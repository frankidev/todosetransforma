import "../assets/styles/page.card.scss";
const Card = ({name, paragraph}: {name: string, paragraph: string}) => {
    return (        
        <article className="card">
            <h2 className="card-title">{name}</h2>
            <p className="card-paragraph">{paragraph}</p>
        </article>        
    )
}

export default Card;