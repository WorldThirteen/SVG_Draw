export default {
	"data": [{
		"type": "certificate-profile",
		"id": "5675d73c8aba264656c33860",
		"attributes": {
			"name": "ROOT CA",
			"require_approval": true
		},
		"relationships": {
			"requirements": {
				"data": {
					"type": "certificate-requirements"
				}
			}
		}
	}, {
		"type": "certificate-profile",
		"id": "5675d73c8aba264656c33867",
		"attributes": {
			"name": "SUB CA",
			"require_approval": true
		},
		"relationships": {
			"requirements": {
				"data": {
					"type": "certificate-requirements"
				}
			}
		}
	}, {
		"type": "certificate-profile",
		"id": "5675d73c8aba264656c33870",
		"attributes": {
			"name": "OCSP",
			"require_approval": true
		},
		"relationships": {
			"requirements": {
				"data": {
					"type": "certificate-requirements"
				}
			}
		}
	}, {
		"type": "certificate-profile",
		"id": "5675d73c8aba264656c33879",
		"attributes": {
			"name": "TSP",
			"require_approval": true
		},
		"relationships": {
			"requirements": {
				"data": {
					"type": "certificate-requirements"
				}
			}
		}
	}, {
		"type": "certificate-profile",
		"id": "5675d73c8aba264656c33882",
		"attributes": {
			"name": "TLS Server",
			"require_approval": false
		},
		"relationships": {
			"requirements": {
				"data": {
					"type": "certificate-requirements"
				}
			}
		}
	}, {
		"type": "certificate-profile",
		"id": "5675d73c8aba264656c3388c",
		"attributes": {
			"name": "DOCUMENT SIGNING",
			"require_approval": false
		},
		"relationships": {
			"requirements": {
				"data": {
					"type": "certificate-requirements"
				}
			}
		}
	}, {
		"type": "certificate-profile",
		"id": "5675d73c8aba264656c33897",
		"attributes": {
			"name": "DOCUMENT ENCRYPTION",
			"require_approval": false
		},
		"relationships": {
			"requirements": {
				"data": {
					"type": "certificate-requirements"
				}
			}
		}
	}],
	"meta": {
		"api-docs": "http://unobtanium.desertconsulting.net/api-docs"
	}
}
