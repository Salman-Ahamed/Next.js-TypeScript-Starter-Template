---
name: "🗃 Database Fix"
description: "For database issues, migrations, and optimizations"
title: "[DB] #789 - Brief description"
labels: "database, sql, optimization"
assignees: "db-team"
---

## 🎯 Issue Overview

<!-- Provide a clear description of the database issue -->

## 📊 Database Impact

| Metric     | Before | After | Change |
| ---------- | ------ | ----- | ------ |
| Query Time | 2.5s   | 0.5s  | -80%   |
| Table Size | 10GB   | 8GB   | -20%   |

## 🛠️ Changes Made

- [ ] Schema modifications
- [ ] Index optimizations
- [ ] Query improvements
- [ ] Data migrations
- [ ] Backup strategy

## 📝 Schema Changes

```sql
-- Before
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

-- After
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🧪 Testing

- [ ] Migration tested
- [ ] Rollback tested
- [ ] Performance tested
- [ ] Data integrity verified
- [ ] Backup/restore tested

## 🔍 Review Checklist

- [ ] Data integrity maintained
- [ ] Performance impact assessed
- [ ] Backup strategy verified
- [ ] Rollback plan prepared
- [ ] Security implications reviewed

## 📚 Documentation

- [ ] Schema changes documented
- [ ] Migration guide prepared
- [ ] Rollback procedure documented
- [ ] Monitoring updated

## ⚡ Deployment

- [ ] Staging verified
- [ ] Backup taken
- [ ] Monitoring configured
- [ ] Alerts updated

## 📌 Related Issues

Closes #789

## 📝 Additional Notes

<!-- Any additional context or notes -->
