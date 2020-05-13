
//===============
//    PORT
//===============
process.env.PORT = process.env.PORT || 8080;


module.exports = {
    timeouts: {
        timer_default: process.env.TIMEOUT_TIMER_DEFAULT || 3000,
        timer_query: process.env.TIMEOUT_TIMER_QUERY || 150000,

    },
    redisConfig: {
        port: process.env.NODE_REDIS_PORT || 6379,
        server: process.env.NODE_REDIS_SERVER || '127.0.0.1',
        dbNumber: process.env.NODE_REDIS_DB_NUMBER || 15,
        pass: process.env.NODE_REDIS_PASS || '',
        ttl: process.env.NODE_REDIS_TTL || 86400,
        tls: process.env.REDIS_USE_TLS
    }
};