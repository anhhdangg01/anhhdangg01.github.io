import '../styles/games.css';
import games_data from '../data/games.json';

const games = games_data.games;

function Games() {
  return (
    <div className="section">
      <h1>Games</h1>
      <div className="games" id="games">
        {games.map((game) => {
          const imgSrc = require(`../assets/${game.icon_name}.png`);
          return(
            <a target="_blank" rel="noreferrer" href={game.link}>
              <div className="game">
                <img src={imgSrc} alt={game.alt} />
                <h2>{game.name}</h2>
                <div className="info">
                  <div className="roles">
                    {game.role.map((role) => {
                      return(
                        <h3>{role}</h3>
                      )
                    })}
                  </div>
                  <ul>
                    {game.description.map((desc) => {
                      return(
                        <li>{desc}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Games;
