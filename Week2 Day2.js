  let sentence = "This dinner is not so bad ! You cook well";
  let arrSentence = sentence.split ("");
  
  let indexWordNot = arrSentence.indexOf ("not");  //15
  let indexWordBad = arrSentence.indexOf ("bad");  //22

  if (indexWordBad > indexWordNot && wordBad > 0 && wordNot > 0) {
    arrSentence.splice (15, 8, "good") 
    let result = arrSentence.join ("")
    console.log (result)
  } else {
    console.log(sentence) 
  } 
    