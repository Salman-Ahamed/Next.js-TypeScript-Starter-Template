---
name: 📡 API Issue
about: Report API problems or improvements
title: "[API] "
labels: api
assignees: ""
---

**Issue Type**

- [ ] Bug
- [ ] Performance
- [ ] Security
- [ ] Documentation
- [ ] Feature Request
- [ ] Other (please specify)

**API Details**

- Endpoint: [e.g. GET /api/v1/users]
- Version: [e.g. v1]
- Environment: [e.g. Production, Staging]
- Authentication: [e.g. Bearer Token, API Key]

**Request Information**

- Method: [GET/POST/PUT/DELETE]
- Headers:

```json
{
  "Authorization": "Bearer token",
  "Content-Type": "application/json"
}
```

- Query Parameters:

```json
{
  "param1": "value1",
  "param2": "value2"
}
```

- Request Body:

```json
{
  "key": "value"
}
```

**Response Information**

- Status Code: [e.g. 200, 400, 500]
- Response Headers:

```json
{
  "Content-Type": "application/json",
  "X-Rate-Limit-Remaining": "99"
}
```

- Actual Response:

```json
{
  "error": {
    "code": "",
    "message": ""
  }
}
```

- Expected Response:

```json
{
  "data": {
    "key": "value"
  }
}
```

**Performance Metrics**

- Response Time: [e.g. 500ms]
- Payload Size: [e.g. 2.5KB]
- Rate Limit: [e.g. 100 requests/minute]
- Concurrent Requests: [e.g. 10]

**Reproduction Steps**

1. Step one
2. Step two
3. Step three

**Impact**

- [ ] Critical (Service Down)
- [ ] High (Major Functionality Affected)
- [ ] Medium (Partial Functionality)
- [ ] Low (Minor Issue)

**Additional Context**

- Client SDK Version:
- Server Version:
- Related Issues:
- Workarounds:

**Priority Level**

- [ ] Critical (Blocks Production)
- [ ] High (Blocks Development)
- [ ] Medium (Should be addressed soon)
- [ ] Low (Can be addressed later)
