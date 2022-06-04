export const parseEnv = () => {
  process.env.RSS_value1 = "value1";
  process.env.RSS_value2 = "value2";
  const result = [];

  for (const env in process.env) {
    if (env.startsWith("RSS_")) {
      result.push(`${env}=${process.env[env]}`);
    }
  }
  console.log(result.join("; "));
};

parseEnv();
