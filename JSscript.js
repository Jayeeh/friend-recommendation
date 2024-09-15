// Create an empty list for Sam's friends
const samsFriends = [];
// Add friends to Sam's list
samsFriends.push("morgan", "riley", "jessie", "skyler", "frankie");

// Create an empty list for Asher's friends
const ashersFriends = [];
// Add friends to Asher's list
ashersFriends.push("morgan", "aiden", "angel", "ariel", "skyler");

// Create an empty list to store friends recommended for Asher
const friendsRecommendationAsher = [];

// Variable to hold the current friend being checked
let currentFriend = "";
// Variable to check if the current friend is also in Asher's list
let isCommonFriend = false;

// Loop through each friend in Sam's list
for (let i = 0; i < samsFriends.length; i++) {
  // Get the current friend from Sam's list
  currentFriend = samsFriends[i];
  // Check if the current friend is also in Asher's list
  isCommonFriend = ashersFriends.includes(currentFriend);
  // If the current friend is not in Asher's list, add them to the recommendations
  if (!isCommonFriend) {
    friendsRecommendationAsher.push(currentFriend);
  }
}

// Print the list of friends recommended for Asher
console.log("Friends Recommended for Asher:");
console.log(friendsRecommendationAsher);
