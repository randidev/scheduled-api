import axios, { AxiosInstance } from "axios";

const emailService: AxiosInstance = axios.create({
  baseURL:
    process.env.EMAIL_SERVICE_BASE_URL ||
    "https://email-service.digitalenvision.com.au",
});

export default emailService;
