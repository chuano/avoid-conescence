import express from "express";
import PartnerAreaRoutes from "./PartnerArea/Infrastructure/EntryPoint/PartnerAreaRoutes";
import {UsersAreaRoutes} from "./UsersArea/Infrastructure/EntryPoint/UsersAreaRoutes";

export const createApp = () => {
  const app = express();

  app.use(PartnerAreaRoutes.register());
  app.use(UsersAreaRoutes.register());

  return app;
}

