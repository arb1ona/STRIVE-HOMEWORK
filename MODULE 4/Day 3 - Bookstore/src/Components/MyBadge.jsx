import React, { Component } from 'react';
import { Badge } from "react-bootstrap";

function MyBadge() {

    return (
        <div>
            <h5>My Badge<Badge variant="secondary">New</Badge></h5>
        </div>
    )
}
export default MyBadge;
