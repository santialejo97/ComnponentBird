import { component } from "@prismatic-io/spectral";
import actions from "./actions";

export default component({
  key: "componentBird",
  public: false,
  display: {
    label: "Bird",
    description: "component para hacer consulta de plantillas de bird",
    iconPath: "iconoMessageBird.png",
  },
  actions,
});
