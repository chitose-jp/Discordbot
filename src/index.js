const {Client,Events,GatewayIntentBits}=require("discord.js");
const checkBlackWords=require("./utils/filter");
const token=process.env.BOT_TOKEN;

const client=new Client({intents:[
	GatewayIntentBits.Guilds,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildMessages
]});

client.once(Events.ClientReady,c=>{
	console.log(`準備OKです! ${c.user.tag}がログインします。`);
});

client.on(Events.MessageCreate,async m=>{
	if(checkBlackWords(m.content)){m.reply("禁止ワードが検出されました");return}
	if(m.author.bot)return;
	console.log(`受信しました${m}`);
	if(!m.system&&!m.mentions.everyone&&m.mentions.users.has("1345636416566333533")){
		let content =m.content.replace(/(?:<@[\d]+?> )*?/,"");
		console.log(content);
		m.reply(content);
	}
});

client.login(token);

//Koyebの仕様でhttpサーバーを立てないといけない
const http=require("http");

const server=http.createServer((req,res)=>{
  res.end();
});

const port=process.env.PORT||8080;
server.listen(port,()=>console.log(`Server is running on PORT ${port}`));
