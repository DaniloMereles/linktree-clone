// styles
import "./LinkCard.css"

export const LinkCard = ({path, title, iconClass, description, bg}) => {
    return (
        <a href={path} target="__blank" className={`link ${bg}`}>
            <div className="link__data">
                <i className={`bx ${iconClass} link__ico`}></i>
                
                <div className="link__text">
                    <h3 className="link__title">
                        {title}
                    </h3>

                    <p className="link__description">
                        {description}
                    </p>
                </div>
            </div>

            <i className='bx bx-link-external link__ico'></i>
        </a>
    )
}

LinkCard.defaultProps = {
    path: "/",
    title: 'Portfolio',
    iconClass: 'bxs-briefcase',
    description: 'This is my frontend web developer portfolio'
}