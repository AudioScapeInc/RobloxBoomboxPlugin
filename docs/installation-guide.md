---
sidebar_position: 2
---

# Installation

Welcome to the installation guide for the [Audioscape Boombox plugin](https://create.roblox.com/store/asset/128208368873453/Audioscape-Boombox-Plugin?keyword=boombox&pageNumber=1&pagePosition=0) within Roblox Studio. Need help? Reach out to us in our [developer discord](https://discord.gg/MShtx9aaHh).

## Table of Contents

- [Installation](#installation)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Initial Installation and Setup](#initial-installation-and-setup)
    - [Text Instructions](#text-instructions)

## Prerequisites

- Roblox Studio installed
- [Audioscape Boombox](https://create.roblox.com/store/asset/128208368873453/Audioscape-Boombox-Plugin) plugin installed

## Initial Installation and Setup

_Make sure your volume is up to hear the video_

<iframe width="483" height="272" src="https://www.youtube.com/embed/Io_yoXwm_pk" title="InstallVideo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Text Instructions

1. **Open Roblox Studio**

   - Launch Roblox Studio.
   - Create a new game or open an existing one. For this example, you can start with a basic Baseplate template.

2. **Access the Plugin**

   - Navigate to the plugins section where you installed the Audioscape Boombox plugin.
   - Open the plugin by clicking on it.

     ![Access Plugin](https://cdn.discordapp.com/attachments/1224868487600799825/1284210985522954240/686752a4-37df-4ec7-90d8-e8bfc3afce49.png?ex=66e5ce2e&is=66e47cae&hm=cca67f27d9f338c75e85141ad55aec7a9d4e4614b01b44641587cdc63ae82cad&)

3. **Add Audioscape Boombox to Your Game**

   - Once the plugin is open, add the Audioscape Boombox to your game.

     ![Add Boombox](https://cdn.discordapp.com/attachments/1164647897799852135/1283812053819195523/68a57060-9560-458f-9109-43cadc5a5bc8.png?ex=66e45aa5&is=66e30925&hm=4f425f18d78a633e1258e40127708a16f95e2af3c4ff1f55696f8410fd25c7da&)

   - Roblox will ask you to confirm the Audioscape plugin can modify scripts. Click **Allow**.

     ![Confirm Modification](https://github.com/user-attachments/assets/a5783170-e000-41c8-8a57-137fab2dee1a)

   - It should now appear in your workspace.

4. **Configure API Key (Optional)**

   - The Boombox will function properly in Roblox Studio without a custom key in development mode. However, in production, the default key is rate limited.
   - For an unlimited key, contact us for a custom API key which you would install in this field `AudioscapeBoomBox.Developer_API_Key`.

     ![API Key Configuration](https://github.com/user-attachments/assets/22453109-feb1-4034-adc4-6fd2c5bce3e7)

5. **Publish Your Game (Optional, If not Published Already)**

   - Go to **File** > **Publish to Roblox**.
   - Name your game.
   - Wait for the game to publish successfully.

6. **Adjust Game Settings**

   - The Boombox uses an external song database to search for tracks, so you need to enable HTTP requests.
   - After publishing, navigate to the **Home** tab in the top menu bar.
   - Click **Game Settings**.
   - In **Game Settings**, go to **Security** and do the following:
     - Enable **Allow HTTP Requests**.
     - Enable **Enable Studio Access to API Services**.

7. **Ready for setting up your [Secret!](/docs/production-configuration)**
   - Once the boombox is working for you in development mode, you need to add an HTTP secret to have it work in production. Read on!
