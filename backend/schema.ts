import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, relationship, password, timestamp, select, integer } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";
import "dotenv/config";

import { type Lists } from ".keystone/types";
import { cloudinaryImage } from "@keystone-6/cloudinary";

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
  apiKey: process.env.CLOUDINARY_KEY!,
  apiSecret: process.env.CLOUDINARY_SECRET!,
  folder: "sportstore",
};

export const lists = {
  User: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique",
      }),
      password: password({ validation: { isRequired: true } }),
      createdAt: timestamp({
        defaultValue: { kind: "now" },
      }),
    },
  }),
  Product: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      description: text({
        ui: {
          displayMode: "textarea",
        },
      }),
      photo: relationship({
        ref: "ProductImage.product",
        ui: {
          displayMode: "cards",
          cardFields: ["image", "altText"],
          inlineCreate: { fields: ["image", "altText"] },
          inlineEdit: { fields: ["image", "altText"] },
        },
      }),
      status: select({
        options: [
          { label: "Draft", value: "DRAFT" },
          { label: "Available", value: "AVAILABLE" },
          { label: "Unavailable", value: "UNAVAILABLE" },
        ],
        defaultValue: "DRAFT",
        ui: {
          displayMode: "segmented-control",
          createView: {
            fieldMode: "hidden",
          },
        },
      }),
      price: integer(),
    },
  }),
  ProductImage: list({
    access: allowAll,
    fields: {
      image: cloudinaryImage({
        cloudinary,
        label: "Source",
      }),
      altText: text(),
      product: relationship({ ref: "Product.photo" }),
    },
    ui: {
      listView: {
        initialColumns: ["image", "altText", "product"],
      },
    },
  }),
} satisfies Lists;
