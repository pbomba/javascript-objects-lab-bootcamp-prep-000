var recipes = { ingredients : 'thing'};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, {[key] : value});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key] : value});
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object, {[key] : value});
  delete newObject[key]
}