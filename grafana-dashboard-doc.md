
{
  "dashboard": {
    "id": null,
    "title": "API de Livros - Testes de Carga (K6)",
    "timezone": "browser",
    "schemaVersion": 26,
    "version": 1,
    "refresh": "5s",
    "panels": [
      {
        "type": "graph",
        "title": "Requisições por Segundo (http_reqs)",
        "id": 1,
        "datasource": "InfluxDB",
        "targets": [
          {
            "measurement": "http_reqs",
            "groupBy": [
              { "type": "time", "params": ["$__interval"] }
            ],
            "select": [
              [{ "type": "field", "params": ["value"] }, { "type": "sum", "params": [] }]
            ],
            "refId": "A",
            "tags": []
          }
        ],
        "xaxis": { "mode": "time" },
        "yaxes": [
          { "format": "short" },
          { "format": "short" }
        ]
      },
      {
        "type": "graph",
        "title": "Duração Média das Requisições (ms)",
        "id": 2,
        "datasource": "InfluxDB",
        "targets": [
          {
            "measurement": "http_req_duration",
            "groupBy": [
              { "type": "time", "params": ["$__interval"] },
              { "type": "tag", "params": ["method"] }
            ],
            "select": [
              [{ "type": "field", "params": ["value"] }, { "type": "mean", "params": [] }]
            ],
            "refId": "A",
            "tags": []
          }
        ],
        "xaxis": { "mode": "time" },
        "yaxes": [
          { "format": "ms" },
          { "format": "short" }
        ]
      },
      {
        "type": "graph",
        "title": "Percentual de Erros (http_req_failed)",
        "id": 3,
        "datasource": "InfluxDB",
        "targets": [
          {
            "measurement": "http_req_failed",
            "groupBy": [
              { "type": "time", "params": ["$__interval"] }
            ],
            "select": [
              [{ "type": "field", "params": ["value"] }, { "type": "mean", "params": [] }]
            ],
            "refId": "A",
            "tags": []
          }
        ],
        "xaxis": { "mode": "time" },
        "yaxes": [
          { "format": "percent" },
          { "format": "short" }
        ]
      }
    ],
    "templating": { "list": [] },
    "annotations": { "list": [] }
  },
  "overwrite": true
}