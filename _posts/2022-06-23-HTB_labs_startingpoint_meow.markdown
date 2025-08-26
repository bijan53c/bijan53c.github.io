---
layout: post
title: Hack the box : labs-startingpoint : Meow
category: CTF
---

Hello everone , today in this post I'm showing you how to get started in Hack the box by completing the starting point:Meow. After signing up there will be a little tour around the dashboard and the UI
so you will understand what thing is where.
Some times ago , in HTB (Hack the box) there were no starting point and tutorial , the main thing you could do , was to start doing CTF's right away. It was not noob friendly
as we say in gaming. There were only machines to hack , and sometimes there were no easy machine , so the beginners couldn't do anything except failing. After some time the 
machines were getting retired and the walktroughs and tutorials were out. Now people would read those and understand where was their mistake.

About the machines , it's still the same. But now there are **labs** , **Tracks** , **challenges** and ... . So you can get more familiar and even learn how to start if you
are on early stages.

I think if you are on first levels it's best to start from the *labs* , and the starting point. There will be some tasks that help you understand how to learn and use information
on the Internet to learn new stuff. These tasks are really easy you just need to learn. And in here I explain stuff more , so you understand what you are doing and why. Let's get into it.

------------------------

## First
You need to connect to the HackTheBox. What does that mean? There is a VPN file special for you only. you download and use openvpn to connect. After connecting , you will be
in the hack the box network. This helps you to get connections to the machines (The computers that are designed for you to hack and do the CTF). So depending on you OS,
download the file and connect. There will be a tip how to connect. On the right top corner , you will see the button *Connect to HTB*. You can even see the required command.

Then you can complete it and then click on the *spawn the machine*. By clicking this , the machine will get spawned and there will be an IP for it. This IP can chage every time
you spawn it.


## Task 1
**What does the acronym VM stand for?**
let me ask another question. Have you worked with virtualbox? or VMware? If yes you know the answer to the task1 question. If you don't know , try searching google about those two
software. Or simply 'what is a vm?'. You will find the answer. I recommend you to dive a little deep , so you will get a big picture , how it works and what is it used for.

## Task2
**What tool do we use to interact with the operating system in order to issue commands via the command line, such as the one to start our VPN connection? It's also known as a console or shell.**
Easy , you just used it. Specially if you use linux , the name of tool is just written there. Yeah the terminal. Remember , if you haven't used linux , or you never used a computer without mouse and GUI ,
or you never used ssh or telnet ; you need to learn commands of that OS like linux , to be able to use the terminal. By terminal you are able to do everything. If you don't know it yet , there are 
lots of situations you can't use graphic interface , to use mouse and desktop. You can only use terminal.

## Task3
**What service do we use to form our VPN connection into HTB labs?**
You remember the program you used or called in terminal , to connect to HTB? The name of software should be at first of command.

## Task4
**What is the abbreviated name for a 'tunnel interface' in the output of your VPN boot-up sequence output?**
This is a little bit tricky , try to see the hint. Now search the net for anymore tips.
If you use linux you can find out the answer. Just by using command `ip a`. You can see some stuff poping up in terminal. Try to read them. You will see your openvpn connection
in there , at the firts of that there's a word with a number , that's your answer.

## Task5
**What tool do we use to test our connection to the target with an ICMP echo request?**
There are some situations that we need to check our connection with the target machine. But there is no web , or ssh. How do we understand that we are on the same network 
with target , or can access the machine?
There is a tool in terminal. We use it like this `ping <Target IP>` . If there's connection we can see the status of it.
and the answer is in that command. Try to use it. replace <Target IP> with the machine you just spawned.

## Task6
**What is the name of the most common tool for finding open ports on a target?**
I won't tell anything. It's a really well known tool , you can search the web to find it.

## Task7
**What service do we identify on port 23/tcp during our scans?**
For doing this one you can search the web like 'what is on port 23'. Or get a little hacker style. Use the tool you found in last task , to scan the target machine you spawned.
You will find out what is the service on that port.

## Task8
**What username is able to log into the target over telnet with a blank password?**
This one is all google search. I did the same my self. If you know about linux , you can check the hint and get the answer.

## Submit flag
This is the fun part. Now you know some stuff that gonna help you to hack this machine. Use telnet to connect to IP of spawned machine (Meow). There will be a prompt , asking
username. Use the answer of task 8 , then you won't need password.
After that you will be in. Congrats you've hacked in!
Now you need a flag , a text string , saved as .txt file , which proves that you have hacked the machine. (This is how CTF's work)
The target machine is linux. Try `ls` . It will list directories and file. 
In the appeard list there's a `flag.txt`. That's what we are looking for. We need to read it.
use cat. `cat flag.txt`. The content of file will be displayed. copy that long string of text. paste it in the input field in hack the box and click submit.
You have submitted the flag! Congrats!

I hope you enjoyed and learned enough. And yeah I didn't give the answers right away , cause the point of doing ctf's and labs , is to learn more , not to cheat ourselves.

