export default {
  "data": [
    {
      "type": "ca",
      "attributes": {
        "_id": 1,
        "description": "This is my first Root CA",
        "name": "My First Root CA"
      },
      "relationships": {
        "owner": {
          "data": {
            "type": "user"
          }
        },
        "certificate": {
          "data": {
            "type": "certificate"
          }
        },
        "key": {
          "data": {
            "type": "keypair"
          }
        }
      }
    },
    {
      "type": "ca",
      "attributes": {
        "_id": 2,
        "description": "This is my second Root CA",
        "name": "My Second Root CA"
      },
      "relationships": {
        "owner": {
          "data": {
            "type": "user"
          }
        },
        "certificate": {
          "data": {
            "type": "certificate"
          }
        },
        "key": {
          "data": {
            "type": "keypair"
          }
        }
      }
    },
    {
      "type": "ca",
      "attributes": {
        "_id": 3,
        "description": "This is my Third Root CA",
        "name": "My Third Root CA"
      },
      "relationships": {
        "owner": {
          "data": {
            "type": "user"
          }
        },
        "certificate": {
          "data": {
            "type": "certificate"
          }
        },
        "key": {
          "data": {
            "type": "keypair"
          }
        }
      }
    }
  ],
  "links": {
    "self": "http://unobtanium.desertconsulting.net/ra?take=5&skip=0&page=1&pageSize=5",
    "first": "http://unobtanium.desertconsulting.net/ra?page=1&offset=0&limit=5",
    "last": "http://unobtanium.desertconsulting.net/ra?page=1&offset=0&limit=5"
  },
  "meta": {
    "page": {
      "total": 3,
      "limit": 5,
      "offset": 0
    },
    "api-docs": "http://unobtanium.desertconsulting.net/api-docs"
  }
}