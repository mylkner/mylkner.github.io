import skills from "../Assets/skillData.js";
import SkillCard from "../Components/SkillCard";

const Skills = () => {
    return (
        <div className="skills">
            <h1 className="skillTitle">Skills</h1>
            <div className="skillCards">
                {skills.map((skill) => (
                    <SkillCard key={skill} skillName={skill} />
                ))}
            </div>
        </div>
    );
};

export default Skills;
