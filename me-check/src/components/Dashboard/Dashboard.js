import "./dashboard.css";
import Questions from "./Questions/Questions";
import btnImg from "./Group 3.png";
import {useState} from 'react';
import Clock from './clock/clock'; 


function Dashboard () {
    const API_URL = 'http://localhost:3001';

    const [data, setData] = useState(null);
    const [userResponse, setUserResponse] = useState('');

    const table = {
        "anger": '😡',
        "fear": '😨',
        "happy": '😄',
        "love": '🥰',
        "sadness": '😟',
        "surprise": '😲'
    }

    function displayEmotion(sentence){
        fetch(`${API_URL}/api?prompt=${sentence}`)
            .then((res) => res.json())
            .then((data) => setData(`${data.classifications[0].prediction}`));
            
        console.log(data);
    }

    function handleSubmit(e){
        e.preventDefault();
        if (e.target[0].value != ''){
            setUserResponse(e.target[0].value);
            displayEmotion(e.target[0].value); 
            e.target[0].value = '';           
        }
    }

    return (
        <div className = "dashboard-container">
            <Clock className = "clock-container"/>
            <Questions question = {"How are you feeling today?"}/>
            <form onSubmit={handleSubmit}>
                <input type = "text" className = "response-container" />
                <button><img src = {btnImg} /></button>
            </form>
            <div className = "classification">
                <h1 className = "fade-away">{userResponse}</h1>
                <h1 className = "emoji">{table[`${data}`]}</h1>
            </div>
        </div>
    );
}

export default Dashboard;