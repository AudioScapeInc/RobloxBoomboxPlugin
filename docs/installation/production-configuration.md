---
sidebar_position: 2
---

# Production Configuration

Set up your own HTTP secret to enable the Boombox to function in production in your game.

:::danger[My tip]

You will need to set up your own secret to enable the Boombox to function in production in your game. If you do not have an API key, you can use this default rate-limited secret provided by Audioscape.ai: `mNyj8dItG0aSjEqYY2Bu085Vq27Qyf5E7eIW7oa4`.

:::

<!-- Developer API Secret: `mNyj8dItG0aSjEqYY2Bu085Vq27Qyf5E7eIW7oa4` -->

<iframe width="483" height="272" src="https://www.youtube.com/embed/XdRR_sPp5h0" title="Plugin Secret configuration for the free Audioscape Roblox Boombox plugin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Steps to Configure

1. **Open Your Game in Roblox**

   - Go to the [Roblox Create page](https://create.roblox.com) with your experiences.
   - Click on the thumbnail of your experience with the Audioscape Boombox plugin and select "Manage Experience".

     ![Manage Experience](https://github.com/user-attachments/assets/11a05556-4114-451a-ad3f-94efbe77fa79) ![Manage Experience](https://github.com/user-attachments/assets/422a2cce-107d-40c7-89ba-b6aef8d400b5)

2. **Navigate to Secrets**

   - On the configuration page, find the **Secrets** tab on the left-hand side.

     ![Secrets Tab](https://github.com/user-attachments/assets/c601ab69-d5d3-4e61-884a-24e944ded009)

   - Click **Secrets** to open the settings page.

3. **Create a New Secret**

   - Click the **Create Secret** button (indicated by a plus sign `+`).
   - A prompt will appear for you to name your new secret.

4. **Set the Secret Name**

   - Enter the following exact name for the secret:  
     **`audioscape_boombox_api_key`**
   - The name must be exactly as written above. If there are any discrepancies, the Boombox will not work.

5. **Add the Secret Value**

   - If you already have a production API key from Audioscape.ai, enter that as the secret value.
   - If you do not have an API key, you can use this default rate-limited secret provided by Audioscape.ai: `mNyj8dItG0aSjEqYY2Bu085Vq27Qyf5E7eIW7oa4`.

6. **Finalize the Setup**

   - After entering the secret name and value, click **Create** to save the secret.

7. **You're All Set!**
   - The HTTP secret is now successfully configured for your game. The Audioscape Boombox will be able to pull the API key and function correctly in your game.

## FAQ

1. **The boombox doesn't work!**
   - Check if you have configured the [API key](/docs/installation/production-configuration) and [secret](#production-configuration) properly following the steps above.
   - Make sure you have an active internet connection, and that your speakers and game audio are enabled.
   - If it still doesn't work, it could be that you hit the daily rate limit of 500 requests per day. If so, please allow 24 hours for it to restart. And, [contact us](https://discord.gg/MShtx9aaHh) for an unlimited API key.

Need help? Reach out to us in our [developer discord](https://discord.gg/MShtx9aaHh).

## Advanced Developer Controls

There are a number of dev-configurable settings for volume, player location, accent colors, and pushing tracks to the player when you want. See our [BoomBox Server Page](/docs/usage/boombox-server#requiring) for more info.

Enjoy using the Audioscape Boombox in your experience!
