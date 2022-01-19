console.log(1);
console.log(2);

setTimeout(() => {
  conole.log('callback function fired');
}, 2000)

console.log(3);
console.log(4);

//2

const request = new XMLHttpRequest();

request.addEventListener('readystatechange'. () => {
  //console.log(request, request.readyState);
  if(request.readyState === 4){
    console.log(request.repsonseText);
  }
});

request.open('GET', 'https://jsonplaceholder.cypress.io/todos/');
request.send();

//3


const request = new XMLHttpRequest();

request.addEventListener('readystatechange'. () => {
  //console.log(request, request.readyState);
  if(request.readyState === 4 && request.staus === 20){
    console.log(request, request.repsonseText);
  }else if(request.readyState === 4){
    console.log('could not fetch date')
  }
});

request.open('GET', 'https://jsonplaceholder.cypress.io/todos/');
request.send();

//4

const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange'. () => {
    //console.log(request, request.readyState);
    if(request.readyState === 4 && request.staus === 200){
      callback(undefined, request.responseText);
    }else if(request.readyState === 4){
      callback('could not fetch data', undefined);
    }
  });

  request.open('GET', 'https://jsonplaceholder.cypress.io/todos/');
  request.send();

};

console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log('callback fired');
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }

});

console.log(3);
console.log(4);

//5

const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange'. () => {
    //console.log(request, request.readyState);
    if(request.readyState === 4 && request.staus === 200){
      const data = JSON.parse(request.readyText);
      callback(undefined);
    }else if(request.readyState === 4){
      callback('could not fetch data', undefined);
    }
  });

  request.open('GET', 'todos.json');
  request.send();

};

console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log('callback fired');
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }

});

console.log(3);
console.log(4);
