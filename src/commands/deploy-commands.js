const {REST,Routes}=require("discord.js");
const {clientId}=require("../config.json");

const commands=[
  {
    name:"ping",
    description:"動作確認用"
  }
];

const rest=new REST({version:"10"}).setToken(process.env.BOT_TOKEN);

async function deployCommands(){
  try{
    await rest.put(Routes.applicationGuildCommands(clientId),{body:commands});
  }catch(e){
    console.error(e);
  }
}

module.exports=deployCommands;
