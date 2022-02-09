function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="gallery__element">
            <div className="gallery__photo-wrapper">
                <img
                    src={props.card.link}
                    alt={props.card.name}
                    className="gallery__photo"
                    onClick={handleClick}
                />
            </div>
            <h2 className="gallery__figcaption">{props.card.name}</h2>
            <div className="gallery__like-container">
                <button
                    type="button"
                    className="gallery__like page__hover page__hover_shade_super-dark"
                    aria-label
                ></button>
                <p className="gallery__like-count">{props.card.likes.length}</p>
            </div>
            <button
                type="button"
                className="gallery__trash page__hover page__hover_shade_super-dark"
                aria-label
            ></button>
        </li>
    );
}

export default Card;
