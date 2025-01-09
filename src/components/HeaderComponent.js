import React from "react";
import UserLogin from "./UserLogin";
import LogoutButton from "./LogoutButton";
import NavBar from "./NavBar";

function HeaderComponent(props) {

    const [loggedIn, setLoggedIn] = React.useState(false);
    const [userName, setUserName] = React.useState('');
    let loggedINLS = localStorage.getItem("loggedIn");
    let userNameINLS = localStorage.getItem("userName");


    console.log(`loggedINLS: ${loggedINLS}`);

    if(!loggedINLS)
    {
        localStorage.setItem("loggedIn", "false");
        loggedINLS = "false"
    }



    // Update the state from if the user logged in or not
    function updateLoggedInVariables(loggedInValue, userNameValue) {

        if(loggedInValue)
        {
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("userName", userNameValue);
        }
        else
        {
            localStorage.setItem("loggedIn", "false");
            localStorage.setItem("userName", "NONE");
        }

        setLoggedIn(localStorage.getItem("loggedIn"));
        setUserName(userNameValue);

    }



    return (
        <div>
            {/*Display the log in input or not*/}
            {(loggedINLS === "false") ?
                <div>
                    <h2 className={"register-heading"}>Please login to continue</h2>
                    <div>
                        <UserLogin loggedIn={loggedIn} userName={userName}
                                   updateLoggedInVariables={updateLoggedInVariables}/>
                    </div>
                </div>
                :
                <div>
                    <h1>Welcome {userNameINLS}</h1>
                    <LogoutButton updateLoggedInVariables={updateLoggedInVariables}/>
                </div>}

            {/* No Nav bar yet if the user has not logged in*/}

            {(loggedINLS === "true") ? <NavBar/> : null}

        </div>
    );
}

export default HeaderComponent;