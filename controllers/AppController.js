import redisClient from '../utils/redis.js';
import dbClient from '../utils/db.js';

class AppController {
  // GET /status => return the status of Redis and MongoDB
  static getStatus(req, res) {
    const status = {
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    };
    res.status(200).json(status);
  }

  // GET /stats => return the number of users and files in the database
  static async getStats(req, res) {
    const users = await dbClient.nbUsers(); // Get the number of users
    const files = await dbClient.nbFiles(); // Get the number of files

    const stats = {
      users,
      files,
    };

    res.status(200).json(stats);
  }
}

export default AppController;

