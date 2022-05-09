
> cd c:\projects\IsacaDP.NextJs

firs time run:

- ensure you have node >= v16.13
- use nvm if need to keep multiple versions of node (e.g. 8.11.3 for vs2017 IsacaDP.Sitecore)

> npm install

to run this app:

> jss start
	old cmd > npm run start

powershell execution issues:
	Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass	
	*if this doesn't work, try:
		Set-ExecutionPolicy -Scope CurrentUser
			then type "RemoteSigned" or "Bypass"
	