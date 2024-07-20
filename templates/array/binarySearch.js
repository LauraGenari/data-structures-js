function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((right-left)/2) + left;
        if(arr[mid] === target) return mid;
        if(arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

// Time Complexity: O(log(n))
// e calculate mid with left + floor((right-left) / 2) to avoid potential integer overflow.
// sorted array