// "use client"
// import React, { useState, useEffect } from 'react';

// const GitHubData = () => {
//   const [userData, setUserData] = useState(null);
//   const [repositories, setRepositories] = useState([]);
//   const [activityFeed, setActivityFeed] = useState([]);
//   const [starredRepositories, setStarredRepositories] = useState([]);
//   const [following, setFollowing] = useState([]);
//   const [followers, setFollowers] = useState([]);
//   const [organizations, setOrganizations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch user data
//         const userResponse = await fetch('https://api.github.com/users/Chinmaya0011');
//         if (!userResponse.ok) {
//           throw new Error('Failed to fetch user data from GitHub API');
//         }
//         const userData = await userResponse.json();
//         setUserData(userData);

//         // Fetch user's repositories
//         const reposResponse = await fetch(userData.repos_url);
//         if (!reposResponse.ok) {
//           throw new Error('Failed to fetch repositories data from GitHub API');
//         }
//         const reposData = await reposResponse.json();
//         setRepositories(reposData);

//         // Fetch user's activity feed
//         const activityResponse = await fetch(userData.events_url.replace('{/privacy}', ''));
//         if (!activityResponse.ok) {
//           throw new Error('Failed to fetch activity feed data from GitHub API');
//         }
//         const activityData = await activityResponse.json();
//         setActivityFeed(activityData);

//         // Fetch user's starred repositories
//         const starredResponse = await fetch(userData.starred_url.replace('{/owner}{/repo}', ''));
//         if (!starredResponse.ok) {
//           throw new Error('Failed to fetch starred repositories data from GitHub API');
//         }
//         const starredData = await starredResponse.json();
//         setStarredRepositories(starredData);

//         // Fetch user's following
//         const followingResponse = await fetch(userData.following_url.replace('{/other_user}', ''));
//         if (!followingResponse.ok) {
//           throw new Error('Failed to fetch following data from GitHub API');
//         }
//         const followingData = await followingResponse.json();
//         setFollowing(followingData);

//         // Fetch user's followers
//         const followersResponse = await fetch(userData.followers_url.replace('{/other_user}', ''));
//         if (!followersResponse.ok) {
//           throw new Error('Failed to fetch followers data from GitHub API');
//         }
//         const followersData = await followersResponse.json();
//         setFollowers(followersData);

//         // Fetch user's organizations
//         const orgsResponse = await fetch(userData.organizations_url);
//         if (!orgsResponse.ok) {
//           throw new Error('Failed to fetch organizations data from GitHub API');
//         }
//         const orgsData = await orgsResponse.json();
//         setOrganizations(orgsData);

//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="bg-gray-100 p-4">
//     {loading ? (
//       <p>Loading...</p>
//     ) : (
//       <div>
//         <h2 className="text-2xl font-bold mb-4">{userData.name}</h2>
//         <p className="mb-2">Bio: {userData.bio}</p>
//         <p className="mb-4">Location: {userData.location}</p>
  
//         <h3 className="text-lg font-bold mb-2">Public Repositories:</h3>
//         <ul className="list-disc ml-4 mb-4">
//           {repositories.map(repo => (
//             <li key={repo.id} className="mb-1">
//               <strong>{repo.name}</strong> - {repo.description}
//             </li>
//           ))}
//         </ul>
  
//         <h3 className="text-lg font-bold mb-2">Activity Feed:</h3>
//         <ul className="list-disc ml-4 mb-4">
//           {activityFeed.map(activity => (
//             <li key={activity.id} className="mb-1">{activity.type}</li>
//           ))}
//         </ul>
  
//         <h3 className="text-lg font-bold mb-2">Starred Repositories:</h3>
//         <ul className="list-disc ml-4 mb-4">
//           {starredRepositories.map(repo => (
//             <li key={repo.id} className="mb-1">{repo.full_name}</li>
//           ))}
//         </ul>
  
//         <h3 className="text-lg font-bold mb-2">Following:</h3>
//         <ul className="list-disc ml-4 mb-4">
//           {following.map(user => (
//             <li key={user.id} className="mb-1">{user.login}</li>
//           ))}
//         </ul>
  
//         <h3 className="text-lg font-bold mb-2">Followers:</h3>
//         <ul className="list-disc ml-4 mb-4">
//           {followers.map(user => (
//             <li key={user.id} className="mb-1">{user.login}</li>
//           ))}
//         </ul>
  
//         <h3 className="text-lg font-bold mb-2">Organizations:</h3>
//         <ul className="list-disc ml-4">
//           {organizations.map(org => (
//             <li key={org.id} className="mb-1">{org.login}</li>
//           ))}
//         </ul>
//       </div>
//     )}
//   </div>
  
//   );
// };

// export default GitHubData;
