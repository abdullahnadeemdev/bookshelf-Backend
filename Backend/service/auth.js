const sessionIdToUserMap = new Map();

function setUserID(id, user) {
  return sessionIdToUserMap.set(id, user);
}

function getUserID(id) {
  return sessionIdToUserMap.get(id);
}

module.exports = { setUserID, getUserID };
