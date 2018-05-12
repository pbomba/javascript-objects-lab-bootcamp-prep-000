var recipes = { ingredients : 'thing'};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, {object}, [key], value);
}
