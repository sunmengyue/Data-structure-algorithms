function merge(arr1, arr2) {
  let mergedArr = [];
  let i = 0,
    j = 0;

  while (i < arr1.length || j < arr2.length) {
    // if arr1 element is smaller or if arr2 elements are all pushed into mergedArr
    if (arr1[i] <= arr2[j] || j >= arr2.length) {
      mergedArr.push(arr1[i]);
      i++;
    } else if (arr2[j] <= arr1[i] || i >= arr1.length) {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  return mergedArr;
}

merge([1, 2, 5, 6], [3, 5, 10, 21]);
