import { IntTimelineCard } from "../../../types/interface";
import { Wrapper } from "./styles";

const Card = ({content,date,title}:IntTimelineCard) => {
    return(
        <Wrapper>
            <section>
                <p dangerouslySetInnerHTML={{__html:date}} />
                <h3 dangerouslySetInnerHTML={{__html:title}} />
                <p dangerouslySetInnerHTML={{__html:content}} />
            </section>
        </Wrapper>
    )
}
export default Card;