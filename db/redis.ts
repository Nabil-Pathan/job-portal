import  Redis  from "ioredis";

const redis = new Redis({
    host: 'redis-17171.c264.ap-south-1-1.ec2.redns.redis-cloud.com',
    password: 'MLrSR5ERlMlJp05itfcM3FFRSP3Rfxke',
    port: 17171
})

export default redis