var singleNumber = function(nums) {
    let map = new Map();

    for( let num of nums){
        if(map.get(num)){
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }

    for(const[key, val] of map){
        if(val == 1){
            return key
        }
    }

};