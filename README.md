# Audioscape AI Boombox Installation Guide

This guide will walk you through the installation and setup of the [Audioscape Boombox plugin](https://create.roblox.com/store/asset/128208368873453/Audioscape-Boombox-Plugin?keyword=boombox&pageNumber=1&pagePosition=0) within Roblox Studio. Need help? Reach out to us in our [developer discord](https://discord.gg/MShtx9aaHh).  

## Table of Contents
* [Prerequisites](#Prerequisites)
* [Initial Installation](#initial-installation-and-setup)
* [Production Configuration](#Production-Configuration)
* [FAQ](#faq)
* [Advanced Developer Controls](#Advanced-controls)

## Prerequisites
- Roblox Studio installed
- [Audioscape Boombox](https://create.roblox.com/store/asset/128208368873453/Audioscape-Boombox-Plugin) plugin installed

# Initial Installation and Setup
_Make sure your volume is up to hear the video_

https://github.com/user-attachments/assets/017b907f-243a-46f8-b5f8-90b94765c141

## Text Instructions
### 1. Open Roblox Studio
- Launch Roblox Studio.
- Create a new game or open an existing one. For this example, you can start with a basic Baseplate template.

### 2. Access the Plugin
- After opening the game, navigate to the plugins section where you installed the Audioscape Boombox plugin.
- Open the plugin by clicking on it.
  
  ![Screenshot 2024-09-05 at 2 35 34 PM](https://github.com/user-attachments/assets/686752a4-37df-4ec7-90d8-e8bfc3afce49)

### 3. Add Audioscape Boombox to Your Game
- Once the plugin is open, add the Audioscape Boombox to your game.
  
  ![Screenshot 2024-09-05 at 2 29 15 PM](https://github.com/user-attachments/assets/68a57060-9560-458f-9109-43cadc5a5bc8)

- Roblox will ask you to confirm the Audioscape plugin can modify scripts.
  
  ![Screenshot 2024-09-10 at 3 51 46 PM](https://github.com/user-attachments/assets/a5783170-e000-41c8-8a57-137fab2dee1a)

- It should now appear in your workspace.

### 4. Configure API Key (Optional)
- The Boombox will function properly in Roblox Studio without a custom key in development mode. However, in production the default key is rate limited.
- If you want an unlimited key, you will need to contact us for a custom API key which you would install in this field `AudioscapeBoomBox.Developer_API_Key`.
  
  ![image](https://github.com/user-attachments/assets/22453109-feb1-4034-adc4-6fd2c5bce3e7)
- And you would need to install a new secret (see below)


### 5. Publish Your Game (Optional, If not Published Already)
- Go to **File** > **Publish to Roblox**.
- Name your game.
- Wait for the game to publish successfully.

### 6. Adjust Game Settings
The Boombox uses an external song database to search for tracks, so you need to enable HTTP requests.
- After publishing, navigate to the **Home** tab in the top menu bar.
- Click **Game Settings**.
- In **Game Settings**, go to **Security** and do the following:
  - Enable **Allow HTTP Requests**.
  - Enable **Enable Studio Access to API Services**.

### 7. Ready for Secret!
- Once the boombox is working for you in development mode, you need to add an http secret to have it work in production. Read on!

# Production Configuration

Set up your own HTTP secret to enable the Boombox to function in production in your game.

Developer Api Secret: `mNyj8dItG0aSjEqYY2Bu085Vq27Qyf5E7eIW7oa4`

https://github.com/user-attachments/assets/937cfb3a-1f95-4972-a86a-002a9a45971f

### 1. Open Your Game in Roblox
- Go to the **https://create.roblox.com** page with your experiences.
- Click on the thumbnail of your experience with the Audioscape Boombox plugin and select "Manage Experience"

  ![Screenshot 2024-09-10 at 4 33 52 PM](https://github.com/user-attachments/assets/11a05556-4114-451a-ad3f-94efbe77fa79)    ![Screenshot 2024-09-10 at 4 36 11 PM](https://github.com/user-attachments/assets/422a2cce-107d-40c7-89ba-b6aef8d400b5)

### 2. Navigate to Secrets
- Once you're on the configuration page, look to the left-hand side and find the **Secrets** tab.

  ![Screenshot 2024-09-10 at 4 35 27 PM](https://github.com/user-attachments/assets/c601ab69-d5d3-4e61-884a-24e944ded009)

- Click **Secrets** to open the settings page.

### 3. Create a New Secret
- Click the **Create Secret** button (indicated by a plus sign `+`).
- A prompt will appear for you to name your new secret.

### 4. Set the Secret Name
- Enter the following exact name for the secret:  
  **`audioscape_boombox_api_key`**
- The name must be exactly as written above. If there are any discrepancies, the Boombox will not work.

### 5. Add the Secret Value
- If you already have a production API key from Audioscape.ai, enter that as the secret value.
- If you do not have an API key, you can use this `mNyj8dItG0aSjEqYY2Bu085Vq27Qyf5E7eIW7oa4` default rate-limited secret provided by Audioscape.ai. 

### 6. Finalize the Setup
- After entering the secret name and value, click **Create** to save the secret.

### 7. You're All Set!
- The HTTP secret is now successfully configured for your game. The Audioscape Boombox will be able to pull the API key and function correctly in your game.

  # FAQ
  1. The boombox doesn't work!
     1. Check if you have configured the [API key](#configure-api-key) and [secret](#production-configuration) properly following the steps above.
     2. Make sure you have an active internet connection, and that your speakers and game audio are enabled.
     3. If it still doesn't work, it could be that you hit the daily rate limit of 500 requests per day. If so, please allow 24h for it to restart. And, [contact us](https://discord.gg/MShtx9aaHh) for an unlimited API key. 

  Need help? Reach out to us in our [developer discord](https://discord.gg/MShtx9aaHh).  

# Advanced Controls
There are a number of dev-configurable settings for volume, player location, accent colors, and pushing tracks to the player when you want. See our [advanced settings doc](AdvancedSettings.md) for more info.

Enjoy using the Audioscape Boombox in your experience!

