import Link from "next/link"
import { IntSocial } from "../../../../types/interface";
import { Wrapper } from "./styles";

const Social = ({color,icon,path}:IntSocial) => {
    return(
        <Wrapper color={color}>
            <Link href={path}>
                <a>
                    <div>
                        {icon}
                    </div>
                </a>
            </Link>
        </Wrapper>
    )
}
export default Social;