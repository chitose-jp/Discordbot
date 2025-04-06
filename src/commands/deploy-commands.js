const {REST,Routes}=require("discord.js");

const commands=[
  {
    name:"ping",
    description:"動作確認用"
  }
];

const rest=new REST({version:"10"}).setToken(process.env.BOT_TOKEN);

async function deployCommands(){
  for(const command of commands)
    try{
      await rest.put(Routes.applicationGuildCommands(clientId,guildId),{body:commands});
       }catch(e){
      console.error(e);
       }
}
