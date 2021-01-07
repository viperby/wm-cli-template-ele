JSON.clone = function(obj) {
  if (!obj || !(obj instanceof Object)) return obj
  return JSON.parse(JSON.stringify(obj))
}
