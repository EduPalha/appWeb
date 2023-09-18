//break NÃO age no no Switch, for, while
//continue para e pula para a próxima iteração e apenas for e while


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){
    if(x == 5) break
    console.log(`${x}) ${nums[x]}`)
}

console.log('\n')

for(y in nums){
    if(y == 5) continue
    console.log(`${y}) ${nums[y]}`)
}
