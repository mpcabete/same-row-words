const rowA = 'qwertyuiop'
const rowB = 'sadfghjklç'
const rowC = 'zxcvbnm'

let i = 0
const result = []
process.stdin.on('data', chunk =>{
  const data = chunk.toString().split('\n')
  data.forEach((line)=>{
    if(i>=20000){return}
    i++
    const word = line.slice(0,line.indexOf(' '))
    let char = word.length
    while(char--){
      if(!rowA.includes(word[char-1])){
        break
      }
      if(char-1 == 0){
        result.push(word)
      }
    }
  })
})
process.stdin.on('end', ()=>{
  result.forEach(w=>console.log(w))
  //console.log(result)
})
