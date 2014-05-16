<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="myTags" uri="per.glenn.minegame.tags" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/mine_game.css">
<script type="text/javascript" src="js/jquery.js"></script>
<script src="js/emitter.js"></script>
<script src="js/self_explorer.js"></script>
<script src="js/hinter.js"></script>
<script src="js/timer.js"></script>
<script src="js/mine_game.js"></script>
<!-- Start WOWSlider.com HEAD section -->
	<link rel="stylesheet" type="text/css" href="engine1/style.css" />
	
	<!-- End WOWSlider.com HEAD section -->
<link rel="stylesheet" type="text/css" href="css/images.css">
</head>
<body>
<div id=wrapper>
	<div id=header ><span>Play MineSweeper Online</span></div>
	<!-- Start WOWSlider.com BODY section -->
	<div id="wowslider-container1">
	<div class="ws_images"><ul>
<li><img src="data1/images/castle.jpg" alt="" title="" id="wows1_0"/></li>
<li><img src="data1/images/colorful_gate.jpg" alt="" title="" id="wows1_1"/></li>
<li><img src="data1/images/dusk_tree.jpg" alt="" title="" id="wows1_2"/></li>
<li><img src="data1/images/green_and_red.jpg" alt="" title="" id="wows1_3"/></li>
<li><img src="data1/images/leaves_road.jpg" alt="" title="" id="wows1_4"/></li>
<li><img src="data1/images/waterfall.jpg" alt="" title="" id="wows1_5"/></li>
</ul></div>
<div class="ws_thumbs">
<div>
<a href="#wows1_0" title=""><img src="data1/tooltips/castle.jpg" alt="" /></a>
<a href="#wows1_1" title=""><img src="data1/tooltips/colorful_gate.jpg" alt="" /></a>
<a href="#wows1_2" title=""><img src="data1/tooltips/dusk_tree.jpg" alt="" /></a>
<a href="#wows1_3" title=""><img src="data1/tooltips/green_and_red.jpg" alt="" /></a>
<a href="#wows1_4" title=""><img src="data1/tooltips/leaves_road.jpg" alt="" /></a>
<a href="#wows1_5" title=""><img src="data1/tooltips/waterfall.jpg" alt="" /></a>
</div>
</div>

<a class="wsl" href="http://wowslider.com">Javascript Slideshow With Captions by WOWSlider.com v3.4m</a>
	<div class="ws_shadow"></div>
	<div id="nice_tip">Game is fun! But there are more spectaculars outdoors! Enjoy!</div>
	</div>
	<script type="text/javascript" src="engine1/wowslider.js"></script>
	<script type="text/javascript" src="engine1/script.js"></script>
	<!-- End WOWSlider.com BODY section -->
	<div id=content>
	<div id=recorder>
	<div id=time_used>00:00</div>
	<a id=begin_btn>Let's roll!</a>
	<div id=mines_remain>40</div>
	</div>
	<table>
		<myTags:rows rows="${rows}">
			<tr>
				<myTags:row row="${row}">
					<td class="covered" pixeltype="${type}" num="${num}" row_id="${row_id}" col_id="${col_id}"></td>
				</myTags:row>
			</tr>			
		</myTags:rows>
	</table>
	</div>
	<hr />
	<div id=footer></div>
</div>
</body>
</html>