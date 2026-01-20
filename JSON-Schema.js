{
  "type": "object",
  "required": [
    "destination",
    "confidence",
    "recordTitle",
    "needsReview",
    "clarifyingQuestion",
    "tags",
    "payload"
  ],
  "properties": {
    "destination": {
      "type": "string",
      "enum": ["people", "projects", "ideas", "admin"]
    },
    "confidence": {
      "type": "number",
      "minimum": 0,
      "maximum": 1
    },
    "recordTitle": {
      "type": "string",
      "minLength": 1
    },
    "needsReview": {
      "type": "boolean"
    },
    "clarifyingQuestion": {
      "type": "string"
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "maxItems": 8
    },
    "payload": {
      "type": "object",
      "oneOf": [
        {
          "title": "PeoplePayload",
          "required": [
            "name",
            "context",
            "followUps",
            "lastTouchedDate",
            "notes"
          ],
          "properties": {
            "name": { "type": "string" },
            "context": { "type": "string" },
            "followUps": { "type": "string" },
            "lastTouchedDate": {
              "type": "string",
              "format": "date"
            },
            "notes": { "type": "string" }
          }
        },
        {
          "title": "ProjectsPayload",
          "required": [
            "name",
            "status",
            "nextAction",
            "notes"
          ],
          "properties": {
            "name": { "type": "string" },
            "status": {
              "type": "string",
              "enum": ["active", "waiting", "blocked", "someday", "done"]
            },
            "nextAction": { "type": "string" },
            "notes": { "type": "string" }
          }
        },
        {
          "title": "IdeasPayload",
          "required": [
            "title",
            "oneLiner",
            "notes"
          ],
          "properties": {
            "title": { "type": "string" },
            "oneLiner": { "type": "string" },
            "notes": { "type": "string" }
          }
        },
        {
          "title": "AdminPayload",
          "required": [
            "task",
            "dueDate",
            "status",
            "notes"
          ],
          "properties": {
            "task": { "type": "string" },
            "dueDate": {
              "type": ["string", "null"],
              "format": "date"
            },
            "status": {
              "type": "string",
              "enum": ["open", "done"]
            },
            "notes": { "type": "string" }
          }
        }
      ]
    }
  }
}
