import { ENV } from "../src/shared/config/env";
import { http } from "./http";




export const authApi = http(ENV.AUTH_API);