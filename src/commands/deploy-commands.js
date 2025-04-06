const {REST,Routes}=require("discord.js");
const {clientId}=require("../config.json");

const commands=[
  {
    name:"ping",
    description:"動作確認用"
  },
  {
    name:"servsrInfo",
    description:"サーバーの情報を取得する"
  }
];

const rest=new REST({version:"10"}).setToken(process.env.BOT_TOKEN);

async function deployCommands(){
  try{
    await rest.put(Routes.applicationCommands(clientId),{body:commands});
  }catch(e){
    console.error(e);
  }
}

module.exports=deployCommands;
