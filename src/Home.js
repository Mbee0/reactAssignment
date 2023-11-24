import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <div>
            <h1>This is the homepage for Assignment #6</h1>
            <p>By: Megan Bee<br /></p>
            <h2> If you would like to go somewhere else:</h2>
            <Link to="/tictactoe">Tic-Tac-Toe Game</Link>
            <p></p>
            <Link to="/quotes">Inspirational Quotes</Link>
        </div>
    )
}
