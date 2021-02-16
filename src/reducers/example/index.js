import { EXAMPLE_GET } from '../../Constants/ActionTypes';

const example = (state = {}, {type, data}) => {
  switch (type) {
    case EXAMPLE_GET:
      if(!data) return state;
      return data;
    default:
      return state;
  }
};

export default example;
