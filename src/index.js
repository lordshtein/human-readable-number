module.exports = function toReadable (number) {
  const zeroNine = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ]

  const tenTwenty = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ]

  const twentyNinety = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ]

  const hundredMillion = [
    "hundred",
    "thousend",
    "million",
  ]

  if (number === 0 ) return "zero"

  let sp = number.toString().split("");
  let result =[]
  let L = sp.length


  for (let i=0; i <= L-1 ; i+=1) {
    if (sp[i] == "1" && (L-i) % 3 == "2" && sp[i+1]) {

      result.push(tenTwenty[sp[i+1]])
      i=i+1

    } else if ((L-i) % 3 == "2" && sp[i+1] && sp[i] != "0") {

      result.push(twentyNinety[sp[i]])

    } else if ((L-i) % 3 == "2" && !sp[i+1]) {

      result.push(zeroNine[sp[i]])

    } else if ((L-i) % 3 == "1" && sp[i] != "0") {

      result.push(zeroNine[sp[i]])

    } else if ((L-i) % 3 == "0")

      result.push(zeroNine[sp[i]]+" hundred")

  }
  return result.join(" ")
}

 //there should be few logical steps for thousands and millions btw.
 