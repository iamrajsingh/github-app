import React, {useState, useEffect} from "react";
import {ListGroup, ListGroupItem} from "reactstrap"
import axios from "axios";

const Repos = ({repos_url}) => { 
    const [repos, setRepo]= useState([]) ;

    const fetchRepos = async() => {
        const {data} = await axios.get(repos_url);
        setRepo(data);
    }

    useEffect(()=> {
        fetchRepos();
    },[])


    return(
        <ListGroup>
            {repos.map(repo => (
                <ListGroupItem key={repo.id}>
                        <div className="text-primary">{repo.name}</div>
                        <div className="text-secondary">{repo.language}</div>
                        <div className="text-info">{repo.description}</div>

                </ListGroupItem>
            ))}
        </ListGroup>
    )

} 

export default Repos;