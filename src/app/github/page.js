"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../style/GitHub.css"
const GitHubPortfolio = () => {
    const [userData, setUserData] = useState(null);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace 'your_username' with your GitHub username
                let page = 1;
                let allRepos = [];
                let response;

                do {
                    response = await axios.get(`https://api.github.com/users/Chinmaya0011/repos?page=${page}&per_page=100`);
                    allRepos = allRepos.concat(response.data);
                    page++;
                } while (response.data.length === 100);

                // Fetch user data separately to get the user's name
                const userResponse = await axios.get(`https://api.github.com/users/Chinmaya0011`);
                setUserData(userResponse.data);
                setRepos(allRepos);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!userData || repos.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="github-portfolio">
            {userData.name && (
                <h1 className="user-name">{userData.name}</h1>
            )}
            <img className="avatar text-center justify-center" src={userData.avatar_url} alt="GitHub Avatar" />
            <div className='bioData'>  {userData.bio && (
                <div className="bio">
                    <h2 className="bio-heading">Bio:</h2>
                    <p className="bio-content">{userData.bio}</p>
                </div>
            )}
            </div>
          
            <h2 className="repo-heading">Repositories:</h2>
            <ul className="repo-list">
                {repos.map(repo => (
                    <li key={repo.id} className="repo-item">
                        <a href={repo.html_url} className="repo-link" target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                        <span className="repo-fullname"> - {repo.full_name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitHubPortfolio;
