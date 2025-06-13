    function isSortedAscending(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) return false;
        }
    return true;
    }
    
    function isSortedDescending(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) return false;
        }
    return true;
    }

    module.exports = {
        isSortedAscending,
        isSortedDescending
    };