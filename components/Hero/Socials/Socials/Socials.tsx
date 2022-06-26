import { IntSocial } from "../../../../types/interface"
import Social from "../Social/Social"
import { Wrapper } from "./styles";
const Socials = ({socials}:{socials:IntSocial[]}) => {
    return(
        <Wrapper>
            <menu>
                {socials.map(({color,icon,path}:IntSocial,key:number) => 
                    <Social
                        color={color}
                        icon={icon}
                        key={key}
                        path={path}
                    />
                )}
            </menu>
        </Wrapper>
    )
}
export default Socials;