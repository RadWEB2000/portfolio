import { IntSkills } from "../../../types/interface"
import Content from "../Content/Content";
import Item from "../Item/Item"
import { Wrapper } from "./styles"
const Skills = ({content,skills,title}:IntSkills) => {
    const size = skills.length;
    return(
        <Wrapper size={size}>
            <Content
                content={content}
                title={title}
            />
            <ul>
                {skills.map(({icon,value},key:number) =>
                    <Item
                        icon={icon}
                        key={key}
                        value={value}
                    />
                )}
            </ul>
        </Wrapper>
    )
}
export default Skills;