
function generateManager(data) {
    return `
    <div class="col-md-4">
    
        <div class="card profile-card-1">
            <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" class="background"/>
            <i class="fas fa-user"></i>
            <div class="card-content">
                <h2>${data.managerName}<small>Manager</small></h3>
                <h6>${data.managerId}</h6>
                <h6>${data.managerEmail}</h6>
                <h6>${data.managerOfficeNumber}</h6>            
            </div>
        </div>
        
    </div>
    `;
}

module.exports = generateManager;