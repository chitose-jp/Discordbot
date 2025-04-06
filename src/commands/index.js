function handleCommand(interaction){
  if(!interaction.isChatInputCommand())return;

  if(interaction.commandName==="ping") {
    await interaction.reply({content:"Pong!",ephemeral:true});
  }
}

module.exports=handleCommand;
