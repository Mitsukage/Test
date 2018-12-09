import {Item} from '../../models/item';
import {ActionItems, ItemsActionTypes} from '../actions/items.actions';

export interface ItemsState {
  items: Item[];
  selected: number;
}

export const initialState: ItemsState = {
  items: [{
    title: 'First item with custom name',
    comments: [{
      text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
      color: '#ff8a00'
    }, {
      text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
      color: '#485bff'
    }, {
      text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
      color: '#ff8a00'
    }]
  }, {
    title: 'Second item is active',
    comments: [{
      text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
      color: '#ff8a00'
    }, {
      text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
      color: '#ff8a00'
    }, {
      text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
      color: '#ff8a00'
    }, {
      text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
      color: '#ff8a00'
    }]
  }],
  selected: 1
};

export const itemReducer = (state = initialState,
                            action: ActionItems) => {
  switch (action.type) {
    case ItemsActionTypes.UPDATE_ALL_ITEMS:
      return {...state, items: action.payload.items, selected: action.payload.selected};
    case ItemsActionTypes.ADD_ITEM:
      return {...state, items: [...state.items, action.payload]};
    case ItemsActionTypes.REMOVE_ITEM: {
      state.items.splice(action.payload, 1);
      return state;
    }
    case ItemsActionTypes.SELECT_ITEM:
      return {...state, selected: action.payload};
    case ItemsActionTypes.SEND_COMMENT:
      state.items[state.selected].comments.push({text: action.payload, color: '#e6e6e6'});
      return state;
    default:
      return state;
  }
};
