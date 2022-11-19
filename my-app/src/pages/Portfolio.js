// import Projects from "../components/Projects"
import cardbattle from "../assets/Card-Battle-gif.gif";
import nonSocial from "../assets/NonSocial-screenshot.jpg"

const projects = [
    {
        
            id:1,
            title: 'Non Social Drinker',
            deployed: 'https://jeromemn.github.io/nonsocial-drinker/',
            github: 'https://github.com/Jeromemn/nonsocial-drinker',
            image: nonSocial,
        
    },
    {
        
            id:2,
            title: 'Card Battle',
            deployed: 'https://card-battle.herokuapp.com/',
            github: 'https://github.com/Jeromemn/card-battle',
            image: cardbattle,
        
    },
]




function PortfolioItems() {
    console.log();
  return (
    <div>
      <h2> Portfolio </h2>
       {projects.map((project) => (
        <div key={project.id}>
        <img 
          className="images"
          alt={project.title}
          src={project.image}>
        
          </img> 
           <a className="deployed" href={project.deployed} >
            Deployed Site
          </a> 
          <a className="github" href={project.github} >
            Github
          </a> 
          
          </div>
      
     ))} 

     {/* <img src={`../assets/NonSocial-screenshot.jpg`} alt="application" /> */}
    </div>
  );
}

export default PortfolioItems;
