import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, relationship, password, timestamp, select, integer } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

import { type Lists } from ".keystone/types";

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
} satisfies Lists;
