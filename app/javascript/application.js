import Rails from "@rails/ujs";
import * as ReactRailsUJS from "react_ujs";
import "stylesheets/application";

Rails.start();

// Support component names relative to this directory:
const componentRequireContext = require.context("src/components", true);
// eslint-disable-next-line react-hooks/rules-of-hooks
ReactRailsUJS.useContext(componentRequireContext);
