		function display_c(){
			var refresh=1000; // Refresh rate in milli seconds
			mytime=setTimeout('display_ct()',refresh)
			}

		function display_ct() {
			var x = new Date();
			// var GMT=x.toUTCString();// changing the display to UTC string
			// var ct=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getYear(); 
			// ct = ct + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
			// var trimStr = $.trim(x);
			document.getElementById('cur_time').innerHTML = x;
			display_c();
		 }


		window.onscroll = function() {myFunction();};

		function myFunction() {
			var navbar = document.getElementById("navbar");
			var sticky = navbar.offsetTop;

			// alert("scroll");

			// alert(window.pageYOffset);
			// alert(sticky);

		  if (window.pageYOffset >= sticky) {
		    // navbar.classList.add("sticky_header");
		    // alert("add sticky");
		  } else {
		    // navbar.classList.remove("sticky_header");
		    // navbar.classList.add("sticky_header");
		    // alert("remove class");
		  }
		}
