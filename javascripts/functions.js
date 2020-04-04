// jshint esversion: 6

arrAvg = (arr) => {
  var total_sum = 0, n = arr.length;
  for (i = 0; i < n; i++) {
    total_sum += arr[i];
  }

  return total_sum/n;
};
