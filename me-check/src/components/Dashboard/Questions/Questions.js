import "./Questions.css";


function Questions (props) {

    return (
        <div className = "questions-container">
            <h2>{props.question}</h2>
        </div>
    );
}

export default Questions;