# Audioscape AI Boombox Installation Guide

This guide will walk you through the installation and setup of the Audioscape AI Boombox plugin within Roblox Studio.

## Prerequisites
- Roblox Studio installed
- [Audioscape.ai Boombox](https://www.roblox.com/games/16282022243/AudioScape-ai-Boombox-Plugin). plugin installed

## Steps

https://github.com/user-attachments/assets/acc032da-5d93-4be7-852c-81af32149a34


### 1. Open Roblox Studio
- Launch Roblox Studio.
- Create a new game or open an existing one. For this example, you can start with a basic Baseplate template.

### 2. Access the Plugin
- After opening the game, navigate to the plugins section where the Audioscape AI Boombox plugin is installed.
- Open the plugin by clicking on it.

### 3. Add Audioscape Boombox to Your Game
- Once the plugin is open, add the Audioscape AI Boombox to your game. It should appear in your workspace.

### 4. Configure API Key (Optional)
- If you have an API key, input it in the provided field under `AudioscapeBoomBox.Developer_API_Key`. If you do not have one, leave the default key as is. The Boombox will function properly without a custom key.

### 5. Publish Your Game (Optional, If not Published Already)
- Go to **File** > **Publish to Roblox**.
- Name your game
- Wait for the game to publish successfully.

### 6. Adjust Game Settings
- After publishing, navigate to the **Home** tab in the top menu bar.
- Click **Game Settings**.
- In **Game Settings**, go to **Security** and do the following:
  - Enable **Allow HTTP Requests**.
  - Enable **Allow Studio Access to API Services**.

### 7. Ready for Secret!
- Once the boombox loads up!


# Setting Up an HTTP Secret in Roblox for Audioscape Boombox

Follow this guide to set up your own HTTP secret to integrate the Audioscape Boombox into your Roblox game.

## Steps

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
- If you already have an API key from Audioscape.ai, enter that as the secret value.
- If you do not have an API key, you can use the default rate-limited secret provided by Audioscape.ai.

### 6. Finalize the Setup
- After entering the secret name and value, click **Create** to save the secret.

### 7. You're All Set!
- The HTTP secret is now successfully configured for your game. The Audioscape Boombox will be able to pull the API key and function correctly in your game.

Enjoy using the Audioscape Boombox in your experience!



