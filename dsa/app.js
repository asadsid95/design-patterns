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

console.log(containsDuplicate(nums3));
