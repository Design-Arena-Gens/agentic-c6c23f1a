import { NextResponse } from "next/server";

export async function GET() {
  const document = {
    openapi: "3.1.0",
    info: {
      title: "AtlasID Integration API",
      version: "1.0.0",
      description:
        "Reference schema for relying parties integrating with the AtlasID digital identity platform.",
      contact: {
        name: "AtlasID Platform Office",
        email: "identity-office@example.org",
      },
    },
    servers: [
      {
        url: "https://api.atlasid.gov",
        description: "Production API",
      },
      {
        url: "https://sandbox.api.atlasid.gov",
        description: "Sandbox API",
      },
    ],
    paths: {
      "/v1/authenticate": {
        post: {
          summary: "Initiate authentication",
          description:
            "Creates an authentication challenge for the specified citizen and relying party service context.",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    citizenId: { type: "string", description: "National ID" },
                    relyingPartyId: {
                      type: "string",
                      description: "Registered relying party identifier",
                    },
                    requestedAttributes: {
                      type: "array",
                      items: { type: "string" },
                    },
                    purpose: { type: "string" },
                  },
                  required: ["citizenId", "relyingPartyId"],
                },
              },
            },
          },
          responses: {
            "201": {
              description: "Challenge accepted",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      challengeId: { type: "string" },
                      expiresAt: { type: "string", format: "date-time" },
                      channelHints: { type: "array", items: { type: "string" } },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  return NextResponse.json(document);
}
