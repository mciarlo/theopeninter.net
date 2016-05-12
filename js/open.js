var open={};open.main={windowTop:'',noteTimeout:200,notes:["ISPs provide you internet access. You can use it as much as you want, for anything you want.","While they can limit your speeds, ISPs do it mostly to slow illegal downloads.","All your data goes through a single connection and you’re charged one monthly fee.","ISPs want to manage internet access and charge you depending on your usage.","That means AT&T or Comcast could block a service like Google Maps and charge for their own."],toolbarVisible:true,init:function()
{var $this=open.main;$this.checkScroll();},hideToolbar:function()
{var $this=open.main,height=(($('#message').outerHeight())*-1);$this.toolbarVisible=false;$('#message').animate({bottom:height},50);if(document.documentElement.scrollTop){$this.windowTop=document.documentElement.scrollTop;}
else{$this.windowTop=window.pageYOffset;}},showToolbar:function()
{var $this=open.main;if($this.toolbarVisible===false){$this.toolbarVisible=true;$('#message').animate({'bottom':0},50);}},detectScrolling:function(callback)
{var $this=open.main,newWindowTop='';if(document.documentElement.scrollTop){newWindowTop=document.documentElement.scrollTop;}
else{newWindowTop=window.pageYOffset;}
if(newWindowTop!==$this.windowTop)
{$this.windowTop=newWindowTop;}
callback();},checkScroll:function()
{var $this=open.main;setTimeout(function()
{open.main.detectScrolling(function()
{open.main.checkScroll();$this.callPageNote($this.windowTop);});},$this.noteTimeout);},callPageNote:function(scrollpos)
{var $this=open.main;if(scrollpos<1300)
{$this.hideToolbar();$('#message').removeClass('green');$('#message').html('<p>Get the word out and save the open internet. <a href="#">Tweet this website »</a></p>');}
else if((scrollpos>1300)&&(scrollpos<2300))
{$('#message').removeClass('green');$this.displayPageNote(0);}
else if((scrollpos>2300)&&(scrollpos<3700))
{$('#message').addClass('green');$this.displayPageNote(1);}
else if((scrollpos>3700)&&(scrollpos<4600))
{$('#message').removeClass('green');$this.displayPageNote(2);}
else if((scrollpos>4600)&&(scrollpos<6650))
{$this.hideToolbar();}
else if((scrollpos>6650)&&(scrollpos<7900))
{$('#message').removeClass('green');$this.displayPageNote(3);}
else if((scrollpos>7900)&&(scrollpos<10000))
{$('#message').addClass('green');$this.displayPageNote(4);}
else if(scrollpos>10000)
{$this.showToolbar();$('#message').removeClass('green');$('#message').html('<p>Get the word out and save the open internet. <a href="http://twitter.com/home?status=A visual guide to net neutrality: http://www.theopeninter.net" title="Tweet this site">Tweet this website &raquo;</a></p>');}
else
{$this.hideToolbar();$('#message').removeClass('green');}},displayPageNote:function(elementId)
{var $this=open.main;$this.showToolbar();$('#message').html('<p>'+$this.notes[elementId]+'</p>');}};$(document).ready(function(){open.main.init();});