async function handleCommand(interaction){
  if(!interaction.isChatInputCommand())return;

  if(interaction.commandName==="ping") {
    await interaction.reply({content:"Pong!",ephemeral:true});
  }
  if(interaction.commandName==="info"){
    if(interaction._subcommand==="server"){
      const servsr=interaction.guild;
      console.log(server);
      await interaction.reply({content:`サーバー名:${server.name}\n
      サーバーID:${server.id}/n
      メンバー数:${server.memberCount}\n
      `});
    }
  }
}

module.exports=handleCommand;
