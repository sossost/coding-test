function solution(sizes) {
    sizes.map((x)=>x.sort((a,b)=>b-a))
    const maxWidth = sizes.sort((a,b)=>b[0]-a[0])[0][0]
    const maxHeight = sizes.sort((a,b)=>b[1]-a[1])[0][1]
    return maxWidth * maxHeight
}

//Math.Min Math.Max 자꾸 까먹는 똥멍청이
