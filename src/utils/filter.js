const bannedWords=["死ね","しね","テスト"];
const reg=new RegExp(`(?:${bannedWords.join("|")})`);

function checkBannedWords(str){
  const match=String(str).match(reg);
  if(match)return true;
  else return false;
}

module.exports=checkBannedWords;
