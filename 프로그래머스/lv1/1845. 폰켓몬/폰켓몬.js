function solution(nums) {
    var kindOfPM = [...new Set(nums)].length
    return kindOfPM>=nums.length/2 ? nums.length/2 : kindOfPM ;
}