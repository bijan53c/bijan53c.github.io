---
layout: post
title: A quick guide for tmux
category: Tutorial
---

TMUX is a usefull terminal based tool for managing the windows (or tabs) in a terminal session. 
When you google it you will see this (which is actually from wikipedia):
`tmux is an open-source terminal multiplexer for Unix-like operating systems.
It allows multiple terminal sessions to be accessed simultaneously in a single window.
It is useful for running more than one command-line program at the same time.`

## You may ask why should I use this?
Yeah , I had the same question when I saw this tool for the first time. Cause in ubuntu I could use the window and open 
multiple terminals next to each other , or open multiple tabs. Or in Termux (The terminal app for android) I could use the left side
menu for managing stuff. And after all of these , learning to use this tool was a nightmare for that time ; but now I use it everyday!
**So here's why: **
When I got a ssh server , and I wanted to use it for automating tasks , I faced some problems.
- I couldn't make new tabs and run different commands at same time.
- If my task was taking long enough , I had to log out or turn of my device but keep the task running on the server.
    - And I needed to see the results or check the on going process and tasks after logging in to the server and keep track of them.


## How to use the tmux
First you need to install it and then run the command `tmux` and the tmux terminal pops up. Easy to say isn't it?
But let me say you don't need to learn commands for using it , you only will need combination of some keys from your keyboard.
Like ctrl+b ctrl+x and ... .

### Let's get started
Install it on *Debian* / *kali* / *ubuntu* :
> sudo apt update
> sudo apt install tmux

Install it on *Arch* :
> sudo pacman -Syu
> Sudo pacman -S tmux

After that run it by `tmux` command , no need to sudo.
After running that you will notice a little bit change it your terminal. It will look a little bit different.
Congrats! You are using tmux in your terminal.

As you see you can use the terminal normally , but we don't want that.
As an example run some commands on current window , and we want to use some other command on a different window separately. **First create another window**
by using > ctrl+b c

You may get confused by `ctrl+b c` let me explain. First you use ctrl+b , which means you keep one finger on ctrl button and hit the 'b' button on your
keyboard. After hitting 'b' , release the ctrl , you've done the first step. Now simply press the 'c' button. *Voilà* , you created a new window on tmux
and you can run commands separately from other window. Wasn't it easy?

OK , now you running tasks on two different windows , now you need to switch between these two , or three without closing any window.
> ctrl+b n   --> will switch to next window
> ctrl+b p  --> will switch to previous window

Till now , we understand that ctrl+b shows to tmux we want to do something (switch to next window , create window and ...)
and for each operation we have one key to use , usually the key is the first letter of the operation we want to do. 
For example ctrl+b c Creates a window , ctrl+b n goes to Next window.
This may help you to remember the keys easier. And don't worry you will learn all of it after using them sometime. And don't worry to keep a cheat sheet
or something to remember the stuff when you are doing some work.

OK , now imagine we do stuff on different windows and switch between them , how to close the window?
> ctrl+b x 
We all see the X on top of our browser windows or file managers in our computers with GUI.
and it asks you are you sure to close this window? Y to answer yes and N to answer No.


Now , the last usefull thing to do with tmux.
Imagine you run a command which runs a long process , like a nmap scan and it takes some time , and you want to close the ssh connection (logout)
but you need the process to get done by server even if you are not connected to it. So what do we do?

First run the command you want.
Then use 
> ctrl+b d
to detach the window. After doing that you will notice that tmux is gone and you are back to normal terminal. Meanwhile your command and the process are
running on the server and you can get offline for now.

Now we need to connect back to the server and check the process. So we are going to get the tmux attached back to our terminal to see our tasks.
So now , you shouldn't run `tmux` by it's own. 
Run this command
> tmux attach
And you will get back in your last tmux window.

And you will notice that all your windows are still there.

## That's it!
I know there are lots of other things that we can do using tmux , but I personally think for just starting out to use tmux , as a beginner , these options
are the most and main things to do , and I just started by learning these.
You can let me know if I missed something or any ideas you got by sending message to me in twitter or instagram.
And maybe I make a clean pdf file for using the tmux , so you can easily find the command and key required for using tmux. If you like this let me know
in social media.

Have a nice day , till next time!
