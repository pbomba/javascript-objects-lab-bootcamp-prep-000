var recipes = { ingredients : 'thing'};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, [key], value);
}
