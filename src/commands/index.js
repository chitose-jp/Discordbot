async function handleCommand(interaction){
  if(!interaction.isChatInputCommand())return;

  if(interaction.commandName==="ping") {
    await interaction.reply({content:"Pong!",ephemeral:true});
  }
  if(interaction.commandName==="info"){
    if(interaction._subcommand==="server"){
      const servsr=interaction.guild;
      console.log(server);
      await interaction.reply(`サーバー名:${server.name}\n
      サーバーID:${server.id}/n
      メンバー数:${server.memberCount}\n
      `);
    }
    if(interaction._subcommand==="user"){
      const user=interaction.options.getUser("target");
      await interaction.reply(`ユーザー名:${user.name}\n
      ユーザーID:${user.id}\n
      アバター:${user.avatarURL({format:"png"})}`);
    }
  }
}

module.exports=handleCommand;
