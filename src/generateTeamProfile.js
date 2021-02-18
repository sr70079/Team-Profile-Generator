function generateTeamProfile(data) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="../dist/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"             
        crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" 
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    
    
    <!-- /* enter info submitted from index.js to generate team profile with manager, engineers and interns, will need some sort of loop with cards to add as many as are entered  */ -->
    
    </head>
    
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Team Profile</span>
        </div>
    </nav>
    
    <body>
    
    
    <section>
        <div class="container">
            <div class="row">
                
                <div class="col-md-4">
    
                    <div class="card profile-card-1">
                        <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" class="background"/>
                        <i class="fas fa-user"></i>
                        <div class="card-content">
                            <h2>Savannah Fields<small>Engineer</small></h3>                       
                        </div>
                    </div>
                    
                </div>
    
            </div>
        </div>
    </section>
    
    </body>
    </html> 
    
  
  `;
  }
  
  module.exports = generateTeamProfile;
  