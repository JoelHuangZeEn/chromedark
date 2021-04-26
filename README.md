# chromedark
Open Source Dark Mode for Chrome you can be sure isn't spying on you

(Actually it just inverts colors and hue-rotates by 180deg).

To use, download the files into your preferred directory.
In your chrome extensions settings, activate developer mode and "Load unpacked".
Select your preferred folder.

In order to have the extension activate on a website, you need to add the domain to _manifest.json_

Under _content_scripts > matches_ and _host_permissions_, add the domains you want the extension to apply to. After each update, you need to reload the extension in your extensions settings with the "refresh" icon.

The extension also has three modes:
 - Invert (dark)
 - Flatten (normal colors but darkened)
 - Default (no changes)
To adjust the mode, click on the extension at the top right of your chrome browser and select the extension.

The new mode will apply the next time you load a webpage.

**Note:** The extension runs a script that only starts once the webpage has loaded all DOM content, so you may get a flash of white background before the inversion takes place. To reduce this, you can copy the entire extension folder (rename it to something like chromedarkpre), and edit _manifest.json_. Firstly, change the _name_ field to whatever you like. Then change the _content_scripts > run_at_ field to _document_start_. Then load both extensions into chrome. The white background flash should be significantly reduced.

An unfortunate side-effect of this is that when you want to add a domain, you need to add it to both extensions.
