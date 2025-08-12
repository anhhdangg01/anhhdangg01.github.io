import React from 'react';
import '../styles/games.css';
import games_data from '../data/games.json';

const games = games_data.games;

function Games() {
  return (
    <div className="games">
      <h1>Games</h1>
      {games.map((game) => {
        return(
          <div className="game">
            <a href={game.link}>
              <h2>{game.name}</h2>
            </a>
            
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
        )
      })
      }
    </div>
  )
}

export default Games;
