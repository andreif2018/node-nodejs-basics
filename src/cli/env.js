export const parseEnv = () => {
    let result = '';
    for (let item in process.env) {
      const value = process.env[item];
      result += `RSS_${item}=${value}; `;
    }
    console.log(result.trim());
  };

parseEnv();