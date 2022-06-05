import "./index.css"
import { Link } from "react-router-dom";

function Connections({connections}){
    return (
        <div className="connections-container">
            {   
                connections.map((each)=>{
                    return(
                        <Link to={{
                            pathname:`/profile/${each.username}`,
                            }} 
                            style={{textDecoration:"none",color:"black"}}
                        >
                            <div className="connection-card">
                                <img src={each.profile_image} className="profile-image" />
                                <div className="d-flex align-items-center p-3">
                                    <h3>{each.username}</h3>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
}

export default Connections;