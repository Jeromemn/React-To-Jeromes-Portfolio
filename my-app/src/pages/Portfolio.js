import projects from "../components/Projects"

function PortfolioItems({props}) {
    return (
        <div>
            <h2> Portfolio </h2>


             {/* {props.projects.map(project => (
                <img className="images" alt={project.title} src={project.image} key={project.id}>
                 <a className="deployed" href={project.deployed} key={project.id}>Deployed Site</a>
                 <a className="github" href={project.github}key={project.id}>Github</a>

                        {project.title}
                        {project.deployed}
                        {project.Github}
                        </img>
               ) )}
            </a> */}
            
        </div>
        
    )
}

export default PortfolioItems;