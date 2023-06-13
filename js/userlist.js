// userList.js

const userList = [];

app.get('/join.js', (req, res) => {
  res.type('module');
  res.sendFile(__dirname + '/join.js');
});

app.get('/login.js', (req, res) => {
  res.type('module');
  res.sendFile(__dirname + '/login.js');
});

function addToUserList(id, password) {
  const user = {
    id: id,
    password: password
  };

  userList.push(user);
  console.log("사용자 리스트:", userList);
}

export default userList;
