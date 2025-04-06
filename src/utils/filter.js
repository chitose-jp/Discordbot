const bannedWords=JSON.parse(require("fs").readFileSync("bannedWords.json"));

const reg=new RegExp(`(?:${bannedWords.join("|")})`);

function checkBannedWords(str){
  const match=String(str).match(reg);
  if(match)return true;
  else return false;
}

module.exports=checkBannedWords;
