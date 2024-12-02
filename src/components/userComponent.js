function renderUser(name) {
    if (!name) throw new Error('Name is required');
    return `<h1>${name}</h1>`;
  }
  
  function renderUserList(users) {
    return users.map(user => `<li>${user}</li>`).join('');
  }
  
  module.exports = { renderUser, renderUserList };
  