// "api"
import {profile, SocialMedia} from '../../api/api.json'

// components
import { Profile } from "../../Components/Profile/Profile"
import { LinkCard } from '../../Components/Link/LinkCard'

// styles
import './HomeView.css'

export const HomeView = () => {
    return (
        <div className="home">
            <Profile 
                name={profile.name}
                img={profile.img}
                description={profile.description}
            />

            <main className="home__links">
                {
                    SocialMedia.map(data => {
                        return(
                            <LinkCard 
                                path= {data.url}   
                                title= {data.name} 
                                iconClass= {data.iconClass}
                                description= {data.description}
                                bg= {data.color}
                            />
                        )
                    })
                }
            </main>
        </div>
    )
}
