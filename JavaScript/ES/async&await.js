function getUser( userId ) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'Noman',
            })
        }, 1000);
    })
}

function getServices( user ) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 2000);
    });
}

function getServicesCost( services ) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(services.length * 100);
        }, 3000);
    })
}

// getUser( 100 )
// .then(getServices)
// .then(getServicesCost)
// .then(console.log)

async function LodeData() {
    let user = await getUser(1);
    let services = await getServices(user);
    let cost =  await getServicesCost(services);
    console.log(`The service cost is ${cost}`);
}
LodeData();