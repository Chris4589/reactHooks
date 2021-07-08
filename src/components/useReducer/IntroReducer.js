

const initialState = [{
  id: 1,
  action: 'Comprar pan',
  done: false
}];


const todoReducer = (state = initialState, action) => {

  switch (action?.type) {
    case 'agregar':
      return [...initialState, action.payload];
  
    default:
      break;
  }

  return state;
}

let todo = todoReducer();

console.log(todo)

const newTodo = {
  id: 2,
  action: 'Comprar leche',
  done: false
};


const action = {
  type: 'agregar',
  payload: newTodo,
}

todo = todoReducer(todo, action);

console.log(todo)