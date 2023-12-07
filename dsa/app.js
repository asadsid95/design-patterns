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

function maxProfit(prices) {}

const prices = [7, 1, 5, 3, 6, 4];
