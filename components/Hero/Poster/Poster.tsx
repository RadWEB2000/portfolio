import Image from "next/image"
import { IntHeroPoster } from "../../../types/interface";
import { Wrapper } from "./styles";
const Poster = ({image,title}:IntHeroPoster) => {
    return(
        <Wrapper>
            <figure>
                <Image
                    alt={title}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    src={image}
                    quality={85}
                />
            </figure>
        </Wrapper>
    )
}
export default Poster;