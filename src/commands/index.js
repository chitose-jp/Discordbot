async function handleCommand(interaction){
  if(!interaction.isChatInputCommand())return;

  if(interaction.commandName==="ping") {
    await interaction.reply({content:"Pong!",ephemeral:true});
  }
  if(interaction.commandName==="info"){
    console.log(interaction.options._subcommand);
    if(interaction.getSubcommand()==="server"){
      const servsr=interaction.guild;
      console.log(server);
      await interaction.reply({content:`サーバー名:${server.name}\n
      サーバーID:${server.id}/n
      メンバー数:${server.memberCount}\n
      `,ephemeral:false});
    }
    if(interaction.getSubcommand()==="user"){
      const user=interaction.options.getUser("target");
      await interaction.reply({content:`ユーザー名:${user.name}\n
      ユーザーID:${user.id}\n
      アバター:${user.avatarURL({format:"png"})}`,ephemeral:false});
    }
  }
}

module.exports=handleCommand;
