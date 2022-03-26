<!DOCTYPE html>
<html lang="zxx">
<head>
	@include('layout.head')
</head>
<body class="js">

	<!-- Preloader -->
	<div class="preloader">
		<div class="preloader-inner">
			<div class="preloader-icon">
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
	<!-- End Preloader -->

	<!-- Header -->
	@include('layout.header')
	<!--/ End Header -->
	@include('layout.sidebar')

	@yield('main-content')

	@include('layout.footer')

</body>
</html>
