// 数组去重
export function Arr_unique(arr = []) {
  if (!Array.isArray(arr)) {
    return [];
  }

  return Array.from(new Set(arr));
}

function compare(property, sort = 1) {
  return function(obj1, obj2) {
    const def = obj1[property] > obj2[property];
    return sort === 1 ? def : !def;
  }
}

// 对象数组排序
export function Arr_sort(arr = [], property, sort) {
  if (
    !Array.isArray(arr) ||
    Object.prototype.toString.call(property) !== '[object String]'
  ) {
    return [];
  }

  return arr.sort(compare(property, sort))
}

// 笛卡尔积运算
// cartesianProductOf(['1','3'],['a','b'])
export function cartesianProductOf() {
  return Array.prototype.reduce.call(arguments, function(a, b) {
    let ret = [];

    a.forEach(function(a) {
      b.forEach(function(b) {
        ret.push(a.concat([b]));
      });
    });
    
    return ret;
  }, [[]]);
}
