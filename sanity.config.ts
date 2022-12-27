import { AssetSource, defineConfig, isDev } from "sanity";

import StudioNavbar from "./studio-components/StudioNavbar";
import Logo from "./studio-components/Logo";
import { myTheme } from "./theme";

import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { structure } from "./desk";

import { visionTool } from "@sanity/vision";
import { colorInput } from "@sanity/color-input";
import { imageHotspotArrayPlugin } from "sanity-plugin-hotspot-array";
import { media, mediaAssetSource } from "sanity-plugin-media";
import { customDocumentActions } from "./plugins/customDocumentActions";

const devOnlyPlugins = [visionTool()];

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "MUERITZPHONE_Content_Studio",
  title: "MUERITZPHONE Content Studio",

  projectId,
  dataset,

  plugins: [
    deskTool({ structure }),
    colorInput(),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  //theme: myTheme,

  form: {
    file: {
      assetSources: (previousAssetSources: AssetSource[]) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource !== mediaAssetSource
        );
      },
    },
    image: {
      assetSources: (previousAssetSources: AssetSource[]) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource === mediaAssetSource
        );
      },
    },
  },
});
