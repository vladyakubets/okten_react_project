import React from "react";

import "./UserInfo.css";

const UserInfo = () => {
    return (
        <div className={"user"}>
            <img src="/avatar.png" alt="image"/>
            <p>Vlad Yakubets</p>
        </div>
    );
};

export {UserInfo};