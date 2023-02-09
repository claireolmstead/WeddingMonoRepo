import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return <div>
        Home Page
        <div>
            <Link to="/schedule">Schedule</Link>
        </div>
    </div>
}

export default Home;
