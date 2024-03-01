import { action } from "@prismatic-io/spectral";
import * as env from "dotenv";
import  axios from "axios";

env.config();

export const getTemplates = action({
  display: {
    label: "Get Templates Bird",
    description: "Devuelve un listado de plantillas de Bird",
  },
  perform: async (context) => {
    const url =  "https://integrations.messagebird.com/v3/platforms/whatsapp/templates";
    const token = "AccessKey huVOxZhd7FesrirBseoUwOrc0"
    const response= await axios
      .get(url, {
        headers: { Authorization: token },
      })
      const list = response.data.items.map((element: any) =>{
        return {
          components: element.components,
          name:element.name,
          status:element.status,
          language:element.language, 
          category:element.category
      }
      });
      const  listTemplate = {
        provider: "Bird",
        list
      };
    return Promise.resolve({data: listTemplate});
  },
  inputs: {},
});

export default { getTemplates };
