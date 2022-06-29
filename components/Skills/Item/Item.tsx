import { IntSkillsItem } from "../../../types/interface";
import { Wrapper } from "./styles";
const Item = ({icon,value}:IntSkillsItem) => {
    return(
        <Wrapper value={value}>
            <div className="skill">
                <span/>
            </div>
            <div className="procent">
                <p>
                    {value}%
                </p>
            </div>
            <div className="stack">
                <span>
                    {icon}
                </span>
            </div>
        </Wrapper>
    )
}
export default Item;