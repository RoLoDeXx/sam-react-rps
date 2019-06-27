import React, { Component } from "react";

export default class GameBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerChoice: null,
      playerChoice: null,
      gameResult: "Tap to start",
      playerScore: 0,
      ComputerScore: 0
    };
  }

  displayResult = () => {
    const player = this.state.playerChoice;
    const comp = this.state.computerChoice;
    if (player === comp) this.setState({ gameResult: "Draw" });
    else if (player === 0 && comp === 1)
      this.setState({
        gameResult: "Computer wins",
        ComputerScore: this.state.ComputerScore + 1
      });
    else if (player === 0 && comp === 2)
      this.setState({
        gameResult: "Player wins",
        playerScore: this.state.playerScore + 1
      });
    else if (player === 1 && comp === 0)
      this.setState({
        gameResult: "Player wins",
        playerScore: this.state.playerScore + 1
      });
    else if (player === 1 && comp === 2)
      this.setState({
        gameResult: "Computer wins",
        ComputerScore: this.state.ComputerScore + 1
      });
    else if (player === 2 && comp === 0)
      this.setState({
        gameResult: "Computer wins",
        ComputerScore: this.state.ComputerScore + 1
      });
    else if (player === 2 && comp === 1)
      this.setState({
        gameResult: "Player wins",
        playerScore: this.state.playerScore + 1
      });
  };

  makeChoice = choice => {
    const compChoice = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

    this.setState(
      {
        playerChoice: choice,
        computerChoice: compChoice
      },
      () => {
        // console.log(this.state.playerChoice + " " + this.state.computerChoice);
        this.displayResult();
      }
    );
  };

  render() {
    return (
      <div>
        <div>
          {
            <ul className="scoreCard">
              <li>
                <h3>Player : {this.state.playerScore}</h3>
              </li>
              <li>
                <h3>Computer : {this.state.ComputerScore}</h3>
              </li>
            </ul>
          }
        </div>
        <h1 id="resultBox">{this.state.gameResult}</h1>

        <div>
          You
          <ul className="weapons">
            <li>
              <button onClick={() => this.makeChoice(0)}>
                <span role="img" aria-label="rock">
                  ✊
                </span>
              </button>
            </li>
            <li>
              <button onClick={() => this.makeChoice(1)}>
                <span role="img" aria-label="paper">
                  ✋
                </span>
              </button>
            </li>
            <li>
              <button onClick={() => this.makeChoice(2)}>
                <span role="img" aria-label="scissors">
                  ✌
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
