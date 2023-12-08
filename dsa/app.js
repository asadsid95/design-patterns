function containsDuplicate(nums) {
  /* 
    traverse through list and place each element in dict with value starting at 1; if repeat element, it wont allow insertion into dict therefore return false
    
    const dict = {};
  
    for (const value of nums) {
      if (dict[value]) return true;
  
      dict[value] = 1;
    }
  
    return false;

    ------

    traverse through list and place each element in set. if repeat character, return fasl
    */

  const newSet = new Set();
  for (const value of nums) {
    if (newSet.has(value)) return true;
    newSet.add(value);
  }

  return false;
}

const nums1 = [1, 2, 3, 4, 5];
const nums2 = [1, 2, 3, 4, 5, 5, 5];
const nums3 = [1, 2, 3, 1];

// console.log(containsDuplicate(nums3));

//-------------------------
// # 125. Valid Palindrome

function isPalindrome(s) {
  // strings reads the same both ways after being transformed for lowercase, removing non-alphanumeric characters

  const cleaned_up = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let second_pointer = cleaned_up.length - 1;

  for (let i = 0; i <= second_pointer; i++) {
    if (cleaned_up[second_pointer] === cleaned_up[i]) {
      second_pointer--;
    } else {
      return false;
    }
    console.log("i: ", i);
    console.log("second_pointer: ", second_pointer);
  }
  return true;
}

const s = "A man, a plan, a canal: Panama";
const d = "abbba";
// console.log(isPalindrome(d));

//-------------------------
// # 121. Best Time to Buy and Sell Stock

function maxProfit(prices) {
  /*   let buy = prices[0]; // initialize to 0-th element, for pointing to lowest buy price
  let profit = 0;

  if (prices.length === 0) {
    return 0;
  }

  for (let i = 1; i < prices.length; i++) {
    // start loop at 1-th element
    let compare = prices[i] - buy;

    if (compare > profit) {
      profit = compare;
    }
    if (prices[i] < buy) {
      buy = prices[i];
    }
  }
  return profit; */

  let buy = prices[0];
  let profit = 0;

  for (i = 1; i < prices.length; i++) {
    if (prices[i] > buy) {
      // avoids operating on lower values to var 'buy'
      // check if price at new index is greater than buy
      let diff = prices[i] - buy;

      profit = Math.max(diff, profit);
    } else {
      buy = prices[i];
    }
  }
  return profit;
}

const prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices));

function binSearch(nums, target) {
  /* 
  Find middle using the 2 pointers, compare its value with target 
    If target is less, move 'high' to middle-1 ;  find the sorted array (characteristic = low value and high value) and check within
    If target is more, move 'low' to middle; if 
  */

  // pointers
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    /*     find sorted array first */

    if (nums[low] <= nums[mid]) {
      // sorted array in left side
      if (target >= nums[low] && target < nums[mid]) {
        high = mid - 1;
      } else {
        // TODO:  not sure when this would be possible
        low = mid + 1;
      }
    } else {
      // sorted array in right side
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 1;
console.log(binSearch(nums, target));
