import React from "react";

import {Card, CardBody} from "reactstrap"

const Usercard = ({user}) => {
    return(
        <Card className="text-center mt-4 mb-3">
            <img src={user.avatar_url} className ="img-thumbnail"/>
            <CardBody>
                <div className="text-info" > {user.name}</div>
                <div className="text-info">{user.location}</div>
                <div className="text-info">Available for hire: {user.hireable ? "Yes" : "No"}</div>
                <div className="text-primary">Total follower: {user.followers}</div>
            </CardBody>

        </Card>
    )
}

export default Usercard;