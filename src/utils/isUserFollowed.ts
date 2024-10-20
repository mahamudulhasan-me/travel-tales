// Define the interface for a Follower
interface Follower {
  id: string;
}

// Define the function that checks if a user is followed
export function isUserFollowed(
  followerArray: Follower[],
  userIdToCheck: string
): boolean {
  // Check if the user ID to check is already in the follower array
  return followerArray.some((follower) => follower.id === userIdToCheck);
}
