import { IntHero } from "../../../types/interface";
import Content from "../Content/Content";
import Poster from "../Poster/Poster";
import Socials from "../Socials/Socials/Socials";
import { Wrapper } from "./styles";
const Hero = ({buttons,content,image,socials,title}:IntHero) => {
    return(
        <Wrapper>
            <Socials socials={socials}/>
            <Poster image={image} title={title}/>
            <Content buttons={buttons} content={content} title={title}/>
        </Wrapper>
    )
}
export default Hero;