function generateIntern(data) {
    return `
    <div class="col-md-4">
    
        <div class="card profile-card-1">
            <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" class="background"/>
            <div class="profile">
                <i class="fas fa-user fa-5x"></i>
            </div>
            <div class="card-content">
                <h2>${data.name}<small>Intern</small></h3>
                <h6>${data.id}</h6>
                <h6><a href="mailto:">${data.email}</a></h6>
                <h6>${data.school}</h6>            
            </div>
        </div>
        
    </div>
    `;
}

module.exports = generateIntern;