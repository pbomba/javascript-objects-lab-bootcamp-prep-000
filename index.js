var recipes = { ingredients : 'thing'};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, {[key] : value});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object = Object.assign({object, {[key] : value}})
  return object;
}