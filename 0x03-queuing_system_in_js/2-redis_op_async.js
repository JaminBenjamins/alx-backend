import redis from 'redis';
const { promisify } = require('util');

const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);

client.on('connect', () => {
    console.log('Redis client connected to the server');
});

client.on('error', (err) => {
    console.err(`Redis client not connected to the server: ${err.message}`);
});

function setNewSchool(schoolName, value) {
    client.set(schoolName, value, (err, response) => {
        redis.print(`Reply: ${response}`);
    });
}

let displaySchoolValue = async schoolName => {
    const getAsync = util.promisify(client.get).bind(client);
    console.log(await getAsync(schoolName));
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');