/*function headerContainer () {
	with(document) {		 
		 write("<div id='headerMain'>");		 
			 write("<div class='logo'>Logo")
			 write("</div>");			 
			 write("<div class='menuMain'>");			 
				 write("<ul class='menu'>");
					 write("<li><a href='include.html' id='rgtlink1' name='rgtlink1'>Home</a>");
					 write("</li>")
					 write("<li><a href='product.html' id='rgtlink2' name='rgtlink2'  onmouseover='show(\"t1\",\"rgtlink2\")' onmouseout='hide(\"t1\",\"rgtlink2\")'>Products</a>");
					   write("<div style='display:none;' id='t1' onmouseover='show(\"t1\",\"rgtlink2\")' onmouseout='hide(\"t1\",\"rgtlink2\")' class='sublnkBox'>");
							write("<ul>");
								write("<li><a href='product_1.html' id='rgtlink01' name='rgtlink01'>Product1</a></li>");
								write("<li><a href='product_2.html' id='a02' name='a02'>Product2</a></li>");
								write("<li><a href='#'>Product3</a></li>");
								write("<li><a href='#'>Product4</a></li>");
								write("<li><a href='#'>Product5</a></li>");
							write("</ul>");
						write("</div>");
					 write("</li>")
					 write("<li><a href='about.html' id='a1' name='a1'>About Us</a>");
 
					 write("</li>")
					 write("<li><a href='contact.html' id='rgtlink3' name='rgtlink3'>Contact Us</a>");
					 write("</li>")										 
				 write("</ul>");			 
			 write("</div>");		 
	 write("</div>");	 
	}
	imgsearch();
}
 
 
 
function footerContainer(){
		with(document){
				write("<div id='footerMain'>");
					write("<div class='footerLnk'><a href='#'>Home</a> | <a href='#'>About Us</a> | <a href='#'>Contact Us</a></div>");					
				write("</div>");
			}
	}