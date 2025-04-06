async function handleCommand(interaction){
  if(!interaction.isChatInputCommand())return;

  if(interaction.commandName==="ping") {
    await interaction.reply({content:"Pong!",ephemeral:true});
  }
  if(interaction.commandName==="info"){
    if(interaction.options._subcommand==="server"){
      const server=interaction.guild;
      console.log(server);
      await interaction.reply({content:`サーバー名:${server.name}\n
      サーバーID:${server.id}/n
      メンバー数:${server.memberCount}\n
      アイコン:${server.iconURL({format:"png"})}`,ephemeral:false});
    }
    if(interaction.options._subcommand==="user"){
      const user=interaction.options.getUser("target");
      await interaction.reply({content:`ユーザー名:${user.name}\n
      ユーザーID:${user.id}\n
      アバター:${user.avatarURL({format:"png"})}`,ephemeral:false});
    }
  }
}

module.exports=handleCommand;
