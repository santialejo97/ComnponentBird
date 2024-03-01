import { action } from "@prismatic-io/spectral";
import * as env from "dotenv";
import * as axios from "axios";

env.config();

export const getTemplates = action({
  display: {
    label: "Get Templates Bird",
    description: "Devuelve un listado de plantillas de Bird",
  },
  perform: async (context) => {
    const url = process.env.URL || "";
    const token = process.env.TOKEN || "";
    const http = axios.default;
    const data = await http
      .get(url, {
        headers: { Authorization: token },
      })
      .then((data) => {
        return;
      });

    return data;
  },
  inputs: {},
});

export default { getTemplates };
