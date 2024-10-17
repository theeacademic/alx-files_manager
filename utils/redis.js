// main.js
import redisClient from './utils/redis';

(async () => {
    console.log(redisClient.isAlive()); // Check if Redis is connected
    console.log(await redisClient.get('myKey')); // Retrieve value of 'myKey', should be null initially
    await redisClient.set('myKey', 12, 5); // Set 'myKey' to 12 with a 5-second expiration
    console.log(await redisClient.get('myKey')); // Retrieve value of 'myKey', should be 12

    setTimeout(async () => {
        console.log(await redisClient.get('myKey')); // After 10 seconds, the key should have expired and return null
    }, 1000 * 10);
})();

