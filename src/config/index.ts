import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  
  emailSender: {
    email: process.env.EMAIL,
    app_pass: process.env.APP_PASS,
  },


};
