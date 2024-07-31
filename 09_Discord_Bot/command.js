import { REST, Routes } from 'discord.js';


const commands = [{
    name : "create",
    description: 'Creates a new short url.',
}];

const rest = new REST({ version: '10' }).setToken();



(async() => {

    try {

        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands(), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
    
    } catch (error) {
        console.error(error);
    }
    
})()