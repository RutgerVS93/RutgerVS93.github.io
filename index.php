<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Application Assigment</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Cabin:700' rel='stylesheet' type='text/css'>

    <!-- Custom styles for this template -->
    <link href="css/grayscale.min.css" rel="stylesheet">


	<!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
   	integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==" crossorigin=""/>
   	<!-- Leaflet JS -->
   	<script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"
    integrity="sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA=="
    crossorigin=""></script>

  </head>

  <body id="page-top">

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top"></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
      </div>
    </nav>

    <header class="masthead">
      <div class="intro-body">
        <div class="container">
          <div class="row">
            <div id="divId" class="col-lg-8 mx-auto">
              <h1 class="brand-heading">Accelerometer/ Gyroscope Reader</h1>
              <button id="test" onclick="accelerometerValues()">Accelerometer Values:</button>
              <li id="xValue" class="list-group-item disabled"></li>
              <li id="yValue" class="list-group-item disabled"></li>
              <li id="zValue" class="list-group-item disabled"></li>    
              <button id="gyro" onclick="gyroscopeValues()">Gyroscope Values:</button>      
              <li id="alphaValue" class="list-group-item disabled"></li>
              <li id="betaValue" class="list-group-item disabled"></li>
              <li id="gammaValue" class="list-group-item disabled"></li>    	
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="content-section text-center">
    	<div class="intro-body">
	    	<div class="container">
	    		<div class="row">
	    			<div class="col-lg-8 mx-auto">
	    				<button type="button" onclick="loadDoc()">Get Ajax Stuff</button>
	    				<div id="AJAX1">
	    				</div>
	    				<div id="AJAX2">
	    				</div>	    				
					</div>
	    		</div>
    		</div>
    	</div>
	</section>

	<section class="content-section text-center">
    	<div class="intro-body">
	    	<div class="container">
	    		<div class="row">
	    			<div class="col-lg-8 mx-auto"> 
	    				<p id="locationValues"></p>
						<button type="button" onclick="getLocation()">GeoLoc</button>  
						<div id="mapid" style="width: 600px; height: 400px;"></div> 	
					</div>
	    		</div>
    		</div>
    	</div>
	</section>

	<form action="" method="POST">
		<input type="text" value="">
	</form>

	

    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>


    <!-- Custom scripts for this template -->
    <script src="js/grayscale.js"></script>



  </body>
</html>


