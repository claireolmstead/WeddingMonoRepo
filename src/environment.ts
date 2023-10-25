import { config } from 'dotenv';
import path from 'path';

const dotenvPath = path.resolve(process.cwd(), '.env');
config({ path: dotenvPath });

const { IS_CB = 'true' } = process.env;

const env = { IS_CB };

export default env;
