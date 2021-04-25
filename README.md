# chromedark
Open Source Dark Mode for Chrome

(Actually it just inverts colors and hue-rotates by 180deg).

To use, download the files into your preferred directory.
In your chrome extension settings, activate developer mode and "Load unpacked".
Select your preferred folder.

In order to have the extension activate on a website, you need to add the domain to _manifest.json_
Under _content_scripts > matches_ and _host_permissions_, add the domains you want the extension to apply to.

The extension also has three modes:
 - Invert (dark)
 - Flatten (normal colors but darkened)
 - Default (no changes)
To adjust the mode, click on the extension at the top right of your chrome browser and select the extension.
