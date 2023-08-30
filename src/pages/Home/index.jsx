import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./home1.css"
const HomePage = () => {
    const [value, setValue] = useState();
    const navigate = useNavigate();
    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`);
    }, [navigate, value]);
    return (
        <>

            <body>
                <Navbar />
                <div className="contain">

                    <div className="contain1">
                        <div className="container p-3 text-primary-emphasis bg-dark border border-primary-subtle rounded-3 mt-3">

                            <div class="input-group">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="floatingText" placeholder="Enter Meeting Code" value={value} onChange={(e) => setValue(e.target.value)} />
                                    <label for="floatingText">Enter Meeting Code</label>
                                </div>
                                <button class="btn btn-outline-secondary text-light" type="button" id="button-addon2" onClick={handleJoinRoom}>Join</button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
};
export default HomePage;