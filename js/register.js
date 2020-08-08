$(document).ready(function(){
	
	var cname = $("#companyname");
	cname.keyup(checkCname);

	var pkgname = $("#packagename");
	pkgname.keyup(checkPkgname);

	var add = $("#address");
	add.keyup(checkAdd);
	
	var email = $("#emailid");
	email.keyup(checkEmail);
	
	var mob = $("#mobno");
	mob.keyup(checkMob);
	
	var conper = $("#contactper");
	conper.keyup(checkConper);
	
	function checkCname()
	{
		$("#valcname").hide();
		if(cname.val()=="")
		{
			$("#valcname").addClass("valreg");
			$("#valcname").html("Please enter company name").show(1000);
			return false;
		}
		else
		{
			$("#valcname").hide(1000);
			return true;
		}
	}

	function checkPkgname()
	{
		$("#valpkgname").hide();
		if(pkgname.val()=="")
		{
			$("#valpkgname").addClass("valreg");
			$("#valpkgname").html("Please enter package name").show(1000);
			return false;
		}
		else
		{
			$("#valpkgname").hide(1000);
			return true;
		}
	}
	
	function checkAdd()
	{
		$("#valadd").hide();
		if(add.val()=="")
		{
			$("#valadd").addClass("valreg");
			$("#valadd").html("Please enter address").show(1000);
			return false;
		}
		else
		{
			$("#valadd").hide(1000);
			return true;
		}
	}
	
	function checkEmail()
	{
		$("#valemail").hide();
		if(email.val()=="")
		{
			$("#valemail").addClass("valreg");
			$("#valemail").html("Please enter email id").show(1000);
			return false;
		}
		else
		{
			$("#valemail").hide(1000);
			return true;
		}
	}
	
	function checkMob()
	{
		$("#valmob").hide();
		if(mob.val()=="")
		{
			$("#valmob").addClass("valreg");
			$("#valmob").html("Please enter mobile no").show(1000);
			return false;
		}
		else
		{
			$("#valmob").hide(1000);
			if(isNaN(mob.val()))
			{
				$("#valmob").addClass("valreg");
				$("#valmob").html("Please enter valid mobile no").show(1000);
				return false;
			}
			return true;
		}
	}
	function checkConper()
	{
		$("#valconper").hide();
		if(conper.val()=="")
		{
			$("#valconper").addClass("valreg");
			$("#valconper").html("Please enter contact person's name").show(1000);
			return false;
		}
		else
		{
			$("#valconper").hide(1000);
			return true;
		}
	}
	
	$("#reg").click(function(){
		if(checkCname() && checkPkgname() && checkAdd() && checkEmail() && checkMob() && checkConper())
		{
			
		}
		else
		{
			return false;
		}
	});
});