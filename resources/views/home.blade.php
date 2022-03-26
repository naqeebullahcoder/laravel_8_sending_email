<!DOCTYPE html>
<html>
<head>
	<title>Send Email With Laravel</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<style type="text/css">
		.container{
			margin-top: 8%;
			width: 400px;
			border: ridge 1.5px white;
			padding: 20px;
		}
		body{
			background: #E0EAFC;
            background: -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC);
            background: linear-gradient(to right, #CFDEF3, #E0EAFC);
		}
	</style>
</head>

<body>
    <div class="container">
        <h2>Send Email With Laravel</h2>
            <form  method="POST"  action="{{ route('send.email') }}" enctype="multipart/form-data">
                <div class="form-group">
                   <label for="name">Name</label>
                   <input type="text" class="form-control" name="name" name="Name" required>
                </div>

                <div class="form-group">
                   <label for="email">Email</label>
                   <input type="text" class="form-control" email="email" name="Email" required>
                </div>

                <div class="form-group">
                   <label for="phone">Phone Number</label>
                   <input type="text" class="form-control" name="phone" name="Phone" required>
                </div>

                <div class="form-group">
                   <label for="message">Message</label>
                   <input type="email" class="form-control" name="message" name="Message" required>
                </div>
            <button type="submit" class="btn btn-primary" name="create">Submit</button>
        </form>
    </div>

</body>
</html>
