// Create an empty list for Sam's friends
const samsFriends = ["morgan", "riley", "jessie", "skyler", "frankie"];

// Create an empty list for Asher's friends
const ashersFriends = ["morgan", "aiden", "angel", "ariel", "skyler"];

// Use filter to find friends in Sam's list who are not in Asher's list
const friendsRecommendationAsher = samsFriends.filter(friend => !ashersFriends.includes(friend));

// Print the list of friends recommended for Asher
console.log("Friends Recommended for Asher:");
console.log(friendsRecommendationAsher);
