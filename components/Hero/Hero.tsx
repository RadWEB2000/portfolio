import Image from "next/image"
import Link from "next/link";
import { socials } from "../../data/socials";
import { IntHero } from "../../types/interface";
import { Content, Social, Wrapper } from "./styles";
const Hero = ({content,image,status,title}:IntHero) => {
    return(
        <Wrapper>
            <div>
                <figure>
                    <Image
                        alt={title}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        src={image}
                        title={title}
                        quality={75}
                    />
                </figure>
            </div>
            <div>
                <Content>
                    <h1>{title}</h1>
                    <p>{status}</p>
                    <p dangerouslySetInnerHTML={{__html:content}}/>
                </Content>
                <ul>
                    {socials.map(({color,icon,path},key) =>
                        <Social key={key} color={color}>
                            <Link href={path}>
                                <a target='_blank' rel='index follow'>
                                    {icon}
                                </a>
                            </Link>
                        </Social>
                    )}
                </ul>
            </div>
        </Wrapper>
    )
}
export default Hero;