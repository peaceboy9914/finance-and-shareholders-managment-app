/* eslint-disable no-undef */
import { config } from "dotenv";

config({path: `.env.${process.env.NODE_ENV || 'development'}.local`});

export const {PORT, SERVER_URL, } = process.env; 