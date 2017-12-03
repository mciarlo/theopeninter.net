// Namespace
var open = {};

open.main = {
	windowTop: '',
	noteTimeout: 200,
	toolbarVisible: true,

	init: function ()
	{
		var $this = open.main;
		$this.checkScroll();
	},

	hideToolbar: function ()
	{
		var $this = open.main,
			height = (($('#message').outerHeight()) * -1);

		$this.toolbarVisible = false;
		$('#message').animate({
			bottom: height
		}, 50);

		if (document.documentElement.scrollTop) {
			$this.windowTop = document.documentElement.scrollTop;
		}
		else {
			$this.windowTop = window.pageYOffset;
		}
	},

	showToolbar: function ()
	{
		var $this = open.main;

		if ($this.toolbarVisible === false) {
			$this.toolbarVisible = true;
			$('#message').animate({
				'bottom': 0
			}, 50);
		}

	},

	detectScrolling: function (callback)
	{
		var $this = open.main,
			newWindowTop = '';

		if (document.documentElement.scrollTop) {
			newWindowTop = document.documentElement.scrollTop;
		}
		else {
			newWindowTop = window.pageYOffset;
		}

		if (newWindowTop !== $this.windowTop)
		{
			$this.windowTop = newWindowTop;
		}
		callback();
	},

	checkScroll: function ()
	{
		var $this = open.main;

		setTimeout(function ()
		{
			open.main.detectScrolling(function ()
			{
				open.main.checkScroll();
				$this.callPageNote($this.windowTop);
			});
		}, $this.noteTimeout);
	},

	callPageNote: function (scrollpos)
	{
		var $this = open.main;

		if (scrollpos < 1300)
		{
			$this.hideToolbar();
			$('#message').removeClass("state-1 state-2 state-3 state-4 state-5").addClass("state-1");
		}
		else if ((scrollpos > 1300) && (scrollpos < 2500))
		{
			$this.showToolbar();
			$('#message').removeClass("state-1 state-2 state-3 state-4 state-5").addClass("state-1");
		} else if ((scrollpos > 2500) && (scrollpos < 4600))
		{
			$this.showToolbar();
			$('#message').removeClass("state-1 state-2 state-3 state-4 state-5").addClass("state-2");
		}
		else if ((scrollpos > 4600) && (scrollpos < 6650))
		{
			$this.hideToolbar();
		}
		else if ((scrollpos > 6650) && (scrollpos < 7600))
		{
			$this.showToolbar();
			$('#message').removeClass("state-1 state-2 state-3 state-4 state-5").addClass("state-3");
		}
		else if ((scrollpos > 7600) && (scrollpos < 9500))
		{
			$this.showToolbar();
			$('#message').removeClass("state-1 state-2 state-3 state-4 state-5").addClass("state-4");
		}
		else if (scrollpos > 9500)
		{
			$this.showToolbar();
			$('#message').removeClass("state-1 state-2 state-3 state-4 state-5").addClass("state-5");
		}
		else
		{
			$this.hideToolbar();
		}
	},

	displayPageNote: function (elementId)
	{
		var $this = open.main;

		$this.showToolbar();
		$('#message').html('<p>' + $this.notes[elementId] + '</p>');
	}
};

$(document).ready(function () {
	open.main.init();
});
