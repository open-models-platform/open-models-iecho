import { Events, ActivityType } from "discord.js";
import chalk from "chalk";

export default {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    client.user.setPresence({
      activities: [
        {
          name: `v${client.version} | open-models-iecho.io`,
          type: ActivityType.Playing,
        },
      ],
      status: "online",
    });

    //const { data, error } = await supabase.from("conversations").delete();
    console.log(
      chalk.white(`Ready! Logged in as `) + chalk.blue.bold(client.user.tag)
    );
  },
};
