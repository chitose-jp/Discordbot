const {REST,Routes}=require("discord.js");
const {clientId}=require("../config.json");

const commands=[
  {
    name:"ping",
    description:"動作確認用"
  },
  {
    name:"info",
    description:"サーバーまたはユーザーの情報を取得する",
    options:[
      {
        type:"SUB_COMMAND",
        name:"server",
        description:"サーバーの情報を取得する"
      },
      {
        type:"SUB_COMMANDS",
        name:"user",
        options:[
          {
            type:"USER",
            name:"target",
            description:"ターゲットユーザーを選択"
          }
        ]
      }
    ]
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
