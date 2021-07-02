// styles
import './Profile.css'

// img
import py from '../../img/py.svg'

export const Profile = ({img, name, description}) => {
    return (
        <div className="profile">
            <img src={img} alt="profile" className="profile__img"/>

            <h1 className="profile__name">
                {name} <img src={py} alt="Paraguay flag" className="profile__flag"/>
            </h1>

            <p className="profile__description">
                {description}
            </p>
        </div>
    )
}