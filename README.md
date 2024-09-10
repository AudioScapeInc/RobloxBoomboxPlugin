# Audioscape AI Boombox Installation Guide

This guide will walk you through the installation and setup of the [Audioscape Boombox plugin](https://create.roblox.com/store/asset/128208368873453/Audioscape-Boombox-Plugin?keyword=boombox&pageNumber=1&pagePosition=0) within Roblox Studio. Need help? Reach out to us in our [developer discord](https://discord.gg/MShtx9aaHh).  

## Table of Contents
* [Prerequisites](#Prerequisites)
* [Initial Installation](#initial-installation-and-setup)
* [Production Configuration](#Production-Configuration)
* [FAQ](#faq) 

## Prerequisites
- Roblox Studio installed
- [Audioscape Boombox](https://create.roblox.com/store/asset/128208368873453/Audioscape-Boombox-Plugin) plugin installed

# Initial Installation and Setup
_Make sure your volume is up to hear the video_

https://github.com/user-attachments/assets/acc032da-5d93-4be7-852c-81af32149a34

## Text Instructions
### 1. Open Roblox Studio
- Launch Roblox Studio.
- Create a new game or open an existing one. For this example, you can start with a basic Baseplate template.

### 2. Access the Plugin
- After opening the game, navigate to the plugins section where you installed the Audioscape Boombox plugin.
- Open the plugin by clicking on it.

![Screenshot 2024-09-05 at 2 35 34 PM](https://github.com/user-attachments/assets/686752a4-37df-4ec7-90d8-e8bfc3afce49)

### 3. Add Audioscape Boombox to Your Game
- Once the plugin is open, add the Audioscape Boombox to your game. It should appear in your workspace.
![Screenshot 2024-09-05 at 2 29 15 PM](https://github.com/user-attachments/assets/68a57060-9560-458f-9109-43cadc5a5bc8)

### 4. Configure API Key (Optional)
- If you have an unique developer API key, input it in the provided field under `AudioscapeBoomBox.Developer_API_Key`. If you do not have one, leave the default key as is. The Boombox will function properly without a custom key in development mode.

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
  - Enable **Allow Studio Access to API Services**.

### 7. Ready for Secret!
- Once the boombox is working for you in development mode, you need to add an http secret to have it work in production. Read on!

# Production Configuration

Set up your own HTTP secret to enable the Boombox to function in production in your game.

Developer Api Secret: `mNyj8dItG0aSjEqYY2Bu085Vq27Qyf5E7eIW7oa4`

https://github.com/user-attachments/assets/babe8544-1e8f-4eec-aa35-b3e2c6eab3a2

### 1. Open Your Game in Roblox
- Go to the Roblox **Create** page and select the place where you want to add the Audioscape Boombox.
- Click the three dots (`...`) in the top-right corner of the game's tile and select **Configure this Experience**.

### 2. Navigate to Secrets
- Once you're on the configuration page, look to the left-hand side and find the **Secrets** tab.
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

Enjoy using the Audioscape Boombox in your experience!



