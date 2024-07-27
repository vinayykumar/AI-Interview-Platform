/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-db_owner:0oWUVmzXSc1h@ep-delicate-band-a5w763hv.us-east-2.aws.neon.tech/ai-interview-db?sslmode=require',
    }
  };