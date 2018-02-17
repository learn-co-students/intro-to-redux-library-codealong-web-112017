export default function shoppingListItemReducer(state = {
  items: []
}, action) {
  switch(action.type) {

    case 'INCREASE_COUNT':
      console.log('previous',state.items.length);
      console.log('next',state.items.length + 1);
      return Object.assign({}, state, { items: state.items.concat(state.items.length + 1) });

    default:
    console.log('initial', state.items.length);
      return state;
  }
}
