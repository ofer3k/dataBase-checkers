const passerByButton=document.getElementById('passerByButton')

passerByButton.addEventListener('click',()=>{
    alert('first of all-calm down. lets play some checkers...')
})

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
//left side of th VP
const ul = document.getElementById('authors');
const url = 'http://localhost:3001/users';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data;
  return authors.map(function(author) {
    let li = createNode('li'),
        span = createNode('span');
        // br=createNode('br')
    span.innerHTML = `${author.name}`+"<br>"+`score: ${author.score}`;
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});

//right side of the VP-hall of fame!

async function fetchUsersAndSort() {
  const response = await fetch(url);
  const users = await response.json();
  users.sort(compare)
  const ul = document.getElementById('bestPlayers');
  if (users.length > 3) users.length = 3;
  users.map(function(user) {
    let li = createNode('li'),
        span = createNode('span');
        // br=createNode('br')
    span.innerHTML = `${user.name}`+"<br>"+`score: ${user.score}`;
    append(li, span);
    append(ul, li);
  })
}
//calling the function
fetchUsersAndSort()
//comparing the score of two users
function compare( a, b ) {
  if ( b.score < a.score ){
    return -1;
  }
  if ( b.score > a.score ){
    return 1;
  }
  return 0;
}