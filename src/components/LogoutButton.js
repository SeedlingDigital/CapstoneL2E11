import React from 'react';

function LogoutButton(props) {


    let loginButtonText = "Logout";

    function login() {
        localStorage.removeItem("cartTotal");
         props.updateLoggedInVariables(false, "");
    }


    return (
        <div>
            <button className={"logout-nav-bar_button"} onClick={login}>{loginButtonText}</button>
        </div>
    );
}
export default LogoutButton;